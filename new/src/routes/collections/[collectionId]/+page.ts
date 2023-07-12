import PocketBase from 'pocketbase';
import type { PageLoad } from '../$types';

async function getTasks(collectionId: string) {
	const client = new PocketBase('http://127.0.0.1:8090');
	const collection = (await client.collection('collections').getOne(collectionId)).export();
	const tasks = (
		await client.collection('tasks').getList(1, 50, {
			filter: `collection = "${collectionId}"`
		})
	).items.map((e) => e.export());

	return {
		collection,
		tasks
	};
}

export const load = (async ({ params }) => {
	const { collectionId } = params;
	const { collection, tasks } = await getTasks(collectionId);
	return {
		collection,
		tasks
	};
}) satisfies PageLoad;
