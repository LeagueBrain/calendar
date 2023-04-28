export const DAY_IN_SECONDS = 86400;

/**
 *
 * @param {Date | string} [input]
 * @returns {Date}
 */
export function createDate(input) {
	if (input !== undefined) {
		return input instanceof Date ? _fromLocalDate(input) : _fromISOString(input);
	}

	return _fromLocalDate(new Date());
}

/**
 *
 * @param {import('types').DurationInput} input
 * @returns {import('types').Duration}
 */
export function createDuration(input) {
	let years = 0;
	let months = 0;
	let days = 0;
	let seconds = 0;
	let inWeeks = !!0;

	if (typeof input === 'number') {
		seconds = input;
	} else if (typeof input === 'string') {
		// Expected format hh[:mm[:ss]]
		let exp = 2;
		for (let part of input.split(':', 3)) {
			seconds += parseInt(part, 10) * Math.pow(60, exp--);
		}
	} else {
		let hours = 0;
		let minutes = 0;

		if (input instanceof Date) {
			hours = input.getUTCHours();
			minutes = input.getUTCMinutes();
			seconds = input.getUTCSeconds();
		} else {
			years = input.years || input.year || 0;
			months = input.months || input.month || 0;

			const weeks = input.weeks || input.week || 0;
			inWeeks = !!weeks;

			days = weeks * 7 + (input.days || input.day || 0);

			hours = input.hours || input.hour || 0;
			minutes = input.minutes || input.minute || 0;
			seconds = input.seconds || input.second || 0;
		}

		seconds = hours * 60 * 60 + minutes * 60 + seconds;
	}

	return {
		years,
		months,
		days,
		seconds,
		inWeeks
	};
}

/**
 *
 * @param {Date} date
 * @returns {Date}
 */
export function cloneDate(date) {
	return new Date(date.getTime());
}

/**
 *
 * @param {Date} date
 * @param {import('types').Duration} duration
 * @param {number} [x=1]
 * @returns {Date}
 */
export function addDuration(date, duration, x) {
	if (x === undefined) {
		x = 1;
	}
	date.setUTCFullYear(date.getUTCFullYear() + x * duration.years);
	let month = date.getUTCMonth() + x * duration.months;
	date.setUTCMonth(month);
	month %= 12;
	if (month < 0) {
		month += 12;
	}
	while (date.getUTCMonth() !== month) {
		subtractDay(date);
	}
	date.setUTCDate(date.getUTCDate() + x * duration.days);
	date.setUTCSeconds(date.getUTCSeconds() + x * duration.seconds);

	return date;
}

/**
 *
 * @param {Date} date
 * @param {import('types').Duration} duration
 * @param {number} [x=-1]
 * @returns {Date}
 */
export function subtractDuration(date, duration, x) {
	return addDuration(date, duration, x === undefined ? -1 : -x);
}

/**
 *
 * @param {Date} date
 * @param {number} [x=1]
 * @returns {Date}
 */
export function addDay(date, x) {
	date.setUTCDate(date.getUTCDate() + (x === undefined ? 1 : x));

	return date;
}

/**
 *
 * @param {Date} date
 * @param {number} [x=-1]
 * @returns {Date}
 */
export function subtractDay(date, x) {
	return addDay(date, x === undefined ? -1 : -x);
}

/**
 *
 * @param {Date} date
 * @returns {Date}
 */
export function setMidnight(date) {
	date.setUTCHours(0, 0, 0, 0);

	return date;
}

/**
 *
 * @param {Date} date
 * @returns {Date}
 */
export function toLocalDate(date) {
	return new Date(
		date.getUTCFullYear(),
		date.getUTCMonth(),
		date.getUTCDate(),
		date.getUTCHours(),
		date.getUTCMinutes(),
		date.getUTCSeconds()
	);
}

/**
 *
 * @param {Date} date
 * @returns {string}
 */
export function toISOString(date) {
	return date.toISOString().substring(0, 19);
}

/**
 *
 * @param {Date} start
 * @param {Date} end
 * @param {Intl.DateTimeFormat} intl
 * @returns {string}
 */
export function formatRange(start, end, intl) {
	if (start.getFullYear() !== end.getFullYear()) {
		return intl.format(start) + ' - ' + intl.format(end);
	}

	let opts1 = intl.resolvedOptions();
	/** @type {Intl.DateTimeFormatOptions} */
	let opts2 = {};

	const monthDiff = start.getMonth() !== end.getMonth();
	const dayDiff = start.getDate() !== end.getDate();

	if (!dayDiff && !monthDiff) {
		return intl.format(start);
	} else {
		if (monthDiff) {
			/** @type {any} */
			const month = opts1.month;
			opts2.month = month;
		}
		if (dayDiff) {
			/** @type {any} */
			const day = opts1.day;
			opts2.day = day;
		}
	}

	let intl2 = new Intl.DateTimeFormat(opts1.locale, opts2);

	let full1 = intl.format(start);
	let full2 = intl.format(end);
	let part1 = intl2.format(start);
	let part2 = intl2.format(end);

	let common = _commonChunks(full1, part1, full2, part2);
	if (common) {
		return common.head + part1 + ' - ' + part2 + common.tail;
	}

	return full1 + ' - ' + full2;
}

/**
 *
 * @param {Date} date1
 * @param {Date[]} dates2
 * @returns {boolean}
 */
export function datesEqual(date1, ...dates2) {
	return dates2.every((date2) => date1.getTime() === date2.getTime());
}

/**
 *
 * @param {Date} date
 * @param {number} day
 * @returns {Date}
 */
export function nextClosestDay(date, day) {
	let diff = day - date.getUTCDay();
	date.setUTCDate(date.getUTCDate() + (diff >= 0 ? diff : diff + 7));
	return date;
}

/**
 *
 * @param {Date} date
 * @param {number} day
 * @returns {Date}
 */
export function prevClosestDay(date, day) {
	let diff = day - date.getUTCDay();
	date.setUTCDate(date.getUTCDate() + (diff <= 0 ? diff : diff - 7));
	return date;
}

/**
 * Check whether given date is string which contains no time part
 *
 * @param {string | Date} date
 * @returns {boolean}
 */
export function noTimePart(date) {
	return typeof date === 'string' && date.length <= 10;
}

/**
 * Private functions
 */

/**
 * @param {Date} date
 * @returns {Date}
 */
function _fromLocalDate(date) {
	return new Date(
		Date.UTC(
			date.getFullYear(),
			date.getMonth(),
			date.getDate(),
			date.getHours(),
			date.getMinutes(),
			date.getSeconds()
		)
	);
}

/**
 * @param {string} str
 * @returns {Date}
 */
function _fromISOString(str) {
	const parts = str.match(/\d+/g);

	if (parts !== null) {
		return new Date(
			Date.UTC(
				Number(parts[0]),
				Number(parts[1]) - 1,
				Number(parts[2]),
				Number(parts[3] || 0),
				Number(parts[4] || 0),
				Number(parts[5] || 0)
			)
		);
	} else {
		throw "string didn't match pattern";
	}
}

/**
 * @param {string} str1
 * @param {string} substr1
 * @param {string} str2
 * @param {string} substr2
 * @returns {*}
 */
function _commonChunks(str1, substr1, str2, substr2) {
	let i = 0;
	while (i < str1.length) {
		let res1;
		[i, res1] = _cut(str1, substr1, i);
		if (!res1) {
			break;
		}

		let j = 0;
		while (j < str2.length) {
			let res2;
			[j, res2] = _cut(str2, substr2, j);
			if (!res2) {
				break;
			}

			if (res1.head === res2.head && res1.tail === res2.tail) {
				return res1;
			}
		}
	}

	return null;
}

/**
 * @param {string} str
 * @param {string} substr
 * @param {number} from
 * @returns {[number, {head: string, tail: string} | null]}
 */
function _cut(str, substr, from) {
	let start = str.indexOf(substr, from);
	if (start >= 0) {
		let end = start + substr.length;

		return [
			end,
			{
				head: str.substring(0, start),
				tail: str.substring(end)
			}
		];
	}

	return [-1, null];
}
