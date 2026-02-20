import { useEffect, useState } from "react";

// Vite's ?url suffix returns resolved URLs for paint worklets
import animatedGradientUrl from "./houdini/worklets/animated-gradient.js?url";
import confettiBackgroundUrl from "./houdini/worklets/confetti-background.js?url";
import smoothBorderUrl from "./houdini/worklets/smooth-border.js?url";
import squircleUrl from "./houdini/worklets/squircle.js?url";

export interface HoudiniState {
    supported: boolean;
    initialized: boolean;
    error: Error | null;
}

// Module-level state for singleton pattern
let moduleSupported = false;
let moduleInitialized = false;
let moduleError: Error | null = null;
let initPromise: Promise<boolean> | null = null;

interface PaintWorklet {
    addModule: (url: string) => Promise<void>;
}

type CSSHoudini = typeof CSS & {
    paintWorklet: PaintWorklet;
};

function isCSSHoudini(css: typeof CSS): css is CSSHoudini {
    return "paintWorklet" in css;
}

export function isHoudiniSupported(): boolean {
    if (typeof window === "undefined") return false;
    return "CSS" in window && isCSSHoudini(window.CSS);
}

export async function registerWorklets(): Promise<boolean> {
    if (!isHoudiniSupported()) return false;
    if (moduleInitialized) return true;
    if (initPromise) return initPromise;

    initPromise = (async () => {
        try {
            const css = window.CSS;
            if (!isCSSHoudini(css)) {
                throw new Error("paintWorklet not available");
            }

            await Promise.all([
                css.paintWorklet.addModule(squircleUrl),
                css.paintWorklet.addModule(animatedGradientUrl),
                css.paintWorklet.addModule(smoothBorderUrl),
                css.paintWorklet.addModule(confettiBackgroundUrl),
            ]);

            moduleInitialized = true;
            moduleSupported = true;
            return true;
        } catch (e) {
            moduleError = e instanceof Error ? e : new Error(String(e));
            console.warn("[Houdini] Worklet registration failed:", moduleError);
            return false;
        }
    })();

    return initPromise;
}

export function useHoudini(autoInit = true): HoudiniState {
    const [supported, setSupported] = useState(moduleSupported);
    const [initialized, setInitialized] = useState(moduleInitialized);
    const [error, setError] = useState<Error | null>(moduleError);

    useEffect(() => {
        const sup = isHoudiniSupported();
        setSupported(sup);
        moduleSupported = sup;

        if (!sup) return;

        if (autoInit && !moduleInitialized) {
            registerWorklets().then(success => {
                setInitialized(success);
                setError(moduleError);
            });
        } else {
            setInitialized(moduleInitialized);
            setError(moduleError);
        }
    }, [autoInit]);

    return { supported, initialized, error };
}

export function applyHoudiniClass(supported: boolean): void {
    if (typeof document === "undefined") return;
    document.documentElement.classList.toggle("houdini-supported", supported);
}
