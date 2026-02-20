import { Label as UiLabel } from "../../ui/label";

function Label(props: React.ComponentProps<typeof UiLabel>) {
    return <UiLabel data-slot="label" {...props} />;
}

export { Label };
