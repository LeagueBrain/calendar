import { run_all } from 'svelte/internal';

/**
 *
 * @param {Function} fn
 * @param {{}} handle
 * @param {import("svelte/store").Writable<Map<any, Function>>} queueStore
 */
export function debounce(fn, handle, queueStore) {
	queueStore.update((queue) => queue.set(handle, fn));
}

/**
 *
 * @param {Map<any, Function>} queue
 */
export function flushDebounce(queue) {
	run_all(Object.values(queue));
	queue.clear();
}
