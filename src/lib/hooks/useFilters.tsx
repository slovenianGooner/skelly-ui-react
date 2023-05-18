import {useState} from "react";

export default function useFilters(available: Array<string> = [], current: Record<string, any> = {}) {
    // Get current non-empty filters
    const activeFilters = Object.keys(current).filter(key => current[key] !== null && current[key] !== undefined && current[key] !== '');
    const [open, setOpen] = useState(() => activeFilters.some(key => available.includes(key)))

    const toggle = () => setOpen(!open)
    const isOpen = () => open

    return {
        toggle,
        isOpen
    }
}
