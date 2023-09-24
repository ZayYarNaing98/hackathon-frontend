import { AuthApiResponse } from "@/api/auth/api";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export type States = {
  authInfo: AuthApiResponse & { name?: string };
  dialogStatus: "signIn" | "siginUp" | "";
};

export type Actions = {
  setDialogStatus(status: States["dialogStatus"]): void;
  hideDialog(): void;
  setAuthInfo(data: AuthApiResponse & { name?: string }): void;
};

export const useClientStore = create(
  persist(
    immer<States & Actions>((set) => ({
      dialogStatus: "",
      authInfo: {
        id: 0,
        token: "",
        name: "",
      },
      setDialogStatus(status) {
        set((store) => {
          store.dialogStatus = status;
        });
      },
      hideDialog() {
        set((store) => {
          store.dialogStatus = "";
        });
      },
      setAuthInfo(data) {
        set((state) => {
          state.authInfo = data;
        });
      },
    })),
    {
      name: "_client_store",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
