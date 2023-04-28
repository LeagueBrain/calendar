/**
 * @param {any} test
 * @returns {boolean}
 */
export function isObject(test) {
	return typeof test === 'object' && test !== null;
}

/**
 * @returns {Symbol}
 */
export function symbol() {
	return Symbol('ec');
}
