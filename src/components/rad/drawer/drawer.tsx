import {
    Drawer as UiDrawer,
    DrawerClose as UiDrawerClose,
    DrawerContent as UiDrawerContent,
    DrawerDescription as UiDrawerDescription,
    DrawerFooter as UiDrawerFooter,
    DrawerHeader as UiDrawerHeader,
    DrawerOverlay as UiDrawerOverlay,
    DrawerTitle as UiDrawerTitle,
    DrawerTrigger as UiDrawerTrigger,
} from "../../ui/drawer";

function Drawer(props: React.ComponentProps<typeof UiDrawer>) {
    return <UiDrawer data-slot="drawer" {...props} />;
}

function DrawerClose(props: React.ComponentProps<typeof UiDrawerClose>) {
    return <UiDrawerClose data-slot="drawer-close" {...props} />;
}

function DrawerContent(props: React.ComponentProps<typeof UiDrawerContent>) {
    return <UiDrawerContent data-slot="drawer-content" {...props} />;
}

function DrawerDescription(props: React.ComponentProps<typeof UiDrawerDescription>) {
    return <UiDrawerDescription data-slot="drawer-description" {...props} />;
}

function DrawerFooter(props: React.ComponentProps<typeof UiDrawerFooter>) {
    return <UiDrawerFooter data-slot="drawer-footer" {...props} />;
}

function DrawerHeader(props: React.ComponentProps<typeof UiDrawerHeader>) {
    return <UiDrawerHeader data-slot="drawer-header" {...props} />;
}

function DrawerOverlay(props: React.ComponentProps<typeof UiDrawerOverlay>) {
    return <UiDrawerOverlay data-slot="drawer-overlay" {...props} />;
}

function DrawerTitle(props: React.ComponentProps<typeof UiDrawerTitle>) {
    return <UiDrawerTitle data-slot="drawer-title" {...props} />;
}

function DrawerTrigger(props: React.ComponentProps<typeof UiDrawerTrigger>) {
    return <UiDrawerTrigger data-slot="drawer-trigger" {...props} />;
}

export {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerTitle,
    DrawerTrigger,
};
