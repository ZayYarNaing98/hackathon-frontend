import { Button } from "@/components/ui/button";
import XIcon from "@/components/Icons/XIcon";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useDashboardStore } from "@/stores/dashboard";
// import { useEffect } from "react";
// import { useQueryClient } from "react-query";
// import { capitalize } from "lodash";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { useClientStore } from "@/stores/client";

const formSchema = z
  .object({
    email: z.string().email({
      message: "Invalid email address",
    }),
    password: z.string().min(8, {
      message: "Invalid password minimum length 8",
    }),
    passwordConfirm: z.string().min(8, {
      message: "Invalid password  minimum length 8",
    }),
  })
  .refine(({ password, passwordConfirm }) => password === passwordConfirm, {
    path: ["passwordConfirm"],
    message: "The passwords did not match",
  });

const SubscriptionDialog = () => {
  const [dialogState, hideDialog, setDialogStatus] = useClientStore((store) => [
    store.dialogStatus,
    store.hideDialog,
    store.setDialogStatus,
  ]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  //   const [email, password, passwordConfirm] = form.watch([
  //     "email",
  //     "password",
  //     "passwordConfirm",
  //   ]);

  const onSubmit = (value: {
    email: string;
    password: string;
    passwordConfirm: string;
  }) => {
    console.log(value);
  };

  return (
    <div className="fixed inset-0 z-50 grid select-none place-items-center overflow-auto bg-black bg-opacity-40 backdrop-blur-sm">
      <div className="border- my-8 w-[780px] border-spacing-1 rounded-md bg-white p-[40px] shadow-2xl">
        <div className="mb-[30px] flex items-center">
          <h1 className="text-[40px] font-medium not-italic text-purple-900">
            {dialogState === "signIn" ? "Login" : "Signup"}
          </h1>
          <Button
            type="button"
            className="ml-auto"
            variant={"ghost"}
            size={"icon"}
            onClick={hideDialog}
          >
            <XIcon />
          </Button>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-[30px]"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[20px] font-medium not-italic text-[#292929]">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter email"
                      {...field}
                      className="h-[60px] text-[20px] font-medium not-italic hover:border-[#A865FF] focus-visible:ring-[#A865FF]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[20px] font-medium not-italic text-[#292929]">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter password"
                      {...field}
                      className="h-[60px] text-[20px] font-medium not-italic hover:border-[#A865FF] focus-visible:ring-[#A865FF]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {dialogState === "siginUp" && (
              <FormField
                control={form.control}
                name="passwordConfirm"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[20px] font-medium not-italic text-[#292929]">
                      Password Confirmation
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter password"
                        {...field}
                        className="h-[60px] text-[20px] font-medium not-italic hover:border-[#A865FF] focus-visible:ring-[#A865FF]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <div className="flex">
              {dialogState === "siginUp" ? (
                <Button
                  className="ml-2 h-[55px] w-full rounded-full bg-[#8B3DFF] text-[20px] font-medium not-italic hover:bg-[#8B3DFF]"
                  type="submit"
                >
                  Sign Up
                </Button>
              ) : (
                <Button
                  className="ml-2 h-[55px] w-full rounded-full bg-[#8B3DFF] text-[20px] font-medium not-italic hover:bg-[#8B3DFF]"
                  type="submit"
                >
                  Login
                </Button>
              )}
            </div>
            {dialogState === "siginUp" ? (
              <p
                className="cursor-pointer text-center text-[20px]"
                onClick={() => {
                  setDialogStatus("signIn");
                }}
              >
                Already have an account? Sign In
              </p>
            ) : (
              <p
                className="cursor-pointer text-center text-[20px]"
                onClick={() => {
                  setDialogStatus("siginUp");
                }}
              >
                New User? Sign Up
              </p>
            )}
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SubscriptionDialog;
