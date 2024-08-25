import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { PUBLIC_SHOP_DB_NAME } from '$env/static/public';

export const load = (async ({ locals }) => {}) satisfies PageServerLoad;
