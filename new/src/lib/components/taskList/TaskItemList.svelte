<script lang="ts">
	import Task from './Task.svelte';

	export let update: () => void;

	export let tasks: { [key: string]: any } = {};
	export let setEditTask: (task: { [key: string]: any }) => void;
</script>

<div class="flex flex-col w-full gap-4">
	{#if tasks.length > 0}
		{#each tasks?.reverse() as task}
			<div class="p-4 bg-base-100 rounded-xl hover:bg-base-200 transition-colors relative isolate">
				<Task {task} {setEditTask} {update} />
			</div>
		{/each}
	{:else}
		<div class="w-full flex items-center justify-center text-secondary-content text-base">
			Nothing here ;-;
		</div>
	{/if}
</div>
