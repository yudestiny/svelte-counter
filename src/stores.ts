import { derived, writable } from "svelte/store";

export const counters = writable([
    {
        id:0, 
        name: "new", 
        count: 0
    }
])

export const sum = derived(counters, $counters => (
    $counters.reduce((total: number, current) => total + current.count, 0)
))
