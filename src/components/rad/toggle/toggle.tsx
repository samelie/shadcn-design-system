import { Toggle as UiToggle } from "../../ui/toggle";

function Toggle(props: React.ComponentProps<typeof UiToggle>) {
    return <UiToggle data-slot="toggle" {...props} />;
}

export { Toggle };
