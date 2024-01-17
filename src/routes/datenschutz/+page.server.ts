import { error } from '@sveltejs/kit';
import type { PageServerLoad } from '../about/$types';
import { URL } from 'url';
import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
import PocketBase from 'pocketbase';

const absoluteDirPath = new URL('.', import.meta.url).pathname;
const currentFolderName = absoluteDirPath.split('/').slice(-2, -1)[0];

const pb = new PocketBase(PUBLIC_POCKETBASE_URL);

export const load = (async ({ locals }) => {
	try {
		const staticPageRecord = await locals.pb
			.collection('static_pages')
			.getFirstListItem(`slug="${currentFolderName}"`);
		return structuredClone(staticPageRecord);
	} catch (e) {
		console.log(e);
		console.log(`Couldnt load page /${currentFolderName}`);
		throw error(500, {
			message: 'Couldnt load this page'
		});
	}
}) satisfies PageServerLoad;
