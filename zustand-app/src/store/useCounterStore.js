import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCounterStore = create(
    persist(
        (set) => ({
            count: 1,
            inc: () => 
                set((state) => ({
                    count: state.count + 1
                }))
        }),{ name: 'counter' }
    )
)