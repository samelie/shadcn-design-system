import { Calendar as UiCalendar } from "../../ui/calendar";

function Calendar(props: React.ComponentProps<typeof UiCalendar>) {
    return <UiCalendar data-slot="calendar" {...props} />;
}

export { Calendar };
