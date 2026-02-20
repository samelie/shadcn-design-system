import { defineKnipConfig } from "@adddog/monorepo-consistency";

export default defineKnipConfig({
    entry: ["src/index.ts"],
    project: ["src/**/*.{ts,tsx}"],
    // WHY: CSS-level deps consumed via @import / class usage, not TS imports
    ignoreDependencies: [
        "@adddog/tailwind-theme",
        "tailwindcss",
        "tw-animate-css",
    ],
});
