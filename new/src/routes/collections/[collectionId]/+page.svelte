<script lang="ts">
	import TaskItemListContainer from '../../../components/taskList/TaskItemListContainer.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<TaskItemListContainer collection={data.collection} tasks={data.tasks} />
