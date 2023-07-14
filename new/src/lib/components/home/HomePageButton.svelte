<script>
	import { theme } from '$lib/provider/themeProvider';
</script>

<div class="flex mt-8 gap-4">
	<button
		type="button"
		class={`px-4 py-2 rounded-lg font-medium ${
			$theme === 'light' ? 'bg-custom-50 text-custom-500' : 'bg-custom-500 text-custom-50'
		}`}
	>
		Unfinished Tasks
	</button>
	<button
		type="button"
		class="px-4 py-2 rounded-lg border-[1.5px] border-base-200 text-secondary-content"
	>
		Projects Overview
	</button>
</div>
