import {
    Dialog as UiDialog,
    DialogClose as UiDialogClose,
    DialogContent as UiDialogContent,
    DialogDescription as UiDialogDescription,
    DialogFooter as UiDialogFooter,
    DialogHeader as UiDialogHeader,
    DialogScrollContent as UiDialogScrollContent,
    DialogTitle as UiDialogTitle,
    DialogTrigger as UiDialogTrigger,
} from "../../ui/dialog";

function Dialog(props: React.ComponentProps<typeof UiDialog>) {
    return <UiDialog data-slot="dialog" {...props} />;
}

function DialogClose(props: React.ComponentProps<typeof UiDialogClose>) {
    return <UiDialogClose data-slot="dialog-close" {...props} />;
}

function DialogContent(props: React.ComponentProps<typeof UiDialogContent>) {
    return <UiDialogContent data-slot="dialog-content" {...props} />;
}

function DialogDescription(props: React.ComponentProps<typeof UiDialogDescription>) {
    return <UiDialogDescription data-slot="dialog-description" {...props} />;
}

function DialogFooter(props: React.ComponentProps<typeof UiDialogFooter>) {
    return <UiDialogFooter data-slot="dialog-footer" {...props} />;
}

function DialogHeader(props: React.ComponentProps<typeof UiDialogHeader>) {
    return <UiDialogHeader data-slot="dialog-header" {...props} />;
}

function DialogScrollContent(props: React.ComponentProps<typeof UiDialogScrollContent>) {
    return <UiDialogScrollContent data-slot="dialog-scroll-content" {...props} />;
}

function DialogTitle(props: React.ComponentProps<typeof UiDialogTitle>) {
    return <UiDialogTitle data-slot="dialog-title" {...props} />;
}

function DialogTrigger(props: React.ComponentProps<typeof UiDialogTrigger>) {
    return <UiDialogTrigger data-slot="dialog-trigger" {...props} />;
}

export {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogScrollContent,
    DialogTitle,
    DialogTrigger,
};
