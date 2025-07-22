// app/components/SmoothScrollProvider.tsx
"use client";

import { useEffect } from "react";
import { initSmoothScroll } from "../lib/lenis";

const SmoothScrollProvider = () => {
    useEffect(() => {
        initSmoothScroll();
    }, []);

    return null; // No visible output, just side-effect
};

export default SmoothScrollProvider;
