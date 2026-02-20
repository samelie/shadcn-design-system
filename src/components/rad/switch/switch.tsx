import { Switch as UiSwitch } from "../../ui/switch";

function Switch(props: React.ComponentProps<typeof UiSwitch>) {
    return <UiSwitch data-slot="switch" {...props} />;
}

export { Switch };
