import { NextResponse } from 'next/server';

/* eslint-disable import/prefer-default-export */
export async function GET({ url, cookies }) {
  return NextResponse.json({ response: 'hello world' });
}
