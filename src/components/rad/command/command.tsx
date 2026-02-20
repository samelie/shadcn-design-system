import {
    Command as UiCommand,
    CommandDialog as UiCommandDialog,
    CommandEmpty as UiCommandEmpty,
    CommandGroup as UiCommandGroup,
    CommandInput as UiCommandInput,
    CommandItem as UiCommandItem,
    CommandList as UiCommandList,
    CommandSeparator as UiCommandSeparator,
    CommandShortcut as UiCommandShortcut,
} from "../../ui/command";

function Command(props: React.ComponentProps<typeof UiCommand>) {
    return <UiCommand data-slot="command" {...props} />;
}

function CommandDialog(props: React.ComponentProps<typeof UiCommandDialog>) {
    return <UiCommandDialog data-slot="command-dialog" {...props} />;
}

function CommandEmpty(props: React.ComponentProps<typeof UiCommandEmpty>) {
    return <UiCommandEmpty data-slot="command-empty" {...props} />;
}

function CommandGroup(props: React.ComponentProps<typeof UiCommandGroup>) {
    return <UiCommandGroup data-slot="command-group" {...props} />;
}

function CommandInput(props: React.ComponentProps<typeof UiCommandInput>) {
    return <UiCommandInput data-slot="command-input" {...props} />;
}

function CommandItem(props: React.ComponentProps<typeof UiCommandItem>) {
    return <UiCommandItem data-slot="command-item" {...props} />;
}

function CommandList(props: React.ComponentProps<typeof UiCommandList>) {
    return <UiCommandList data-slot="command-list" {...props} />;
}

function CommandSeparator(props: React.ComponentProps<typeof UiCommandSeparator>) {
    return <UiCommandSeparator data-slot="command-separator" {...props} />;
}

function CommandShortcut(props: React.ComponentProps<typeof UiCommandShortcut>) {
    return <UiCommandShortcut data-slot="command-shortcut" {...props} />;
}

export {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
};
