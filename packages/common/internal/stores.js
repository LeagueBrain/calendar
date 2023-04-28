import { derived, writable, get } from 'svelte/store';
import { is_function } from 'svelte/internal';
import { toLocalDate, formatRange } from './date';
/**
 *
 * @param {any} value
 * @param {((value: any) => any) | undefined} parser
 * @param {any} start
 * @returns {import('svelte/store').Writable<any> & { parse: ((value: any) => any) | undefined}}
 */
export function writable2(value, parser, start) {
	return {
		...writable(parser ? parser(value) : value, start),
		parse: parser
	};
}

/**
 *
 * @param {*} stores
 * @param {(arg0: any, value: any) => any | undefined} fn
 * @param {*} initValue
 * @returns {import('svelte/store').Readable<any> & { get: () => any}}
 */
export function derived2(stores, fn, initValue) {
	let storeValue = initValue;
	let hasSubscribers = false;
	let auto = fn.length < 2;
	let fn2 = (/** @type {any} */ _, /** @type {(arg0: any) => void} */ set) => {
		hasSubscribers = true;
		if (auto) {
			storeValue = fn(_, set);
			set(storeValue);
		} else {
			fn(_, (/** @type {any} */ value) => {
				storeValue = value;
				set(value);
			});
		}
		return () => {
			hasSubscribers = false;
		};
	};
	let store = derived(stores, fn2, storeValue);
	return {
		...store,
		get: () => (hasSubscribers ? storeValue : get(store))
	};
}

/**
 * @param {import('svelte/store').Readable<any>} locale
 * @param {import('svelte/store').Readable<any>} format
 */
export function intl(locale, format) {
	return derived([locale, format], ([$locale, $format]) => {
		let intl = is_function($format)
			? { format: $format }
			: new Intl.DateTimeFormat($locale, $format);
		return {
			format: (/** @type {Date} */ date) => intl.format(toLocalDate(date))
		};
	});
}

/**
 *
 * @param {import('svelte/store').Readable<string>} locale
 * @param {import('svelte/store').Readable<Intl.DateTimeFormatOptions>} format
 * @returns {import('svelte/store').Readable<{format: {(start: Date, end: Date): string}}>}
 */

export function intlRange(locale, format) {
	return derived([locale, format], ([$locale, $format]) => {
		if (is_function($format)) {
			return {
				format: (/** @type {Date} */ start, /** @type {Date} */ end) =>
					$format(toLocalDate(start), toLocalDate(end))
			};
		}
		let intl = new Intl.DateTimeFormat($locale, $format);
		return {
			format: (/** @type {Date} */ start, /** @type {Date} */ end) =>
				formatRange(toLocalDate(start), toLocalDate(end), intl)
		};
	});
}
