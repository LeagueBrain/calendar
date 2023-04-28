/**
 * @param {any} view
 * @param {string} _viewTitle
 * @param {import('types').Range} _currentRange
 * @param {import('types').Range} _activeRange
 * @returns {import('types').View & { type: import('types').View, calendar: undefined}}
 */
export function createView(
	view: any,
	_viewTitle: string,
	_currentRange: import('types').Range,
	_activeRange: import('types').Range
): import('types').View & {
	type: import('types').View;
	calendar: undefined;
};
/**
 * @param {import('types').View} view
 */
export function toViewWithLocalDates(view: import('types').View): import('types').View;
