// @ts-check

import {
	createDate,
	createDuration,
	setMidnight,
	createEvents,
	createEventSources
} from '@event-calendar/common/internal';
import { is_function } from 'svelte/internal';

/**
 * @param {import("@event-calendar/common").Plugin[]} plugins
 */
export function createOptions(plugins) {
	/** @type {Partial<import('@event-calendar/common').Options>} */
	let options = {
		allDayContent: undefined,
		allDaySlot: true,
		buttonText: {
			today: 'today'
		},
		date: new Date(),
		dateClick: undefined,
		datesSet: undefined,
		dayHeaderFormat: {
			weekday: 'short',
			month: 'numeric',
			day: 'numeric'
		},
		displayEventEnd: true,
		duration: { weeks: 1 },
		events: [],
		eventBackgroundColor: undefined,
		eventClick: undefined,
		eventColor: undefined,
		eventContent: undefined,
		eventDidMount: undefined,
		eventMouseEnter: undefined,
		eventMouseLeave: undefined,
		eventSources: [],
		eventTimeFormat: {
			hour: 'numeric',
			minute: '2-digit'
		},
		firstDay: 0,
		flexibleSlotTimeLimits: false, // ec option
		headerToolbar: {
			start: 'title',
			center: '',
			end: 'today prev,next'
		},
		height: 'auto',
		hiddenDays: [],
		highlightedDates: [], // ec option
		lazyFetching: true,
		loading: undefined,
		locale: undefined,
		monthMode: false,
		nowIndicator: false,
		selectable: false,
		scrollTime: '06:00:00',
		slotDuration: '00:30:00',
		slotEventOverlap: true,
		slotHeight: 24, // ec option
		slotLabelFormat: {
			hour: 'numeric',
			minute: '2-digit'
		},
		slotMaxTime: '24:00:00',
		slotMinTime: '00:00:00',
		theme: {
			allDay: 'ec-all-day',
			active: 'ec-active',
			bgEvent: 'ec-bg-event',
			bgEvents: 'ec-bg-events',
			body: 'ec-body',
			button: 'ec-button',
			buttonGroup: 'ec-button-group',
			calendar: 'ec',
			compact: 'ec-compact',
			content: 'ec-content',
			day: 'ec-day',
			dayHead: 'ec-day-head',
			days: 'ec-days',
			event: 'ec-event',
			eventBody: 'ec-event-body',
			eventTime: 'ec-event-time',
			eventTitle: 'ec-event-title',
			events: 'ec-events',
			extra: 'ec-extra',
			handle: 'ec-handle',
			header: 'ec-header',
			hiddenScroll: 'ec-hidden-scroll',
			hiddenTimes: 'ec-hidden-times',
			highlight: 'ec-highlight',
			icon: 'ec-icon',
			line: 'ec-line',
			lines: 'ec-lines',
			nowIndicator: 'ec-now-indicator',
			otherMonth: 'ec-other-month',
			sidebar: 'ec-sidebar',
			sidebarTitle: 'ec-sidebar-title',
			today: 'ec-today',
			time: 'ec-time',
			title: 'ec-title',
			toolbar: 'ec-toolbar',
			week: 'ec-week',
			withScroll: 'ec-with-scroll'
		},
		titleFormat: {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		},
		view: undefined,
		viewDidMount: undefined,
		views: {}
	};

	for (let plugin of plugins) {
		if (plugin.createOptions) {
			plugin.createOptions(options);
		}
	}

	return options;
}

/**
 * @param {Partial<import("@event-calendar/common").Options>} options
 * @param {import("@event-calendar/common").Plugin[]} plugins
 */
export function createParsers(options, plugins) {
	/** @type {import('@event-calendar/common').Parsers} */
	let parsers = {
		buttonText: (input) => (is_function(input) ? input(options.buttonText) : input),
		date: (date) => setMidnight(createDate(date)),
		duration: createDuration,
		events: createEvents,
		eventSources: createEventSources,
		hiddenDays: (days) => [...new Set(days)],
		highlightedDates: (dates) => dates.map(createDate),
		scrollTime: createDuration,
		slotDuration: createDuration,
		slotMaxTime: createDuration,
		slotMinTime: createDuration,
		theme: (input) => (is_function(input) ? input(options.theme) : input)
	};

	for (let plugin of plugins) {
		if (plugin.createParsers) {
			plugin.createParsers(parsers, options);
		}
	}

	return parsers;
}

/** @type {import('@event-calendar/common').Options} */
let prev;
/**
 * @param {import('@event-calendar/common').Options} options
 */
export function diff(options) {
	let diff = [];
	if (prev) {
		for (let name of Object.keys(options)) {
			// @ts-ignore
			if (options[name] !== prev[name]) {
				// @ts-ignore
				diff.push([name, options[name]]);
			}
		}
	}
	prev = Object.assign({}, options);

	return diff;
}
