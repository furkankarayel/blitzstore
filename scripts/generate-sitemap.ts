/* eslint-disable prefer-const */
import dirTree from 'directory-tree';
import * as fs from 'fs';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

const baseRoute = '/';

let routes: string[] = [baseRoute];

let date = new Date().toISOString().split('T')[0];
let sitemap = '';

import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.PUBLIC_POCKETBASE_URL);
const tree = dirTree('./src/routes');

function getSitemapXML(domain: string, routes: string[]) {
	let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
	sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
	routes.forEach((route) => {
		sitemap += getSitemapUrl(domain + route);
	});
	sitemap += '\n</urlset>';
	return sitemap;
}

function getSitemapUrl(location: string) {
	let url = '<url>\n' + `<loc>${location}</loc>\n` + `<lastmod>${date}</lastmod>\n` + '</url>';
	return url;
}


async function getProductPages() {
	const shop = await pb
		.collection(`shops`)
		.getFirstListItem(`name = '${process.env.PUBLIC_SHOP_DB_NAME}'`);
	const productsRecords = await pb.collection('products').getList(1, 50, {
		filter: `shop="${shop.id}"`,
		sort: '-created'
	});
	productsRecords.items.forEach((e) => {
		routes.push('/products/' + e['slug']);
	});
}

function getEndpoints(tree: dirTree.DirectoryTree, route: string) {
	tree?.children?.forEach((child) => {
		if (
			child.children != undefined &&
			child.children.length != 0 &&
			!child.name.includes('[') &&
			!child.name.includes('order')
		) {
			let childRoute = route + child.name;
			if (child.children.some((e) => e.name === '+page.svelte')) {
				routes.push(childRoute);
			}
			getEndpoints(child, childRoute + '/');
		}
	});
}

function getSitemap() {
	sitemap = getSitemapXML(process.env.PUBLIC_SHOP_URL, routes);
}

getProductPages().then(function () {
	getEndpoints(tree, baseRoute);
	getSitemap();

	fs.writeFileSync('.vercel/output/static/sitemap.xml', sitemap);
	//fs.writeFileSync('.svelte-kit/cloudflare/sitemap.xml', sitemap);
	//fs.writeFileSync('../static/sitemap.xml', sitemap);
});

