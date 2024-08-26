import { error } from '@sveltejs/kit';
import type { PageServerLoad } from '../about/$types';
import { URL } from 'url';

const absoluteDirPath = new URL('.', import.meta.url).pathname;
const currentFolderName = absoluteDirPath.split('/').slice(-2, -1)[0];

export const load = (async ({ locals }) => {
	try {
		const shop = await locals.pb
			.collection(`shops`)
			.getFirstListItem(`name = '${PUBLIC_SHOP_DB_NAME}'`);
		const staticPageRecord = await locals.pb
			.collection('static_pages')
			.getFirstListItem(`slug="${currentFolderName}" && shop="${shop.id}"`);
		return structuredClone(staticPageRecord);
	} catch (e) {
		console.log(e);
		console.log(`Couldnt load page /${currentFolderName}`);
		throw error(500, {
			message: 'Couldnt load this page'
		});
	}
}) satisfies PageServerLoad;

export const prerender = true;
