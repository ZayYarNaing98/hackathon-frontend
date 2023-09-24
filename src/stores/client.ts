import { AuthApiResponse } from "@/api/auth/api";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export type States = {
  authInfo: AuthApiResponse & { name?: string };
  dialogStatus: "signIn" | "siginUp" | "";
  directPayment: { id: number };
};

export type Actions = {
  setDialogStatus(status: States["dialogStatus"]): void;
  hideDialog(): void;
  setAuthInfo(data: AuthApiResponse & { name?: string }): void;
  setDirectPayment(con: { id: number }): void;
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
      directPayment: { id: 0 },
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
      setDirectPayment(con) {
        set((state) => {
          state.directPayment = con;
        });
      },
    })),
    {
      name: "_client_store",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
