import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals }) => {
	const authStore = locals.pb.authStore;
	return {
		isLoggedIn: authStore.isValid,
		userData: authStore.model?.$export()
	};
}) satisfies LayoutServerLoad;
