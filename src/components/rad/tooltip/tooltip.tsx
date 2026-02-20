import {
    Tooltip as UiTooltip,
    TooltipContent as UiTooltipContent,
    TooltipProvider as UiTooltipProvider,
    TooltipTrigger as UiTooltipTrigger,
} from "../../ui/tooltip";

function Tooltip(props: React.ComponentProps<typeof UiTooltip>) {
    return <UiTooltip data-slot="tooltip" {...props} />;
}

function TooltipContent(props: React.ComponentProps<typeof UiTooltipContent>) {
    return <UiTooltipContent data-slot="tooltip-content" {...props} />;
}

function TooltipProvider(props: React.ComponentProps<typeof UiTooltipProvider>) {
    return <UiTooltipProvider data-slot="tooltip-provider" {...props} />;
}

function TooltipTrigger(props: React.ComponentProps<typeof UiTooltipTrigger>) {
    return <UiTooltipTrigger data-slot="tooltip-trigger" {...props} />;
}

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger };
