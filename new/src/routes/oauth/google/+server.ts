/* eslint-disable @typescript-eslint/ban-ts-comment */
import { redirect } from '@sveltejs/kit';
//@ts-expect-error
import cookie from 'cookie-parse';
import type { RequestHandler } from '../$types';

export const GET = (async ({ locals, url, cookies }) => {
	if (locals.pb.authStore.isValid) {
		throw redirect(303, '/');
	}

	const redirectURL = `${url.origin}/oauth/google`;
	const expectedState = cookies.get('state');
	const expectedVerifier = cookies.get('verifier');

	const state = await url.searchParams.get('state');
	const code = await url.searchParams.get('code');

	const authProviders = (await locals.pb.collection('users').listAuthMethods()).authProviders;

	if (!authProviders) {
		throw redirect(303, '/signup');
	}

	const authProvider = authProviders.find((e) => e.name === 'google');

	if (!authProvider) {
		throw redirect(303, '/signup');
	}

	if (state !== expectedState) {
		throw redirect(303, '/signup');
	}

	try {
		await locals.pb
			.collection('users')
			.authWithOAuth2Code(authProvider.name, code, expectedVerifier, redirectURL);

		const authCookies = cookie.parse(locals.pb.authStore.exportToCookie()) as unknown as {
			[key: string]: string;
		};
		cookies.set('pb_auth', authCookies.pb_auth, {
			path: '/',
			sameSite: 'lax'
		});
	} catch (err) {
		console.log(err);
	}

	throw redirect(302, '/');
}) satisfies RequestHandler;
