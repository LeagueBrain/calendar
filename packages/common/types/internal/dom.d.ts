/**
 *
 * @param {string} tag
 * @param {string} className
 * @param {string} html
 * @param {string} text
 * @returns {HTMLElement}
 */
export function createElement(
	tag: string,
	className: string,
	html: string,
	text: string
): HTMLElement;
/**
 *
 * @param {HTMLElement} el
 * @returns {boolean}
 */
export function hasYScroll(el: HTMLElement): boolean;
/**
 *
 * @param {HTMLElement} el
 * @returns {DOMRect}
 */
export function rect(el: HTMLElement): DOMRect;
/**
 *
 * @param {HTMLElement} el
 * @param {number} up
 * @returns {HTMLElement | null}
 */
export function ancestor(el: HTMLElement, up: number): HTMLElement | null;
/**
 *
 * @param {HTMLElement} el
 * @returns {number}
 */
export function height(el: HTMLElement): number;
/**
 *
 * @param {HTMLElement} el
 * @param {Function} fn
 */
export function setFn(el: HTMLElement, fn: Function): void;
/**
 *
 * @param {HTMLElement} el
 * @returns {boolean}
 */
export function hasFn(el: HTMLElement): boolean;
/**
 *
 * @param {HTMLElement} el
 * @param {any} args
 * @returns {any}
 */
export function runFn(el: HTMLElement, ...args: any): any;
