import { SIDEBAR } from "@/constants";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type States = {
  sidebarIndex: number;
};
type Actions = {
  setSidebarIndex(slideName: number): void;
};

export const useSidebarStore = create(
  persist(
    immer<States & Actions>((set) => ({
      sidebarIndex: SIDEBAR.USER_MANAGEMENT,
      setSidebarIndex(sliderIndex) {
        set((store) => {
          store.sidebarIndex = sliderIndex;
        });
      },
    })),
    {
      name: "sidebar-store",
    },
  ),
);
