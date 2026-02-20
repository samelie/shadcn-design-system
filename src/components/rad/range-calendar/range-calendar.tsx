import { RangeCalendar as UiRangeCalendar } from "../../ui/range-calendar";

function RangeCalendar(props: React.ComponentProps<typeof UiRangeCalendar>) {
    return <UiRangeCalendar data-slot="range-calendar" {...props} />;
}

export { RangeCalendar };
