import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals }) => {
	const { isValid, model } = locals.pb.authStore;
	return {
		auth: {
			isValid,
			model: model?.$export()
		}
	};
}) satisfies LayoutServerLoad;
