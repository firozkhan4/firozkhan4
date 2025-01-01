import { create } from "zustand";

interface NotificationState {
  message: string;
  show: boolean;
  setMessage: (msg: string) => void;
  notify: () => void;
}

export const useNotificationStore = create<NotificationState>((set) => ({
  message: "",
  show: false,
  setMessage: (msg) => set({ message: msg }),
  notify: () => {
    set({ show: true });

    setTimeout(() => {
      set({ show: false });
    }, 10000);
  },
}));
