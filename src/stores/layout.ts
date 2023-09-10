import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type layoutMode = "dashboard" | "client";

type States = {
  mode: layoutMode;
};

type Actions = {
  dashboardMode(): void;
  clientMode(): void;
};

export const useLayoutStore = create(
  persist(
    immer<States & Actions>((set) => ({
      mode: "client",
      clientMode() {
        set((state) => {
          state.mode = "client";
        });
      },
      dashboardMode() {
        set((state) => {
          state.mode = "dashboard";
        });
      },
    })),
    { name: "layout-store", storage: createJSONStorage(() => sessionStorage) },
  ),
);
