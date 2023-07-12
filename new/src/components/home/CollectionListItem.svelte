<script lang="ts">
	import { theme } from '../../provider/themeProvider';
	import Task from '../taskList/Task.svelte';

	export let collection: { [key: string]: any } = {};
</script>

<div class="w-full rounded-2xl overflow-hidden mt-6">
	<div class="p-4 flex items-center gap-4 {$theme === 'light' ? 'bg-custom-50' : 'bg-base-200'}">
		<div class="p-2 bg-custom-500 inline-block rounded-lg">
			<!-- {React.createElement(
            icons[
              collection.icon.replace(/(?:-|^)([a-z0-9])/g, (g) =>
                (g[1] || g[0])?.toUpperCase(),
              )
            ],
            {
              className: 'w-4 h-4 text-custom-50 stroke-1',
            },
          )} -->
		</div>
		<p
			class={`${
				$theme === 'light' ? 'text-custom-500' : 'text-primary-content'
			} text-lg font-medium`}
		>
			{collection.name}
		</p>
	</div>
	<div class="w-full p-4 flex flex-col gap-5 bg-base-100">
		{#each collection.tasks.reverse() as task}
			<Task {task} setEditTask={null} />
		{/each}
	</div>
</div>
