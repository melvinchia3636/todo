<script lang="ts">
	import Header from './Header.svelte';
	import TaskItemList from './TaskItemList.svelte';

	export let update: () => void;

	export let collection: { [key: string]: any } = {};
	export let tasks: { [key: string]: any }[] = [];

	let editTask = null;
	const setEditTask = (task: { [key: string]: any }) => {
		editTask = task;
	};
</script>

<section class="w-full flex overflow-hidden">
	<section class="overflow-scroll flex-1 px-16 py-8">
		<Header {collection} />
		<div class="flex flex-col w-full gap-4 mt-10">
			<!-- <AddTaskButton collectionId={collection.id} /> -->
			<header class="flex items-center justify-between w-full text-secondary-content">
				<h3 class="font-medium">
					Pending Tasks - {tasks?.filter((task) => !task.is_done).length}
				</h3>
				<button type="button" class="px-4 py-2 rounded-lg font-medium gap-2 flex items-center">
					<icons.Sort class="w-4 h-4" />
					Sort
				</button>
			</header>
			<TaskItemList tasks={tasks.filter((task) => !task.is_done)} {setEditTask} {update} />
			<header class="flex items-center justify-between w-full text-secondary-content">
				<h3 class="font-medium">
					Completed Tasks - {tasks?.filter((task) => task.is_done).length}
				</h3>
				<button type="button" class="px-4 py-2 rounded-lg font-medium gap-2 flex items-center">
					<icons.Sort class="w-4 h-4" />
					Sort
				</button>
			</header>
			<TaskItemList tasks={tasks.filter((task) => task.is_done)} {setEditTask} {update} />
		</div>
	</section>
	<!-- <TaskEdit task={editTask} {setEditTask} {collection} /> -->
</section>
