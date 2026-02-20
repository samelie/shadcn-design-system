import {
    Table as UiTable,
    TableBody as UiTableBody,
    TableCaption as UiTableCaption,
    TableCell as UiTableCell,
    TableEmpty as UiTableEmpty,
    TableFooter as UiTableFooter,
    TableHead as UiTableHead,
    TableHeader as UiTableHeader,
    TableRow as UiTableRow,
} from "../../ui/table";

function Table(props: React.ComponentProps<typeof UiTable>) {
    return <UiTable data-slot="table" {...props} />;
}

function TableBody(props: React.ComponentProps<typeof UiTableBody>) {
    return <UiTableBody data-slot="table-body" {...props} />;
}

function TableCaption(props: React.ComponentProps<typeof UiTableCaption>) {
    return <UiTableCaption data-slot="table-caption" {...props} />;
}

function TableCell(props: React.ComponentProps<typeof UiTableCell>) {
    return <UiTableCell data-slot="table-cell" {...props} />;
}

function TableEmpty(props: React.ComponentProps<typeof UiTableEmpty>) {
    return <UiTableEmpty data-slot="table-empty" {...props} />;
}

function TableFooter(props: React.ComponentProps<typeof UiTableFooter>) {
    return <UiTableFooter data-slot="table-footer" {...props} />;
}

function TableHead(props: React.ComponentProps<typeof UiTableHead>) {
    return <UiTableHead data-slot="table-head" {...props} />;
}

function TableHeader(props: React.ComponentProps<typeof UiTableHeader>) {
    return <UiTableHeader data-slot="table-header" {...props} />;
}

function TableRow(props: React.ComponentProps<typeof UiTableRow>) {
    return <UiTableRow data-slot="table-row" {...props} />;
}

export { Table, TableBody, TableCaption, TableCell, TableEmpty, TableFooter, TableHead, TableHeader, TableRow };
