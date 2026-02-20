import {
    ToggleGroup as UiToggleGroup,
    ToggleGroupItem as UiToggleGroupItem,
} from "../../ui/toggle-group";

function ToggleGroup(props: React.ComponentProps<typeof UiToggleGroup>) {
    return <UiToggleGroup data-slot="toggle-group" {...props} />;
}

function ToggleGroupItem(props: React.ComponentProps<typeof UiToggleGroupItem>) {
    return <UiToggleGroupItem data-slot="toggle-group-item" {...props} />;
}

export { ToggleGroup, ToggleGroupItem };
