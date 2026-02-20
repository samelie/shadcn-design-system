import { X } from "lucide-react";
import { cn } from "../../../lib";

function TagsInput({
    className,
    children,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="tags-input"
            className={cn(
                "flex min-h-10 flex-wrap items-center gap-1.5 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
                className,
            )}
            {...props}
        >
            {children}
        </div>
    );
}

function TagsInputInput({
    className,
    ...props
}: React.ComponentProps<"input">) {
    return (
        <input
            data-slot="tags-input-input"
            className={cn(
                "flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
                className,
            )}
            {...props}
        />
    );
}

function TagsInputItem({
    className,
    children,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="tags-input-item"
            className={cn(
                "inline-flex items-center gap-1 rounded-md border bg-secondary px-2 py-0.5 text-sm font-medium text-secondary-foreground",
                className,
            )}
            {...props}
        >
            {children}
        </div>
    );
}

function TagsInputItemText({
    className,
    ...props
}: React.ComponentProps<"span">) {
    return (
        <span
            data-slot="tags-input-item-text"
            className={cn("text-sm", className)}
            {...props}
        />
    );
}

function TagsInputItemDelete({
    className,
    ...props
}: React.ComponentProps<"button">) {
    return (
        <button
            type="button"
            data-slot="tags-input-item-delete"
            className={cn(
                "inline-flex items-center justify-center rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                className,
            )}
            {...props}
        >
            <X className="size-3" />
        </button>
    );
}

export { TagsInput, TagsInputInput, TagsInputItem, TagsInputItemDelete, TagsInputItemText };
