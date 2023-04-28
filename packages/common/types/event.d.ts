export enum Display {
	Auto = 'auto',
	Background = 'background'
}

export type Event = {
	id: string;
	resourceIds: string[];
	allDay: boolean;
	start: Date;
	end: Date;
	title: string;
	titleHTML: string;
	editable?: boolean;
	startEditable?: boolean;
	durationEditable?: boolean;
	display: Display;
	backgroundColor?: string;
	color?: string;
	extendedProps: {
		[propName: string]: any;
	};
};

type FetchInfo = {
	start: Date;
	end: Date;
	startStr: string;
	endStr: string;
};

export type EventSource =
	| {
			url: string;
			method: string;
			extraParams: { [param: string]: string } | (() => { [param: string]: string });
	  }
	| {
			events: (
				fetchInfo: FetchInfo,
				successCallback: (events: Event[]) => void,
				failureCallback: (failureInfo: any) => void
			) => void | Event[] | Promise<Event[]>;
	  };

export type EventChunk = {
	start: Date;
	end: Date;
	event: { start: Date; end: Date };
};

export type PreparedEventChunk = {
	date: Date;
	days: Date;
	dates: Date;
	prev: PreparedEventChunk;
} & EventChunk;
