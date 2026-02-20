import { ChevronUp } from "lucide-react";
import { useMemo, useState } from "react";
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
} from "../../components/ui/drawer";
import { cn } from "../../lib";

interface AppDrawerProps {
    title?: string;
    description?: string;
    snapPoints?: number[];
    defaultSnapPoint?: number;
    modal?: boolean;
    shouldScaleBackground?: boolean;
    direction?: "top" | "bottom" | "left" | "right";
    scrollLockTimeout?: number;
    handleOnly?: boolean;
    tabHeight?: string;
    tabLabel?: string;
    showTabIcon?: boolean;
    width?: string;
    side?: "left" | "center" | "right";
    children?: React.ReactNode | ((props: { snap: number; isExpanded: boolean }) => React.ReactNode);
    footer?: React.ReactNode;
    titleSlot?: React.ReactNode;
    descriptionSlot?: React.ReactNode;
    onSnapChange?: (snapPoint: number) => void;
    onOpen?: () => void;
    onClose?: () => void;
}

function AppDrawer({
    title = "Details",
    description = "",
    snapPoints = [0.2, 0.5, 1],
    defaultSnapPoint = 0.2,
    modal = false,
    shouldScaleBackground = false,
    direction = "bottom",
    scrollLockTimeout: _scrollLockTimeout = 500,
    handleOnly = false,
    tabHeight = "50px",
    tabLabel = "View Details",
    showTabIcon = true,
    width = "100%",
    side,
    children,
    footer,
    titleSlot,
    descriptionSlot,
    onSnapChange,
}: AppDrawerProps) {
    const [activeSnap, setActiveSnap] = useState<number | string | null>(defaultSnapPoint);

    const currentSnap = typeof activeSnap === "number" ? activeSnap : defaultSnapPoint;

    const contentMaxHeight = useMemo(() => {
        const CHROME_HEIGHT = 120;
        return `calc(${currentSnap * 100}vh - ${CHROME_HEIGHT}px)`;
    }, [currentSnap]);

    const drawerStyle = useMemo(() => ({ width }), [width]);

    const drawerClass = useMemo(() => {
        const classes = ["drawer-with-tab", "h-full", "max-h-[97%]"];
        if (side && (direction === "bottom" || direction === "top")) {
            const justifyMap = {
                left: "justify-self-start",
                center: "justify-self-center",
                right: "justify-self-end",
            };
            classes.push(justifyMap[side]);
        }
        return cn(...classes);
    }, [side, direction]);

    const isExpanded = useMemo(() => {
        const secondSnap = snapPoints[1] ?? defaultSnapPoint;
        return currentSnap > secondSnap;
    }, [currentSnap, snapPoints, defaultSnapPoint]);

    const isCollapsed = activeSnap === snapPoints[0];

    return (
        <Drawer
            open
            snapPoints={snapPoints}
            activeSnapPoint={activeSnap}
            setActiveSnapPoint={snap => {
                setActiveSnap(snap);
                if (typeof snap === "number") {
                    onSnapChange?.(snap);
                }
            }}
            modal={modal}
            shouldScaleBackground={shouldScaleBackground}
            direction={direction}
            dismissible={false}
            handleOnly={handleOnly}
        >
            <DrawerContent className={drawerClass} style={drawerStyle}>
                <DrawerHeader className={isCollapsed ? "sr-only" : "text-left"}>
                    <DrawerTitle>{titleSlot ?? title}</DrawerTitle>
                    {(description || descriptionSlot) && (
                        <DrawerDescription>{descriptionSlot ?? description}</DrawerDescription>
                    )}
                </DrawerHeader>

                {isCollapsed
                    ? (
                            <div
                                className="flex items-center justify-center gap-2 px-4 bg-background border-t border-border"
                                style={{ height: tabHeight }}
                            >
                                {showTabIcon && <ChevronUp className="h-5 w-5 text-muted-foreground animate-bounce" />}
                                <span className="text-sm font-medium text-foreground">{tabLabel}</span>
                            </div>
                        )
                    : (
                            <>
                                <div className="flex-1 overflow-y-auto px-4 pb-4" style={{ maxHeight: contentMaxHeight }}>
                                    {typeof children === "function"
                                        ? children({ snap: currentSnap, isExpanded })
                                        : children}
                                </div>
                                {footer && <div className="border-t border-border p-4">{footer}</div>}
                            </>
                        )}
            </DrawerContent>
        </Drawer>
    );
}

export { AppDrawer, type AppDrawerProps };
