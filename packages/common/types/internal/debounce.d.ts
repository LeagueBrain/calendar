/**
 *
 * @param {Function} fn
 * @param {{}} handle
 * @param {import("svelte/store").Writable<Map<any, Function>>} queueStore
 */
export function debounce(
	fn: Function,
	handle: {},
	queueStore: import('svelte/store').Writable<Map<any, Function>>
): void;
/**
 *
 * @param {Map<any, Function>} queue
 */
export function flushDebounce(queue: Map<any, Function>): void;
