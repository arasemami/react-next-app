// store/useStore.ts

import { create } from "zustand";


type Store = {
    count: number;
    increase: () => void;
    decrease: () => void;
    reset: () => void;

    // New user state
    user: { name: string; email: string };
    setUser: (user: { name: string; email: string }) => void;
    clearUser: () => void;
};

export const useStore = create<Store>((set) => ({
    count: 0,
    increase: () => set((state) => ({ count: state.count + 1 })),
    decrease: () => set((state) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 }),

    // Initial user state
    user: { name: '', email: '' },
    setUser: (user) => set({ user }),
    clearUser: () => set({ user: { name: '', email: '' } }),
}));
