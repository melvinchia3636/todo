<script>
  import Auto from "$lib/assets/images/theme/auto.svg";
  import Light from "$lib/assets/images/theme/light.svg";
  import Dark from "$lib/assets/images/theme/dark.svg";
  import Black from "$lib/assets/images/theme/black.svg";
  import { theme, themeColor } from "$lib/provider/themeProvider";

  import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
    Transition
  } from "@rgossiaux/svelte-headlessui";

  const COLORS = [
    'red',
    'pink',
    'purple',
    'deep-purple',
    'indigo',
    'blue',
    'light-blue',
    'cyan',
    'teal',
    'green',
    'light-green',
    'lime',
    'yellow',
    'amber',
    'orange',
    'deep-orange',
    'brown',
    'grey',
  ];

  let selectedThemeColor = $themeColor

  $: themeColor.set(selectedThemeColor)
</script>

<section class="w-full px-16 py-8 overflow-scroll flex-1">
  <p class="text-2xl block mt-6 leading-normal font-semibold">
    Settings
  </p>
  <div class="mt-4 w-full">
    <h3 class="text-xl block mt-6 leading-normal font-medium">Theme</h3>
    <p class="text-gray-400">Select or customize your UI theme.</p>
    <div class="w-full flex gap-4 mt-6">
      {#each [
        { name: 'Auto', Image: Auto },
        { name: 'Light', Image: Light },
        { name: 'Dark', Image: Dark },
        { name: 'Black', Image: Black },
      ] as { name, Image }}
        <button
          type="button"
          on:click={() => theme.set(name.toLowerCase())}
          class="flex-1"
        >
          <div
            class="{
              $theme === name.toLowerCase()
                ? 'border-2 border-custom-500'
                : 'border-[1.5px] border-base-100'
            } rounded-2xl overflow-hidden relative"
          >
            {#if $theme === name.toLowerCase()}
              <span class="mgc_check_circle_fill text-custom-500 text-xl block absolute bottom-2 right-2.5" />
            {/if}
            <img src={Image} alt={name} class="w-full" />
          </div>
          <p
            class="mt-2 {
              $theme === name.toLowerCase() && 'text-custom-500 font-medium'
            }"
          >
            {name}
          </p>
        </button>
    {/each}
    </div>
  </div>
  <div class="w-full border-b-[1.5px] border-base-100 my-6" />
  <div class="mt-4 mb-12 w-full flex items-center justify-between">
    <div>
      <h3 class="text-xl block leading-normal font-medium">
        Accent color
      </h3>
      <p class="text-gray-400">
        Select or customize your UI accent color.
      </p>
    </div>
    <Listbox bind:value={selectedThemeColor}>
      <div class="relative mt-1 w-48">
        <ListboxButton class="relative w-full rounded-lg bg-background py-4 pl-4 pr-10 text-left border-[1.5px] border-base-100 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-custom-300 sm:text-sm flex items-center gap-2">
          <span class="bg-custom-500 w-4 h-4 rounded-full inline-block" />
          <span class="block truncate -mt-[1px]">
            {$themeColor.split('-').slice(1).join(' ')}
          </span>
          <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <i
              class="h-5 w-5 text-gray-400 mgc_down_fill"
              aria-hidden="true"
            />
          </span>
        </ListboxButton>
        <Transition
          enter="transition ease-in duration-100"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ListboxOptions class="absolute mt-1 max-h-32 w-full overflow-auto rounded-md bg-base-100 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {#each COLORS as color}
              <ListboxOption
                class={({ active }) =>
                  `relative cursor-pointer select-none group hover:bg-custom-50 rounded-md transition-all py-3 px-4 flex items-center justify-between ${
                    active ? 'bg-custom-50' : '!bg-transparent'
                  }`
                }
                value={`theme-${color}`}
                let:selected
              >
                <div>
                  <span class="flex items-center gap-2">
                    <span
                      class="theme-{color} bg-custom-500 w-4 h-4 rounded-full inline-block"
                    />
                    {color.split('-').join(' ')}
                  </span>
                </div>
                {#if selected}
                  <span class="mgc_check_fill text-lg text-gray-400 block group-hover:text-custom-200" />
                {/if}
              </ListboxOption>
            {/each}
          </ListboxOptions>
        </Transition>
      </div>
    </Listbox>
  </div>
</section>
