import type { InputVariants } from "./input-variants";
import { cn } from "../../../lib";
import { inputVariants } from "./input-variants";

function Input({
    className,
    variant,
    type,
    ...props
}: React.ComponentProps<"input"> & InputVariants) {
    return (
        <input
            type={type}
            data-slot="input"
            className={cn(inputVariants({ variant }), className)}
            {...props}
        />
    );
}

export { Input };
