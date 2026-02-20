import { Checkbox as UiCheckbox } from "../../ui/checkbox";

function Checkbox(props: React.ComponentProps<typeof UiCheckbox>) {
    return <UiCheckbox data-slot="checkbox" {...props} />;
}

export { Checkbox };
