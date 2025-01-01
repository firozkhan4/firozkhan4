import { create } from "zustand";

interface HelpState {
  show: boolean;
  toggleHelp: () => void;
}

export const useHelpStore = create<HelpState>((set) => ({
  show: false,
  toggleHelp: () => set((state) => ({ show: !state.show })),
}));
