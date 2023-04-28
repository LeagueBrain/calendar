/**
 *
 * @param {Date | string} [input]
 * @returns {Date}
 */
export function createDate(input?: string | Date | undefined): Date;
/**
 *
 * @param {import('types').DurationInput} input
 * @returns {import('types').Duration}
 */
export function createDuration(input: import('types').DurationInput): import('types').Duration;
/**
 *
 * @param {Date} date
 * @returns {Date}
 */
export function cloneDate(date: Date): Date;
/**
 *
 * @param {Date} date
 * @param {import('types').Duration} duration
 * @param {number} [x=1]
 * @returns {Date}
 */
export function addDuration(
	date: Date,
	duration: import('types').Duration,
	x?: number | undefined
): Date;
/**
 *
 * @param {Date} date
 * @param {import('types').Duration} duration
 * @param {number} [x=-1]
 * @returns {Date}
 */
export function subtractDuration(
	date: Date,
	duration: import('types').Duration,
	x?: number | undefined
): Date;
/**
 *
 * @param {Date} date
 * @param {number} [x=1]
 * @returns {Date}
 */
export function addDay(date: Date, x?: number | undefined): Date;
/**
 *
 * @param {Date} date
 * @param {number} [x=-1]
 * @returns {Date}
 */
export function subtractDay(date: Date, x?: number | undefined): Date;
/**
 *
 * @param {Date} date
 * @returns {Date}
 */
export function setMidnight(date: Date): Date;
/**
 *
 * @param {Date} date
 * @returns {Date}
 */
export function toLocalDate(date: Date): Date;
/**
 *
 * @param {Date} date
 * @returns {string}
 */
export function toISOString(date: Date): string;
/**
 *
 * @param {Date} start
 * @param {Date} end
 * @param {Intl.DateTimeFormat} intl
 * @returns {string}
 */
export function formatRange(start: Date, end: Date, intl: Intl.DateTimeFormat): string;
/**
 *
 * @param {Date} date1
 * @param {Date[]} dates2
 * @returns {boolean}
 */
export function datesEqual(date1: Date, ...dates2: Date[]): boolean;
/**
 *
 * @param {Date} date
 * @param {number} day
 * @returns {Date}
 */
export function nextClosestDay(date: Date, day: number): Date;
/**
 *
 * @param {Date} date
 * @param {number} day
 * @returns {Date}
 */
export function prevClosestDay(date: Date, day: number): Date;
/**
 * Check whether given date is string which contains no time part
 *
 * @param {string | Date} date
 * @returns {boolean}
 */
export function noTimePart(date: string | Date): boolean;
export const DAY_IN_SECONDS: 86400;
