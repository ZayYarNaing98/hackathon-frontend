import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type States = {
  menu: boolean;
};

type Actions = {
  toggleMenu(): void;
};

export const useDashboardStore = create(
  persist(
    immer<States & Actions>((set, get) => ({
      menu: true,
      toggleMenu() {
        set((state) => {
          state.menu = !get().menu;
        });
      },
    })),
    {
      name: "_dashboard_store",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
