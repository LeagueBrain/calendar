export function createEvents(input: any): any;
export function createEventSources(input: any): any;
export function createEventChunk(
	event: any,
	start: any,
	end: any
): {
	start: any;
	end: any;
	event: any;
};
export function sortEventChunks(chunks: any): void;
/**
 * Prepare event chunks for month view and all-day slot in week view
 */
export function prepareEventChunks(chunks: any, hiddenDays: any): {};
export function repositionEvent(chunk: any, longChunks: any, height: any): number;
export function createEventContent(
	chunk: any,
	displayEventEnd: any,
	eventContent: any,
	theme: any,
	_intlEventTime: any,
	_view: any
): any[];
export function toEventWithLocalDates(event: any): any;
export function cloneEvent(event: any): any;
/**
 * Check whether the event intersects with the given date range and resource
 * @param event
 * @param start
 * @param end
 * @param [resource]
 * @param [timeMode]  Zero-length events should be allowed (@see https://github.com/vkurko/calendar/issues/50), except in time mode
 * @return boolean
 */
export function eventIntersects(
	event: any,
	start: any,
	end: any,
	resource?: any,
	timeMode?: any
): any;
