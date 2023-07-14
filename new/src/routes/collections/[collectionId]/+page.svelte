<script lang="ts">
	import { page } from '$app/stores';
	import TaskItemListContainer from '$lib/components/taskList/TaskItemListContainer.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let collection: { [key: string]: any } = {};
	let tasks: { [key: string]: any }[] = [];

	$: collection = data.collection;
	$: tasks = data.tasks;

	async function update() {
		const response = await data.getTasks($page.params.collectionId);
		collection = response.collection;
		tasks = response.tasks;
	}
</script>

<TaskItemListContainer {collection} {tasks} {update} />
