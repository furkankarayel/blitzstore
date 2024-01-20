import { PUBLIC_SHOP_DB_NAME } from '$env/static/public';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load = (async ({ params, locals }) => {
	try {
		const shop = await locals.pb
			.collection(`shops`)
			.getFirstListItem(`name = '${PUBLIC_SHOP_DB_NAME}'`);
		if (params.slug === 'all') {
			const productsRecords = await locals.pb.collection('products').getList(1, 50, {
				filter: `slug="${params.slug}" && shop="${shop.id}"`,
				sort: '-created'
			});

			return structuredClone(productsRecords);
		}

		const category = await locals.pb
			.collection('categories')
			.getFirstListItem(`slug="${params.slug}"`);

		const productsRecords = await locals.pb.collection('products').getList(1, 50, {
			filter: `categories ~ "${category.id}" && shop="${shop.id}"`,
			sort: '-created'
		});

		return structuredClone(productsRecords);
	} catch (e) {
		console.log(`Couldnt load page /shop/${params.slug}`);
		throw error(500, {
			message: 'Couldnt load this page'
		});
	}
}) satisfies PageServerLoad;
