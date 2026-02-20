import {
    Popover as UiPopover,
    PopoverAnchor as UiPopoverAnchor,
    PopoverContent as UiPopoverContent,
    PopoverTrigger as UiPopoverTrigger,
} from "../../ui/popover";

function Popover(props: React.ComponentProps<typeof UiPopover>) {
    return <UiPopover data-slot="popover" {...props} />;
}

function PopoverAnchor(props: React.ComponentProps<typeof UiPopoverAnchor>) {
    return <UiPopoverAnchor data-slot="popover-anchor" {...props} />;
}

function PopoverContent(props: React.ComponentProps<typeof UiPopoverContent>) {
    return <UiPopoverContent data-slot="popover-content" {...props} />;
}

function PopoverTrigger(props: React.ComponentProps<typeof UiPopoverTrigger>) {
    return <UiPopoverTrigger data-slot="popover-trigger" {...props} />;
}

export { Popover, PopoverAnchor, PopoverContent, PopoverTrigger };
