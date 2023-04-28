<script lang="ts">
	import Calendar from '@event-calendar/core';
	import DayGrid from '@event-calendar/day-grid';
	import List from '@event-calendar/list';

	const isMobile = false;

	const plugins = [DayGrid, List];
	const options = {
		view: isMobile ? 'listYear' : 'dayGridMonth',
		headerToolbar: {
			start: isMobile ? 'today' : 'prev,next today',
			center: 'title',
			end: isMobile ? 'scheduleGameButton' : 'scheduleGameButton dayGridMonth,listYear'
		}
		// events: scheduledGames,
		// // eventContent: renderEventContent,
		// eventClick: ({ event }: { el: any; event: any; jsEvent: any; view: any }) => {
		// 	openGameDetailsModal(event.id);
		// }
	};
</script>

<div>
	<Calendar {plugins} {options} />
</div>

<style>
	div {
		height: 100%;
	}
</style>
