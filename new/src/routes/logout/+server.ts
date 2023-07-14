import { redirect, type RequestHandler } from '@sveltejs/kit';

export const POST = (async ({ locals }) => {
	locals.pb.authStore.clear();
	throw redirect(303, '/login');
}) satisfies RequestHandler;
