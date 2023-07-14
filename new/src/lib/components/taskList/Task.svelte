<script lang="ts">
	import PocketBase from 'pocketbase';
	import moment from 'moment';

	export let update: () => void;

	async function updateIsDone() {
		const client = new PocketBase('http://127.0.0.1:8090');
		await client.collection('tasks').update(task.id, {
			is_done: !task.is_done
		});

		update();
	}

	export let task: { [key: string]: any } = {};
	export let setEditTask: ((task: { [key: string]: any }) => void) | null;
</script>

<div class="flex items-center gap-4">
	{#if setEditTask}
		<button
			on:click={() => {
				if (setEditTask) setEditTask(task);
			}}
			type="button"
			class="absolute top-0 right-0 w-full h-full z-[0]"
		/>
	{/if}
	<button
		type="button"
		on:click={updateIsDone}
		class="w-5 h-5 rounded-md border-2 border-custom-500 z-[1] {task.is_done && 'bg-custom-500'}"
	>
		{#if task.is_done}
			<span class="mgc_check_fill text-custom-50 text-xs block" />
		{/if}
	</button>
	<div class="relative w-full">
		<p class="text-base {task.is_done && 'line-through decoration-[1.5px]'}">
			{task.title}
		</p>
		<p class="text-custom-500 text-xs">
			{task.due_date && moment(task.due_date).fromNow()}
		</p>
	</div>
</div>
