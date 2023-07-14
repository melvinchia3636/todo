<script lang="ts">
	import CollectionGridItem from './CollectionGridItem.svelte';

	export let collections: { [key: string]: any }[] = [];
</script>

<div class="grid gap-6 grid-cols-[repeat(auto-fill,minmax(200px,1fr))] mt-6">
	{#each collections as collection}
		<CollectionGridItem data={collection} />
	{/each}
	<div
		class="border-2 border-base-200 h-40 border-dashed flex items-center justify-center flex-col gap-2 rounded-xl p-5"
	>
		<span class="mgc_add_fill w-6 h-6 text-base-300" />
		<p class="text-base-300 font-medium text-base">Create</p>
	</div>
</div>
