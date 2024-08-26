import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { PUBLIC_POCKETBASE_URL, PUBLIC_SHOP_DB_NAME } from '$env/static/public';
import PocketBase from 'pocketbase';
const pb = new PocketBase(PUBLIC_POCKETBASE_URL);

// eslint-disable-next-line prefer-const
let myObjects = [{ slug: '' }];
const shop = await pb.collection(`shops`).getFirstListItem(`name = '${PUBLIC_SHOP_DB_NAME}'`);
const productsRecords = await pb.collection('products').getList(1, 50, {
	filter: `shop="${shop.id}"`,
	sort: '-created'
});

productsRecords.items.forEach((e) => {
	myObjects.push({ slug: e['slug'] });
});
myObjects.shift();

export function entries() {
	return myObjects;
}

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
		console.log(`Couldnt load page /products/${params.slug}`);
		throw error(500, {
			message: 'Couldnt load this page'
		});
	}
}) satisfies PageServerLoad;

export const prerender = true;
