<script lang="ts">
	import type { LayoutData } from './$types';

	import '$lib/assets/fonts/MingCute.css';
	import '$lib/assets/styles/globals.scss';
	import '$lib/assets/styles/themes.scss';

	import { theme, themeColor } from '$lib/provider/themeProvider';
	import { onMount } from 'svelte';
	import Sidebar from '$lib/components/utils/Sidebar.svelte';
	import Navbar from '$lib/components/utils/Navbar.svelte';
	import { page } from '$app/stores';

	let generatedTheme = 'light';
	let pathname = '';

	onMount(() => {
		const storedColour = localStorage.getItem('themeColor');
		themeColor.set(storedColour || 'theme-red');

		const storedTheme = localStorage.getItem('theme');
		theme.set(storedTheme || 'auto');

		theme.subscribe((value) => {
			localStorage.setItem('theme', value);
		});

		themeColor.subscribe((value) => {
			localStorage.setItem('themeColor', value);
		});
	});

	$: {
		if ($theme === 'auto') {
			generatedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		} else {
			generatedTheme = $theme;
		}
	}

	export let data: LayoutData;

	let userData: {[key: string]: any} = {};

	$: {
		if (data?.auth && data.auth.isValid) {
			userData = data.auth.model || {};
		}
	}
</script>

<main
	data-theme={generatedTheme}
	class="{$themeColor} w-full h-screen flex {$page.url.pathname.split('/').pop() !== 'login' &&
		'p-4'} pb-0 text-sm text-custom-500-content min-w-0"
>
	{#if $page.url.pathname.split('/').pop() !== 'login'}
		<Sidebar {userData} />
	{/if}
	<div class="pb-0 pt-2 px-6 pr-2 flex-1 flex flex-col min-w-0">
		{#if $page.url.pathname.split('/').pop() !== 'login'}
			<Navbar {userData} /> <!--{isCreateModalOpen} {setIsCreateModalOpen} />-->
		{/if}
		<slot />
	</div>
	<!-- <CreateTask
		isOpen={isCreateModalOpen}
		setIsOpen={setIsCreateModalOpen}
		success={successAddTask}
	/>
	<ToastContainer /> -->
</main>
