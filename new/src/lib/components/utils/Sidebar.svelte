<script>
	import { onMount } from 'svelte';
	import { theme } from '$lib/provider/themeProvider';
	import { navigating, page } from '$app/stores';

	const ROUTES = [
		{ name: 'Home', icon: 'home_4_fill', path: '/' },
		{
			name: 'Collections',
			icon: 'list_check_2_fill',
			path: '/collections',
			hasCollapse: true
		},
		{
			name: 'Projects',
			icon: 'folder_fill',
			path: '/projects',
			hasCollapse: true
		},
		{ name: 'Calendar', icon: 'calendar_fill', path: '/calendar' }
	];
</script>

<aside
	class="h-[calc(100%-1rem)] flex-shrink-0 p-2 pr-4 w-[24%] border-r-[1.5px] border-base-100 flex flex-col"
>
	<h1 class="font-semibold text-2xl pl-4">
		.to
		<span class="text-custom-500">do</span>
	</h1>
	<ul class="mt-16 text-gray-400 flex flex-col flex-1 relative isolate">
		<div
			class="w-full h-[3.2rem] rounded-lg transition-all {ROUTES.some(
				(route) => $page.url.pathname.split('/')[1] === route.path.split('/')[1]
			)
				? $theme === 'light'
					? 'bg-custom-50'
					: 'bg-custom-500 opacity-10'
				: 'bg-transparent'} absolute left-0 -translate-y-[0.8rem] z-[-1]"
			style="top:{Math.max(
				0,
				ROUTES.findIndex((route) => $page.url.pathname.split('/')[1] === route.path.split('/')[1])
			) * 3.2}rem"
		/>
		{#each ROUTES as { name, icon, path, hasCollapse }}
			<a href={path}>
				<li
					class="h-[3.2rem] px-4 rounded-lg transition-all hover:text-custom-500 {$page.url.pathname.split(
						'/'
					)[1] === path.split('/')[1] && 'text-custom-500'}"
				>
					<span class="flex items-center justify-between gap-5">
						<div class="flex items-center gap-5 font-medium">
							<span class="text-xl -mt-[2px] mgc_{icon}" />
							{name}
						</div>
						{#if hasCollapse}
							<span class="text-base -mt-[2px] mgc_right_fill" />
						{/if}
					</span>
				</li>
			</a>
		{/each}
	</ul>
	<ul class="mt-16 text-gray-400 flex flex-col relative">
		<li
			class="py-4 px-4 relative rounded-lg transition-all overflow-hidden hover:text-custom-500 isolate"
			class:text-custom-500={$page.url.pathname === '/settings'}
		>
			<div
				class="absolute w-full h-full top-0 left-0 z-[-1] transition-all {$page.url.pathname ===
					'/settings' && ($theme === 'light' ? 'bg-custom-50' : 'bg-custom-500 opacity-10')}"
			/>
			<a href="/settings">
				<span class="flex items-center gap-5 font-medium">
					<span class="text-xl -mt-[2px] mgc_settings_1_fill" />
					Settings
				</span>
			</a>
		</li>
		<li class="py-3 px-4 rounded-lg">
			<a href="/logout">
				<span class="flex items-center gap-5 font-medium">
					<span class="text-xl -mt-[2px] mgc_exit_door_fill" />
					Log out
				</span>
			</a>
		</li>
	</ul>
</aside>
