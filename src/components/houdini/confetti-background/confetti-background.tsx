import { useEffect, useMemo, useState } from "react";
import { isHoudiniSupported, registerWorklets } from "../../../hooks";

export interface ConfettiBackgroundProps {
    count?: number;
    speed?: number;
    sizeMin?: number;
    sizeMax?: number;
    hueBase?: number;
    hueRange?: number;
    saturation?: number;
    lightness?: number;
    lightAngle?: number;
    bgColor?: string;
    seed?: number;
    duration?: number;
    animated?: boolean;
    children?: React.ReactNode;
}

function ConfettiBackground({
    count = 25,
    speed = 1,
    sizeMin = 8,
    sizeMax = 16,
    hueBase = 280,
    hueRange = 120,
    saturation = 70,
    lightness = 80,
    lightAngle = -0.785,
    bgColor = "transparent",
    seed = 42,
    duration = 20,
    animated = true,
    children,
}: ConfettiBackgroundProps) {
    const [workletReady, setWorkletReady] = useState(false);

    useEffect(() => {
        if (isHoudiniSupported()) {
            registerWorklets().then(setWorkletReady);
        }
    }, []);

    const cssVars = useMemo(() => ({
        "--confetti-count": count,
        "--confetti-speed": speed,
        "--confetti-size-min": sizeMin,
        "--confetti-size-max": sizeMax,
        "--confetti-hue-base": hueBase,
        "--confetti-hue-range": hueRange,
        "--confetti-saturation": saturation,
        "--confetti-lightness": lightness,
        "--confetti-light-angle": lightAngle,
        "--confetti-bg-color": bgColor,
        "--confetti-seed": seed,
        "--confetti-duration": `${duration}s`,
    } as React.CSSProperties), [count, speed, sizeMin, sizeMax, hueBase, hueRange, saturation, lightness, lightAngle, bgColor, seed, duration]);

    const classNames = [
        "confetti-background",
        workletReady ? "confetti-background--houdini" : "confetti-background--fallback",
        animated && workletReady ? "confetti-background--animated" : "",
    ].filter(Boolean).join(" ");

    return (
        <div className={classNames} style={cssVars}>
            {children}
        </div>
    );
}

export { ConfettiBackground };
