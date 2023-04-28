import { symbol } from './utils';

/**
 *
 * @param {string} tag
 * @param {string} className
 * @param {string} html
 * @param {string} text
 * @returns {HTMLElement}
 */
export function createElement(tag, className, html, text) {
	let el = document.createElement(tag);
	el.className = className;
	if (html) {
		el.innerHTML = html;
	} else if (text) {
		el.innerText = text;
	}
	return el;
}

/**
 *
 * @param {HTMLElement} el
 * @returns {boolean}
 */
export function hasYScroll(el) {
	return el.scrollHeight > el.clientHeight;
}

/**
 *
 * @param {HTMLElement} el
 * @returns {DOMRect}
 */
export function rect(el) {
	return el.getBoundingClientRect();
}

/**
 *
 * @param {HTMLElement} el
 * @param {number} up
 * @returns {HTMLElement | null}
 */
export function ancestor(el, up) {
	while (up--) {
		if (el.parentElement == null) {
			return null;
		} else {
			el = el.parentElement;
		}
	}
	return el;
}

/**
 *
 * @param {HTMLElement} el
 * @returns {number}
 */
export function height(el) {
	return rect(el).height;
}

const fnProp = symbol();

/**
 *
 * @param {HTMLElement} el
 * @param {Function} fn
 */
export function setFn(el, fn) {
	// @ts-ignore
	el[fnProp] = fn;
}

/**
 *
 * @param {HTMLElement} el
 * @returns {boolean}
 */
export function hasFn(el) {
	// @ts-ignore
	return !!el[fnProp];
}

/**
 *
 * @param {HTMLElement} el
 * @param {any} args
 * @returns {any}
 */
export function runFn(el, ...args) {
	// @ts-ignore
	return el[fnProp](...args);
}
