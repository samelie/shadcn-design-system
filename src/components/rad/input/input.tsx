import type { InputVariants } from ".";
import { inputVariants } from ".";
import { cn } from "../../../lib";

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
