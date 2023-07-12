<script>
	import '../assets/fonts/MingCute.css';
	import '../assets/styles/globals.scss';
	import '../assets/styles/themes.scss';

	import { theme, themeColor } from '../provider/themeProvider';
	import { onMount } from 'svelte';
	import Sidebar from '../components/utils/Sidebar.svelte';
	import Navbar from '../components/utils/Navbar.svelte';

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

		pathname = window.location.pathname;
	});

	$: {
		if ($theme === 'auto') {
			generatedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		} else {
			generatedTheme = $theme;
		}
	}
</script>

<main
	data-theme={generatedTheme}
	class="{$themeColor} w-full h-screen flex {pathname.split('/').pop() !== 'login' &&
		'p-4'} pb-0 text-sm text-custom-500-content min-w-0"
>
	{#if pathname.split('/').pop() !== 'login'}
		<Sidebar />
	{/if}
	<div class="pb-0 pt-2 px-6 pr-2 flex-1 flex flex-col min-w-0">
		{#if pathname.split('/').pop() !== 'login'}
			<Navbar /> <!--{isCreateModalOpen} {setIsCreateModalOpen} />-->
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
