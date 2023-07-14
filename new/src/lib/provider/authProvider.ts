/* eslint-disable @typescript-eslint/no-explicit-any */
import { writable } from 'svelte/store';

export const auth = writable<{ [key: string]: any }>({});
