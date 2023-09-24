import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export type States = {
  dialogStatus: "signIn" | "siginUp" | "";
};

export type Actions = {
  setDialogStatus(status: States["dialogStatus"]): void;
  hideDialog(): void;
};

export const useClientStore = create(
  persist(
    immer<States & Actions>((set) => ({
      dialogStatus: "",
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
    })),
    {
      name: "_client_store",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
