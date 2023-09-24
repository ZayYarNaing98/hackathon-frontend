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
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { useClientStore } from "@/stores/client";
import { useQueryMutationAuth } from "@/api/hooks";
import { appClientToken } from "@/stores/storage";
import { useNavigate } from "react-router-dom";
import { useQueryMutateUserCreateWithoutToken } from "@/api/user/hooks";

const userAuthSchema = z.object({
  email: z.string().email({
    message: "Invalid email address",
  }),
  password: z.string().min(8, {
    message: "Invalid password minimum length 8",
  }),
});

const userCreateSchema = z
  .object({
    email: z.string().email({
      message: "Invalid email address",
    }),
    name: z.string().min(2, {
      message: "Invalid user name",
    }),
    role: z.string().max("Select Role Name".length - 2, {
      message: "Please select Role",
    }),
    address: z.string().min(2, {
      message: "Invalid address",
    }),
    phone: z.string().min(2, {
      message: "Invalid phone",
    }),
    gender: z.string().min(2, {
      message: "Invalid gender",
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

  const formCreate = useForm<z.infer<typeof userCreateSchema>>({
    resolver: zodResolver(userCreateSchema),
    defaultValues: {
      name: "",
      email: "",
      address: "",
      gender: "",
      phone: "",
      role: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const formAuth = useForm<z.infer<typeof userAuthSchema>>({
    resolver: zodResolver(userAuthSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const navigate = useNavigate();
  const { setToken } = appClientToken();
  const [setAuthInfo] = useClientStore((store) => [store.setAuthInfo]);

  const queryAuth = useQueryMutationAuth({
    onSuccess(data) {
      const { token } = data.data;
      setAuthInfo(data.data);
      setToken(token);
      setDialogStatus("");
      navigate({
        pathname: "/business-profile",
      });
    },
    onError() {
      formAuth.setError("email", {
        message: "Invalid Email",
      });
      formAuth.setError("password", {
        message: "Invalid Password",
      });
    },
  });

  const mutateUserCreate = useQueryMutateUserCreateWithoutToken({
    onSuccess() {
      setDialogStatus("signIn");
    },
  });

  const onSubmitCreate = (value: {
    name: string;
    email: string;
    role: string;
    address: string;
    gender: string;
    phone: string;
    password: string;
    passwordConfirm: string;
  }) => {
    mutateUserCreate.mutate({
      address: value.address,
      gender: value.gender,
      phone: value.phone,
      role: "client",
      status: 1,
      name: value.name,
      email: value.email,
      password: value.password,
      password_confirmation: value.passwordConfirm,
    });
  };

  const onSubmitAuth = (value: { email: string; password: string }) => {
    queryAuth.mutate(value);
  };

  return (
    <div className="fixed inset-0 z-50 grid select-none place-items-center overflow-auto bg-black bg-opacity-40 backdrop-blur-sm">
      <div className="border- my-8 w-[780px] border-spacing-1 rounded-md bg-white p-[40px] shadow-2xl">
        <div className="mb-[30px] flex items-center">
          <h1 className="text-[40px] font-medium not-italic text-purple-900">
            {dialogState === "siginUp" ? "Sign Up" : "Login"}
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
        {dialogState === "signIn" && (
          <Form {...formAuth}>
            <form
              onSubmit={formAuth.handleSubmit(onSubmitAuth)}
              className="space-y-[30px]"
            >
              <FormField
                control={formAuth.control}
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
                control={formAuth.control}
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
              <Button
                className="ml-2 h-[55px] w-full rounded-full bg-[#8B3DFF] text-[20px] font-medium not-italic hover:bg-[#8B3DFF]"
                type="submit"
              >
                Login
              </Button>
              <p
                className="cursor-pointer text-center text-[20px]"
                onClick={() => {
                  setDialogStatus("siginUp");
                }}
              >
                New User? Sign Up
              </p>
            </form>
          </Form>
        )}
        {dialogState === "siginUp" && (
          <Form {...formCreate}>
            <form
              onSubmit={formCreate.handleSubmit(onSubmitCreate)}
              className="space-y-[30px]"
            >
              <FormField
                control={formCreate.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[20px] font-medium not-italic text-[#292929]">
                      User Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Enter username"
                        {...field}
                        className="h-[60px] text-[20px] font-medium not-italic hover:border-[#A865FF] focus-visible:ring-[#A865FF]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={formCreate.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[20px] font-medium not-italic text-[#292929]">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
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
                control={formCreate.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[20px] font-medium not-italic text-[#292929]">
                      Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Enter address"
                        {...field}
                        className="h-[60px] text-[20px] font-medium not-italic hover:border-[#A865FF] focus-visible:ring-[#A865FF]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={formCreate.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[20px] font-medium not-italic text-[#292929]">
                      Phone
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Enter phone"
                        {...field}
                        className="h-[60px] text-[20px] font-medium not-italic hover:border-[#A865FF] focus-visible:ring-[#A865FF]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={formCreate.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[20px] font-medium not-italic text-[#292929]">
                      Gender
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Enter gender"
                        {...field}
                        className="h-[60px] text-[20px] font-medium not-italic hover:border-[#A865FF] focus-visible:ring-[#A865FF]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <>
                <FormField
                  control={formCreate.control}
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

                <FormField
                  control={formCreate.control}
                  name="passwordConfirm"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[20px] font-medium not-italic text-[#292929]">
                        Password Comfirmation
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Rewrite password"
                          {...field}
                          className="h-[60px] text-[20px] font-medium not-italic hover:border-[#A865FF] focus-visible:ring-[#A865FF]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>

              <div className="flex">
                <Button
                  className="ml-2 h-[55px] w-full rounded-full bg-[#8B3DFF] text-[20px] font-medium not-italic hover:bg-[#8B3DFF]"
                  type="submit"
                >
                  Sign Up
                </Button>
              </div>
              <p
                className="cursor-pointer text-center text-[20px]"
                onClick={() => {
                  setDialogStatus("signIn");
                }}
              >
                Already have an account? Sign In
              </p>
            </form>
          </Form>
        )}
      </div>
    </div>
  );
};

export default SubscriptionDialog;
