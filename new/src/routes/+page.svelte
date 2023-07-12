<script lang="ts">
	import CollectionListItem from '../components/home/CollectionListItem.svelte';
	import HomePageButton from '../components/home/HomePageButton.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	$: collections = data.collections;
	console.log(data);
</script>

<section class="w-full px-16 py-8 overflow-scroll">
	<div class="w-full flex items-center justify-between mt-8 mb-4">
		<h1 class="text-lg font-medium text-custom-500">Dashboard</h1>
	</div>
	<p class="text-2xl block mt-6 leading-normal">
		Good Morning,
		<br />
		<span class="font-semibold text-3xl">John Davidson</span>
	</p>
	<HomePageButton />

	{#if collections.some((collection) => collection.tasks.length > 0)}
		{#each collections as collection}
			{#if collection.tasks.length > 0}
				<CollectionListItem {collection} />
			{/if}
		{/each}
	{:else}
		<div class="pt-12 w-full flex items-center justify-center text-secondary-content text-xl">
			No unfinished tasks. =)
		</div>
	{/if}
</section>
