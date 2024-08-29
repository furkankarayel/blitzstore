import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { PUBLIC_SHOP_DB_NAME } from '$env/static/public';

export const load = (async ({ locals }) => {
	try {
		const shop = await locals.pb
			.collection(`shops`)
			.getFirstListItem(`name = '${PUBLIC_SHOP_DB_NAME}'`);
		

		const [showcaseRecords, carouselsRecords, featuredRecords] = await Promise.all(
			[
				locals.pb.collection('showcase').getList(1, 50, {
					filter: `shop="${shop.id}"`,
					expand: 'products',
					sort: 'created'
				}),
				
			
				locals.pb.collection('carousels').getFullList({
					sort: 'created'
				}),
				locals.pb.collection('featured_products').getList(1, 50, {
					filter: `shop="${shop.id}"`,
					expand: 'products',
					sort: '-created'
				})
			]
		);

		return {
			showcase: structuredClone(showcaseRecords),
			featured: structuredClone(featuredRecords)
		};
	} catch (e) {
		console.log(`Couldnt load page /` + e);
		throw error(500, {
			message: 'Couldnt load this page'
		});
	}
}) satisfies PageServerLoad;
