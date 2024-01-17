import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
import dirTree from 'directory-tree';
import * as fs from 'fs';

let baseRoute = '/';
let routes: string[] = [baseRoute];
let date = new Date().toISOString().split('T')[0];
let sitemap = '';

import PocketBase from 'pocketbase';

const pb = new PocketBase(PUBLIC_POCKETBASE_URL);
const tree = dirTree('.vercel/output/src/routes');

function getSitemapXML(domain: string, routes: string[]) {
	let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
	sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
	routes.forEach((route) => {
		//console.log(route);
		sitemap += getSitemapUrl(domain + route);
	});
	sitemap += '\n</urlset>';
	return sitemap;
}

function getSitemapUrl(location: string) {
	let url = '<url>\n' + `<loc>${location}</loc>\n` + `<lastmod>${date}</lastmod>\n` + '</url>';
	return url;
}

// function getSitemapUrlDB(location: string, table: string) {
// 	let url = '<url>\n' + `<loc>${domain + }</loc>\n` + `<lastmod>${date}</lastmod>\n` + '</url>';
// 	return url;
// }

async function getProductPages() {
	const productsRecords = await pb.collection('products').getFullList();
	productsRecords.forEach((e) => {
		routes.push('/products/' + e['slug']);
	});
}

// async function getCategoryPages() {
// 	const productsRecords = await pb.collection('categories').getFullList();
// 	productsRecords.forEach((e) => {
// 		routes.push('/' + e['slug']);
// 	});
// }

function getEndpoints(tree: dirTree.DirectoryTree, route: string) {
	tree.children?.forEach((child) => {
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

async function getSitemap() {
	sitemap = getSitemapXML('https://kastonia.de', routes);
}

//If you want to put products and categories in the sitemap
// Promise.all([getCategoryPages(), getProductPages()]).then(function (results) {
// 	getSitemap();
// });
console.log(sitemap);

export async function GET() {
	try {
		const results = await getProductPages();
		getEndpoints(tree, baseRoute);
		getSitemap();

		return new Response(sitemap.trim(), {
			headers: {
				'Content-Type': 'application/xml'
			}
		});
	} catch (error) {
		console.error('Error:', error);
		return new Response('Internal Server Error', {
			status: 500, // Internal Server Error
			headers: {
				'Content-Type': 'text/plain'
			}
		});
	}
}
