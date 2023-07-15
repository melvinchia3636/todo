import PocketBase from 'pocketbase';
import type { PageLoad } from './$types';

async function getCollection() {
	const client = new PocketBase(import.meta.env.VITE_POCKETBASE_URL);
	const collections = (await client.collection('collections').getFullList()).map((e) => e.export());

	for (const collection of collections) {
		const tasks = await client.collection('tasks').getList(1, 100, {
			filter: `collection = "${collection.id}" && is_done = false`
		});

		collection.tasks = tasks.items.map((e) => e.export());
	}

	return collections;
}

export const load = (async () => {
	const collections = await getCollection();
	return { collections, getCollection };
}) satisfies PageLoad;
