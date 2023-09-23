import { AuthApiResponse } from "@/api/auth/api";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export type States = {
  menu: boolean;
  authInfo: AuthApiResponse;
  dialogStatus: "insert" | "update" | "delete" | "view" | "";
  dialogState: {
    id: number;
    userName: string;
    email: string;
    role: string;
    address: string;
    phone: string;
    gender: string;
  };
};

export type Actions = {
  setDialogState(value: States["dialogState"]): void;
  toggleMenu(): void;
  setAuthInfo(data: AuthApiResponse): void;
  showViewDialog(): void;
  showInsertDialog(): void;
  showUpdateDialog(): void;
  showDeleteDialog(): void;
  hideDialog(): void;
};

export const useDashboardStore = create(
  persist(
    immer<States & Actions>((set, get) => ({
      menu: true,
      authInfo: {
        id: 0,
        token: "",
      },
      dialogStatus: "",
      dialogState: {
        id: 0,
        email: "",
        userName: "",
        role: "",
        address: "",
        gender: "",
        phone: "",
      },
      setDialogState(value) {
        set((state) => {
          state.dialogState = value;
        });
      },
      toggleMenu() {
        set((state) => {
          state.menu = !get().menu;
        });
      },
      setAuthInfo(data: AuthApiResponse) {
        set((state) => {
          state.authInfo = data;
        });
      },
      showViewDialog() {
        set((state) => {
          state.dialogStatus = "view";
        });
      },
      showInsertDialog() {
        set((state) => {
          state.dialogStatus = "insert";
        });
      },
      showUpdateDialog() {
        set((state) => {
          state.dialogStatus = "update";
        });
      },
      showDeleteDialog() {
        set((state) => {
          state.dialogStatus = "delete";
        });
      },
      hideDialog() {
        set((state) => {
          state.dialogStatus = "";
          state.dialogState = {
            id: 0,
            email: "",
            userName: "",
            role: "",
            address: "",
            gender: "",
            phone: "",
          };
        });
      },
    })),
    {
      name: "_dashboard_store",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
