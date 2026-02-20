import type { ComponentType } from "react";
import type { ButtonVariants } from "../ui/button";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface IconButtonTooltipProps {
    icon: ComponentType<{ className?: string }>;
    label: string;
    variant?: ButtonVariants["variant"];
    size?: ButtonVariants["size"];
    side?: "top" | "right" | "bottom" | "left";
    sideOffset?: number;
    buttonClass?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function IconButtonTooltip({
    icon: Icon,
    label,
    variant = "ghost",
    size = "icon",
    side = "top",
    sideOffset = 4,
    buttonClass,
    onClick,
}: IconButtonTooltipProps) {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button
                    variant={variant}
                    size={size}
                    aria-label={label}
                    className={buttonClass}
                    onClick={onClick}
                >
                    <Icon />
                </Button>
            </TooltipTrigger>
            <TooltipContent side={side} sideOffset={sideOffset}>
                <p>{label}</p>
            </TooltipContent>
        </Tooltip>
    );
}

export { IconButtonTooltip, type IconButtonTooltipProps };
