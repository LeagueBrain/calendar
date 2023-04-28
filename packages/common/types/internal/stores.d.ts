/**
 *
 * @param {any} value
 * @param {((value: any) => any) | undefined} parser
 * @param {any} start
 * @returns {import('svelte/store').Writable<any> & { parse: ((value: any) => any) | undefined}}
 */
export function writable2(
	value: any,
	parser: ((value: any) => any) | undefined,
	start: any
): import('svelte/store').Writable<any> & {
	parse: ((value: any) => any) | undefined;
};
/**
 *
 * @param {*} stores
 * @param {(arg0: any, value: any) => any | undefined} fn
 * @param {*} initValue
 * @returns {import('svelte/store').Readable<any> & { get: () => any}}
 */
export function derived2(
	stores: any,
	fn: (arg0: any, value: any) => any | undefined,
	initValue: any
): import('svelte/store').Readable<any> & {
	get: () => any;
};
/**
 * @param {import('svelte/store').Readable<any>} locale
 * @param {import('svelte/store').Readable<any>} format
 */
export function intl(
	locale: import('svelte/store').Readable<any>,
	format: import('svelte/store').Readable<any>
): import('svelte/store').Readable<{
	format: (date: Date) => any;
}>;
/**
 *
 * @param {import('svelte/store').Readable<string>} locale
 * @param {import('svelte/store').Readable<Intl.DateTimeFormatOptions>} format
 * @returns {import('svelte/store').Readable<{format: {(start: Date, end: Date): string}}>}
 */
export function intlRange(
	locale: import('svelte/store').Readable<string>,
	format: import('svelte/store').Readable<Intl.DateTimeFormatOptions>
): import('svelte/store').Readable<{
	format: (start: Date, end: Date) => string;
}>;
import { get } from 'svelte/store';
