import {
    Accordion as UiAccordion,
    AccordionContent as UiAccordionContent,
    AccordionItem as UiAccordionItem,
    AccordionTrigger as UiAccordionTrigger,
} from "../../ui/accordion";

function Accordion(props: React.ComponentProps<typeof UiAccordion>) {
    return <UiAccordion data-slot="accordion" {...props} />;
}

function AccordionContent(props: React.ComponentProps<typeof UiAccordionContent>) {
    return <UiAccordionContent data-slot="accordion-content" {...props} />;
}

function AccordionItem(props: React.ComponentProps<typeof UiAccordionItem>) {
    return <UiAccordionItem data-slot="accordion-item" {...props} />;
}

function AccordionTrigger(props: React.ComponentProps<typeof UiAccordionTrigger>) {
    return <UiAccordionTrigger data-slot="accordion-trigger" {...props} />;
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
