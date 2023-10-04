import { create } from "zustand";

interface userStoreModalInterface {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useStoreModal = create<userStoreModalInterface>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}))