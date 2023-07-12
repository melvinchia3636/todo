import PocketBase from 'pocketbase';
import type { PageLoad } from './$types';

async function getCollection() {
	const client = new PocketBase('http://127.0.0.1:8090');
	const collections = await client.collection('collections').getFullList();

	for (const collection of collections) {
		const finishedTasks = await client.collection('tasks').getFullList({
			filter: `collection = "${collection.id}" && is_done = true`
		});

		const totalTasks = await client.collection('tasks').getFullList({
			filter: `collection = "${collection.id}"`
		});

		collection.finishedTask = finishedTasks.length;
		collection.totalTask = totalTasks.length;
	}

	return collections;
}

export const load = (async () => {
	const collections = await getCollection();
	return { collections };
}) satisfies PageLoad;
