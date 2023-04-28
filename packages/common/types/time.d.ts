export type DurationInput =
	| Partial<{
			year: number;
			years: number;
			month: number;
			months: number;
			week: number;
			weeks: number;
			day: number;
			days: number;
			hour: number;
			hours: number;
			minute: number;
			minutes: number;
			second: number;
			seconds: number;
	  }>
	| Date
	| string
	| number;

export type Duration = {
	years: number;
	months: number;
	days: number;
	seconds: number;
	inWeeks: boolean;
};

export type Range = {
	start: Date;
	end: Date;
};

export enum DayOfWeek {
	Sunday = 0,
	Monday = 1,
	Tuesday = 2,
	Wednesday = 3,
	Thursday = 4,
	Friday = 5,
	Saturday = 6
}
