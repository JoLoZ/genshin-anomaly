import type { PageServerLoad } from './$types';
import fs from 'fs';

export const load = (async () => {
	const bookmark = fs.readFileSync('./bookmark.js' ,"utf-8");
	return { bookmark: bookmark };
}) satisfies PageServerLoad;
