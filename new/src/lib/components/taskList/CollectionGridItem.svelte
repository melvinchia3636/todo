<script lang="ts">
	import { theme } from '$lib/provider/themeProvider';

	export let data: { [key: string]: any } = {};
</script>

<a href={`/collections/${data.id}`}>
	<div class="bg-base-100 rounded-xl p-5 h-40">
		<div class="inline-block p-3 rounded-xl mb-6 relative isolate overflow-hidden">
			<div
				class={`absolute top-0 left-0 w-full h-full z-[-1] ${
					$theme === 'light' ? 'bg-custom-100' : 'bg-custom-500'
				}`}
			/>
			<!-- {React.createElement(
            icons[
              data.icon.replace(/(?:-|^)([a-z0-9])/g, (g) =>
                (g[1] || g[0])?.toUpperCase(),
              )
            ],
            {
              class: `w-5 h-5 ${
                theme === 'light' ? 'text-custom-500' : 'text-custom-50'
              }`,
            },
          )} -->
		</div>

		<div class="items-end justify-between flex">
			<div>
				<p class="font-medium text-lg">{data.name}</p>
				<p class="text-gray-400">
					{data.finishedTask}/{data.totalTask} done
				</p>
			</div>
			<div class="relative w-6 h-6">
				<div
					class={`radial-progress absolute top-0 left-0 ${
						$theme === 'light' ? 'text-custom-100' : 'text-base-200'
					}`}
					style="--value: 100; --size: 1.5rem; --thickness: 4px;"
				/>
				{#if data.finishedTask > 0}
					<div
						class="radial-progress absolute top-0 left-0 text-custom-500"
						style="--value: {(data.finishedTask / data.totalTask) *
							100}; --size: 1.5rem; --thickness: 4px;"
					/>
				{/if}
			</div>
		</div>
	</div>
</a>
