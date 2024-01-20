import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { PUBLIC_SHOP_DB_NAME } from '$env/static/public';

export const load = (async ({ params, locals }) => {
	try {
		const shop = await locals.pb
			.collection(`shops`)
			.getFirstListItem(`name = '${PUBLIC_SHOP_DB_NAME}'`);
		const productRecord = await locals.pb
			.collection('products')
			.getFirstListItem(`slug="${params.slug}" && shop="${shop.id}"`, {
				expand: 'related_products'
			});

		return structuredClone(productRecord);
	} catch (e) {
		console.log(e);
		console.log(`Couldnt load page /shop/${params.slug}`);
		throw error(500, {
			message: 'Couldnt load this page'
		});
	}
}) satisfies PageServerLoad;
