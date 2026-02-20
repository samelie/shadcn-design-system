import type { DateRange, PropsBase, PropsRange } from "react-day-picker";
import { Calendar } from "../calendar";

type RangeCalendarProps = Omit<PropsBase, "mode"> &
    Omit<PropsRange, "mode"> & {
        className?: string;
    };

function RangeCalendar({ className, ...props }: RangeCalendarProps) {
    return (
        <Calendar
            data-slot="range-calendar"
            mode="range"
            className={className}
            {...props}
        />
    );
}

export { RangeCalendar };
export type { DateRange };
