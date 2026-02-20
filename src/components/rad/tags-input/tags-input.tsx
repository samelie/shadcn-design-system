import {
    TagsInput as UiTagsInput,
    TagsInputInput as UiTagsInputInput,
    TagsInputItem as UiTagsInputItem,
    TagsInputItemDelete as UiTagsInputItemDelete,
    TagsInputItemText as UiTagsInputItemText,
} from "../../ui/tags-input";

function TagsInput(props: React.ComponentProps<typeof UiTagsInput>) {
    return <UiTagsInput data-slot="tags-input" {...props} />;
}

function TagsInputInput(props: React.ComponentProps<typeof UiTagsInputInput>) {
    return <UiTagsInputInput data-slot="tags-input-input" {...props} />;
}

function TagsInputItem(props: React.ComponentProps<typeof UiTagsInputItem>) {
    return <UiTagsInputItem data-slot="tags-input-item" {...props} />;
}

function TagsInputItemDelete(props: React.ComponentProps<typeof UiTagsInputItemDelete>) {
    return <UiTagsInputItemDelete data-slot="tags-input-item-delete" {...props} />;
}

function TagsInputItemText(props: React.ComponentProps<typeof UiTagsInputItemText>) {
    return <UiTagsInputItemText data-slot="tags-input-item-text" {...props} />;
}

export { TagsInput, TagsInputInput, TagsInputItem, TagsInputItemDelete, TagsInputItemText };
