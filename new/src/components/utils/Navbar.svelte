<nav class="w-full flex items-center justify-between border-b-[1.5px] border-base-100 pb-6">
	<div class="flex items-center gap-2 w-96 py-3 px-4 bg-base-100 rounded-full">
		<span class="text-xl -mt-[2px] mgc_search_line text-secondary-content" />
		<input
			type="text"
			placeholder="Search anything..."
			class="bg-transparent placeholder-secondary-content"
		/>
	</div>
	<div class="flex items-center gap-3">
		<div class="flex items-center gap-4 mr-4">
			<div class="dropdown dropdown-end">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label
					tabIndex={0}
					class="btn border-none normal-case pr-4 px-3 cursor-pointer hover:bg-custom-600 transition-all active:animate-ping text-custom-50 font-semibold gap-1 h-10 min-h-[2.5rem] bg-custom-500 flex items-center justify-center rounded-lg"
				>
					<span class="w-4 h-4 mr-1 stroke-3 mgc_add_fill" />
					Add
				</label>
				<ul tabIndex={0} class="dropdown-content menu p-2 shadow-lg bg-base-100 rounded-box w-52">
					{#each [{ name: 'Task', icon: 'coupon_fill', callback: () => {} /*setIsCreateModalOpen(true)*/ }, { name: 'Collection', icon: 'list_check_2_fill', callback: () => {} }, { name: 'Project', icon: 'folder_fill', callback: () => {} }] as { name, icon, callback }}
						<li>
							<button
								type="button"
								on:click={() => {
									callback();
									// document.activeElement?.blur();
								}}
								class="flex items-center gap-2 relative isolate group overflow-hidden hover:text-custom-500 transition-all"
							>
								<div
									class="absolute w-full h-full top-0 left-0 group-hover:bg-custom-500 opacity-10 transition-colors z-[-1]"
								/>
								<span class={`text-xl -mt-[2px] mgc_${icon}`} />
								{name}
							</button>
						</li>
					{/each}
				</ul>
			</div>
		</div>
		<div class="rounded-full overflow-hidden w-9 h-9">
			<img src="https://i.pravatar.cc/300" alt="avatar" />
		</div>
		<div>
			<div class="font-medium text-base">John Davidson</div>
			<div class="text-gray-400 text-xs">johndavidson@gmail.com</div>
		</div>
		<span class="text-xl -mt-[2px] mgc_more_2_fill" />
	</div>
</nav>
