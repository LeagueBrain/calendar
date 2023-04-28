import type { Writable } from 'svelte/store';
import { Duration, Range } from './time';

export interface State {
	date: Writable<Date>;
	duration: Writable<Duration>;
	monthMode: Writable<boolean>;
	firstDay: Writable<number>;
	activeRange: Writable<Range>;
	hiddenDays: Writable<number[]>;
	viewDates: Writable<Date[]>;
}
