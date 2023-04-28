import { toLocalDate } from './date';

/**
 * @param {any} view
 * @param {string} _viewTitle
 * @param {import('types').Range} _currentRange
 * @param {import('types').Range} _activeRange
 * @returns {import('types').View & { type: import('types').View, calendar: undefined}}
 */
export function createView(view, _viewTitle, _currentRange, _activeRange) {
	return {
		type: view,
		title: _viewTitle,
		currentStart: _currentRange.start,
		currentEnd: _currentRange.end,
		activeStart: _activeRange.start,
		activeEnd: _activeRange.end,
		calendar: undefined
	};
}

/**
 * @param {import('types').View} view
 */
export function toViewWithLocalDates(view) {
	view = Object.assign({}, view);
	view.currentStart = toLocalDate(view.currentStart);
	view.currentEnd = toLocalDate(view.currentEnd);
	view.activeStart = toLocalDate(view.activeStart);
	view.activeEnd = toLocalDate(view.activeEnd);

	return view;
}
