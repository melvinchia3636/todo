<script lang="ts">
	import { theme } from '../../provider/themeProvider';

	export let collection: { [key: string]: any } = {};
</script>

<div class="w-full flex items-center gap-2 mt-8 mb-4">
	<a href="/collections">
		<span class="text-secondary-content font-medium -mt-[2px] block"> Collections </span>
	</a>
	<span class="w-4 h-4 text-secondary-content stroke-2 mgc_right_fill" />
	<h1 class="text-lg font-medium text-custom-500">
		{collection.name}
	</h1>
</div>
<div class="flex items-center gap-4 my-6">
	<div class="inline-block p-3 rounded-xl relative isolate overflow-hidden">
		<div
			class={`absolute top-0 left-0 w-full h-full z-[-1] ${
				$theme === 'light' ? 'bg-custom-100' : 'bg-custom-500'
			}`}
		/>
		<!-- {React.createElement(
			icons[
				collection.icon
					.replace(/(?:-|^)([a-z0-9])/g, (g) => (g[1] || g[0])?.toUpperCase())
					.replace(/ /g, '')
			],
			{
				class: 'w-5 h-5 text-custom-50'
			}
		)} -->
	</div>
	<p class="text-2xl block leading-normal font-semibold">
		{collection.name}
	</p>
</div>
