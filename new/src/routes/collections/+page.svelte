<script lang="ts">
	import CollectionGrid from '../../components/taskList/CollectionGrid.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="w-full px-16 py-8 overflow-scroll">
	<div class="w-full flex items-center justify-between mt-8 mb-4">
		<h1 class="text-lg font-medium text-custom-500">Collections</h1>
	</div>
	<p class="text-2xl block mt-6 leading-normal font-semibold">All Collections</p>
	<CollectionGrid collections={data.collections} />
</section>
