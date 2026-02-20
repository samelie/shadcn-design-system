import type { HoudiniState } from "./use-houdini";
import { createContext, useContext, useEffect } from "react";
import { applyHoudiniClass, useHoudini } from "./use-houdini";

export const HoudiniContext = createContext<HoudiniState | null>(null);

export function useHoudiniContext(): HoudiniState | null {
    return useContext(HoudiniContext);
}

export function HoudiniProvider({
    children,
    autoInit = true,
    applyClass = true,
}: {
    children: React.ReactNode;
    autoInit?: boolean;
    applyClass?: boolean;
}) {
    const houdini = useHoudini(autoInit);

    useEffect(() => {
        if (applyClass) {
            applyHoudiniClass(houdini.supported && houdini.initialized);
        }
    }, [applyClass, houdini.supported, houdini.initialized]);

    return (
        <HoudiniContext.Provider value={houdini}>
            {children}
        </HoudiniContext.Provider>
    );
}
