import { View } from './view';
import { Resource } from './resource';
import { DayOfWeek, Duration, DurationInput } from './time';
import { Event, EventSource } from './event';
import { Theme } from './theme';

type Content =
	| string
	| {
			html: string;
	  }
	| {
			domNodes: Node[];
	  };

type ButtonText = {
	today?: string;
	dayGridMonth?: string;
	listDay?: string;
	listWeek?: string;
	listMonth?: string;
	listYear?: string;
	resourceTimeGridDay?: string;
	resourceTimeGridWeek?: string;
	timeGridDay?: string;
	timeGridWeek?: string;
};

type DateClickInfo = {
	date: Date;
	dateStr: string;
	allDay: boolean;
	dayEl: HTMLElement;
	jsEvent: PointerEvent;
	view: View;
	resource: Resource;
};

type DatesSetInfo = {
	start: Date;
	end: Date;
	startStr: string;
	endStr: string;
	view: View;
};

type EventClickInfo = {
	el: HTMLElement;
	event: Event;
	jsEvent: PointerEvent;
	view: View;
};

type EventContentInfo = {
	event: Event;
	timeText: string;
	view: View;
};

type EventDidMountInfo = {
	el: HTMLElement;
	event: Event;
	timeText: string;
	view: View;
};

type EventDragInfo = {
	event: Event;
	jsEvent: PointerEvent;
	view: View;
};

type EventDropInfo = {
	event: Event;
	oldEvent: Event;
	oldResource: Resource;
	newResource: Resource;
	delta: Duration;
	revert: () => void;
	jsEvent: PointerEvent;
	view: View;
};

type EventMouseInfo = {
	el: HTMLElement;
	event: Event;
	jsEvent: PointerEvent;
	view: View;
};

type EventResizeInfo = {
	event: Event;
	oldEvent: Event;
	endDelta: Duration;
	revert: () => void;
	jsEvent: PointerEvent;
	view: View;
};

type NoEventsInfo = {
	jsEvent: PointerEvent;
	view: View;
};

type ResourceLabelContentInfo = {
	resource: Resource;
	date: Date;
};

type ResourceLabelDidMountInfo = {
	el: HTMLElement;
	resource: Resource;
	date: Date;
};

type SelectInfo = {
	start: Date;
	end: Date;
	startStr: string;
	endStr: string;
	allDay: boolean;
	jsEvent: PointerEvent;
	view: View;
	resource: Resource;
};

type UnselectInfo = {
	jsEvent: PointerEvent;
	view: View;
};

type ViewDidMountInfo = {
	view: View;
};

export type Options = {
	allDayContent: Content | ((arg: string) => Content); // check
	allDaySlot: boolean;
	buttonText: ButtonText;
	date: Date | string;
	dateClick: (info: DateClickInfo) => void;
	datesAboveResources: boolean;
	datesSet: (info: DatesSetInfo) => void;
	dayHeaderFormat: Partial<Intl.DateTimeFormatPartTypes | ((date: Date) => string)>;
	dayMaxEvents: boolean;
	dayPopoverFormat: Partial<Intl.DateTimeFormatPartTypes | ((date: Date) => string)>;
	displayEventEnd: boolean;
	dragScroll: boolean;
	duration: DurationInput;
	editable: boolean;
	events: Event[];
	eventBackgroundColor: string;
	eventClick: (info: EventClickInfo) => void;
	eventColor: string;
	eventContent: Content | ((info: EventContentInfo) => Content);
	eventDidMount: (info: EventDidMountInfo) => void;
	eventDragMinDistance: number;
	eventDragStart: (info: EventDragInfo) => void;
	eventDragStop: (info: EventDragInfo) => void;
	eventDrop: (info: EventDropInfo) => void;
	eventDurationEditable: boolean;
	eventLongPressDelay: number;
	eventMouseEnter: (info: EventMouseInfo) => void;
	eventMouseLeave: (info: EventMouseInfo) => void;
	eventResize: (info: EventResizeInfo) => void;
	eventResizeStart: (info: Omit<EventResizeInfo, 'oldEvent' | 'endDelta' | 'revert'>) => void;
	eventResizeStop: (info: Omit<EventResizeInfo, 'oldEvent' | 'endDelta' | 'revert'>) => void;
	eventSources: EventSource[];
	eventStartEditable: boolean;
	eventTimeFormat: Partial<Intl.DateTimeFormatPartTypes | ((time: Date) => string)>;
	filterResourcesWithEvents: boolean;
	firstDay: number;
	flexibleSlotTimeLimits: boolean; // ec option
	headerToolbar: {
		start: string;
		center: string;
		end: string;
	};
	height: string;
	hiddenDays: DayOfWeek[];
	highlightedDates: (Date | string)[]; // ec option
	lazyFetching: boolean;
	listDayFormat: Partial<Intl.DateTimeFormatPartTypes | ((date: Date) => string)>;
	listDaySideFormat: Partial<Intl.DateTimeFormatPartTypes | ((date: Date) => string)>;
	loading: (isLoading: boolean) => void;
	locale: string;
	longPressDelay: number;
	monthMode: boolean;
	moreLinkContent: Content | ((arg: { num: number; text: string }) => Content);
	noEventsClick: (info: NoEventsInfo) => void;
	noEventsContent: Content | (() => Content);
	nowIndicator: boolean;
	pointer: boolean;
	resources: any[]; // check
	resourceLabelContent: Content | ((info: ResourceLabelContentInfo) => Content);
	resourceLabelDidMount: (info: ResourceLabelDidMountInfo) => void;
	select: (info: SelectInfo) => void;
	selectable: boolean;
	selectBackgroundColor: string;
	selectLongPressDelay: number;
	selectMinDistance: number;
	scrollTime: DurationInput;
	slotDuration: DurationInput;
	slotEventOverlap: boolean;
	slotHeight: number; // ec option
	slotLabelFormat: Partial<Intl.DateTimeFormatPartTypes | ((time: Date) => string)>;
	slotMaxTime: DurationInput;
	slotMinTime: DurationInput;
	theme: Theme | ((theme: Theme) => Theme);
	titleFormat: Partial<Intl.DateTimeFormatPartTypes | ((date: Date) => string)>;
	unselect: (info: UnselectInfo) => void;
	unselectAuto: boolean;
	unselectCancel: string;
	view: string;
	viewDidMount: (info: ViewDidMountInfo) => void;
	views: {
		[view: string]: Options;
	};
};
