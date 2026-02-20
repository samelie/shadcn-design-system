import {
    DropdownMenu as UiDropdownMenu,
    DropdownMenuCheckboxItem as UiDropdownMenuCheckboxItem,
    DropdownMenuContent as UiDropdownMenuContent,
    DropdownMenuGroup as UiDropdownMenuGroup,
    DropdownMenuItem as UiDropdownMenuItem,
    DropdownMenuLabel as UiDropdownMenuLabel,
    DropdownMenuPortal as UiDropdownMenuPortal,
    DropdownMenuRadioGroup as UiDropdownMenuRadioGroup,
    DropdownMenuRadioItem as UiDropdownMenuRadioItem,
    DropdownMenuSeparator as UiDropdownMenuSeparator,
    DropdownMenuShortcut as UiDropdownMenuShortcut,
    DropdownMenuSub as UiDropdownMenuSub,
    DropdownMenuSubContent as UiDropdownMenuSubContent,
    DropdownMenuSubTrigger as UiDropdownMenuSubTrigger,
    DropdownMenuTrigger as UiDropdownMenuTrigger,
} from "../../ui/dropdown-menu";

function DropdownMenu(props: React.ComponentProps<typeof UiDropdownMenu>) {
    return <UiDropdownMenu data-slot="dropdown-menu" {...props} />;
}

function DropdownMenuCheckboxItem(props: React.ComponentProps<typeof UiDropdownMenuCheckboxItem>) {
    return <UiDropdownMenuCheckboxItem data-slot="dropdown-menu-checkbox-item" {...props} />;
}

function DropdownMenuContent(props: React.ComponentProps<typeof UiDropdownMenuContent>) {
    return <UiDropdownMenuContent data-slot="dropdown-menu-content" {...props} />;
}

function DropdownMenuGroup(props: React.ComponentProps<typeof UiDropdownMenuGroup>) {
    return <UiDropdownMenuGroup data-slot="dropdown-menu-group" {...props} />;
}

function DropdownMenuItem(props: React.ComponentProps<typeof UiDropdownMenuItem>) {
    return <UiDropdownMenuItem data-slot="dropdown-menu-item" {...props} />;
}

function DropdownMenuLabel(props: React.ComponentProps<typeof UiDropdownMenuLabel>) {
    return <UiDropdownMenuLabel data-slot="dropdown-menu-label" {...props} />;
}

function DropdownMenuPortal(props: React.ComponentProps<typeof UiDropdownMenuPortal>) {
    return <UiDropdownMenuPortal data-slot="dropdown-menu-portal" {...props} />;
}

function DropdownMenuRadioGroup(props: React.ComponentProps<typeof UiDropdownMenuRadioGroup>) {
    return <UiDropdownMenuRadioGroup data-slot="dropdown-menu-radio-group" {...props} />;
}

function DropdownMenuRadioItem(props: React.ComponentProps<typeof UiDropdownMenuRadioItem>) {
    return <UiDropdownMenuRadioItem data-slot="dropdown-menu-radio-item" {...props} />;
}

function DropdownMenuSeparator(props: React.ComponentProps<typeof UiDropdownMenuSeparator>) {
    return <UiDropdownMenuSeparator data-slot="dropdown-menu-separator" {...props} />;
}

function DropdownMenuShortcut(props: React.ComponentProps<typeof UiDropdownMenuShortcut>) {
    return <UiDropdownMenuShortcut data-slot="dropdown-menu-shortcut" {...props} />;
}

function DropdownMenuSub(props: React.ComponentProps<typeof UiDropdownMenuSub>) {
    return <UiDropdownMenuSub data-slot="dropdown-menu-sub" {...props} />;
}

function DropdownMenuSubContent(props: React.ComponentProps<typeof UiDropdownMenuSubContent>) {
    return <UiDropdownMenuSubContent data-slot="dropdown-menu-sub-content" {...props} />;
}

function DropdownMenuSubTrigger(props: React.ComponentProps<typeof UiDropdownMenuSubTrigger>) {
    return <UiDropdownMenuSubTrigger data-slot="dropdown-menu-sub-trigger" {...props} />;
}

function DropdownMenuTrigger(props: React.ComponentProps<typeof UiDropdownMenuTrigger>) {
    return <UiDropdownMenuTrigger data-slot="dropdown-menu-trigger" {...props} />;
}

export {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
};
