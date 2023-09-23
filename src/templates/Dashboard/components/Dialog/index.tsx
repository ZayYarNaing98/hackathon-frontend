import {
  useQueryMutateUserCreate,
  useQueryMutateUserDelete,
  useQueryMutateUserUpdate,
} from "@/api/user/hooks";
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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { useDashboardStore } from "@/stores/dashboard";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useQueryClient } from "react-query";
import * as z from "zod";
import { capitalize } from "lodash";

const formSchema = z
  .object({
    email: z.string().email({
      message: "Invalid email address",
    }),
    username: z.string().min(2, {
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

const DashboardDialog = () => {
  const queryClient = useQueryClient();
  const [dialogStatus, dialogState, showUpdateDialog, hideDialog] =
    useDashboardStore((store) => [
      store.dialogStatus,
      store.dialogState,
      store.showUpdateDialog,
      store.hideDialog,
    ]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      address: "",
      gender: "",
      phone: "",
      role: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const [
    userName,
    email,
    address,
    phone,
    gender,
    role,
    password,
    passwordConfirm,
  ] = form.watch([
    "username",
    "email",
    "address",
    "phone",
    "gender",
    "role",
    "password",
    "passwordConfirm",
  ]);

  const mutateUserDelete = useQueryMutateUserDelete({
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["user-list"],
      });
      hideDialog();
      toast({
        title: "Reminder",
        description: `User deleted successfully.`,
      });
    },
    onError() {
      toast({
        title: "Reminder",
        description: `Fail to delete user.`,
      });
    },
  });

  const mutateUserCreate = useQueryMutateUserCreate({
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["user-list"],
      });
      hideDialog();
      toast({
        title: "Reminder",
        description: `User account created successfully.`,
      });
    },
    onError() {
      toast({
        title: "Reminder",
        description: `Fail to create user.`,
      });
    },
  });

  const mutateUserUpdate = useQueryMutateUserUpdate({
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["user-list"],
      });
      hideDialog();
      toast({
        title: "Reminder",
        description: `User account updated successfully.`,
      });
    },
    onError() {
      toast({
        title: "Reminder",
        description: `Fail to update user.`,
      });
    },
  });

  useEffect(() => {
    form.setValue("username", dialogState.userName ?? "");
    form.setValue("email", dialogState.email ?? "");
    form.setValue("address", dialogState.address ?? "");
    form.setValue("phone", dialogState.phone ?? "");
    form.setValue("gender", dialogState.gender ?? "");
    form.setValue("role", capitalize(dialogState.role ?? ""));
    if (dialogStatus === "view" || dialogStatus === "update") {
      form.setValue("password", "12345678" ?? "");
      form.setValue("passwordConfirm", "12345678" ?? "");
    }

    form.setValue("gender", dialogState.gender ?? "");
  }, [dialogState, dialogStatus, form]);

  const onSubmit = (value: {
    username: string;
    email: string;
    role: string;
    address: string;
    gender: string;
    phone: string;
    password: string;
    passwordConfirm: string;
  }) => {
    if (dialogStatus === "view") {
      showUpdateDialog();
    }

    if (dialogStatus === "update") {
      mutateUserUpdate.mutate({
        id: dialogState.id,
        email: value.email,
        name: value.username,
        address: value.address,
        gender: value.gender,
        phone: value.phone,
        role: value.role,
      });
    }

    if (dialogStatus === "delete") {
      mutateUserDelete.mutate(dialogState.id);
    }

    if (dialogStatus === "insert") {
      mutateUserCreate.mutate({
        name: value.username,
        email: value.email,
        address: value.address,
        gender: value.gender,
        phone: value.phone,
        status: 1,
        role: value.role.toLowerCase(),
        password: value.password,
        password_confirmation: value.passwordConfirm,
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 grid select-none place-items-center overflow-auto bg-black bg-opacity-40 backdrop-blur-sm">
      <div className="border- my-8 w-[780px] border-spacing-1 rounded-md bg-white p-[40px] shadow-2xl">
        <div className="mb-[30px] flex items-center">
          <h1 className="text-2xl font-medium not-italic text-purple-900">
            {dialogStatus === "view" && "View User"}
            {dialogStatus === "insert" && "Add New User"}
            {dialogStatus === "update" && "Update User"}
            {dialogStatus === "delete" && "Confirm deletion"}
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

        {dialogStatus === "delete" && (
          <p className="mb-8 text-xl font-medium not-italic">
            Are you sure you would like to delete this user?
          </p>
        )}

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-[30px]"
          >
            {dialogStatus !== "delete" && (
              <>
                <FormField
                  control={form.control}
                  name="username"
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
                          disabled={dialogStatus === "view"}
                          className="h-[60px] text-[20px] font-medium not-italic hover:border-[#A865FF] focus-visible:ring-[#A865FF]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

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
                          type="text"
                          placeholder="Enter email"
                          {...field}
                          disabled={dialogStatus === "view"}
                          className="h-[60px] text-[20px] font-medium not-italic hover:border-[#A865FF] focus-visible:ring-[#A865FF]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
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
                          disabled={dialogStatus === "view"}
                          className="h-[60px] text-[20px] font-medium not-italic hover:border-[#A865FF] focus-visible:ring-[#A865FF]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
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
                          disabled={dialogStatus === "view"}
                          className="h-[60px] text-[20px] font-medium not-italic hover:border-[#A865FF] focus-visible:ring-[#A865FF]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
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
                          disabled={dialogStatus === "view"}
                          className="h-[60px] text-[20px] font-medium not-italic hover:border-[#A865FF] focus-visible:ring-[#A865FF]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {dialogStatus === "insert" && (
                  <>
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

                    <FormField
                      control={form.control}
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
                )}

                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem className=" flex flex-col">
                      <FormLabel className="text-[20px] font-medium not-italic text-[#292929]">
                        Role
                      </FormLabel>
                      <FormControl>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                          disabled={dialogStatus === "view"}
                        >
                          <SelectTrigger className="h-[60px] rounded border-[1px] px-3 py-2 text-start text-[20px] font-medium not-italic hover:border-[#A865FF] focus-visible:ring-[#A865FF]">
                            <p
                              className={cn(
                                field.value === "Select Role Name"
                                  ? "text-[#292929] opacity-20"
                                  : "text-[#292929]",
                              )}
                            >
                              {field.value.length === 0
                                ? "Select Role Name"
                                : field.value}
                            </p>
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Roles</SelectLabel>
                              <SelectItem value="Master">Master</SelectItem>
                              <SelectItem value="Client">Client</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            <div className="flex">
              <Button
                className="ml-auto h-[55px] w-[150px] text-[20px] font-medium not-italic"
                variant={"ghost"}
                type="button"
                onClick={hideDialog}
              >
                Cancel
              </Button>

              {dialogStatus === "view" && (
                <Button
                  className="ml-2 h-[55px] w-[150px] bg-[#8B3DFF] text-[20px] font-medium not-italic hover:bg-[#8B3DFF]"
                  type="submit"
                >
                  Edit
                </Button>
              )}

              {dialogStatus === "update" && (
                <Button
                  className="ml-2 h-[55px] w-[150px] bg-[#8B3DFF] text-[20px] font-medium not-italic hover:bg-[#8B3DFF]"
                  disabled={
                    mutateUserUpdate.isLoading ||
                    (userName === dialogState.userName &&
                      email === dialogState.email &&
                      address === dialogState.address &&
                      phone === dialogState.phone &&
                      gender === dialogState.gender)
                  }
                  type="submit"
                >
                  Update
                </Button>
              )}

              {dialogStatus === "insert" && (
                <Button
                  className="ml-2 h-[55px] w-[150px] bg-[#8B3DFF] text-[20px] font-medium not-italic hover:bg-[#8B3DFF]"
                  type="submit"
                  disabled={
                    mutateUserUpdate.isLoading ||
                    userName === "" ||
                    email === "" ||
                    address === "" ||
                    phone === "" ||
                    gender === "" ||
                    role === "" ||
                    password === "" ||
                    passwordConfirm === ""
                  }
                >
                  Save
                </Button>
              )}

              {dialogStatus === "delete" && (
                <Button
                  className="ml-2 h-[55px] w-[150px] bg-red-600 text-[20px] font-medium not-italic hover:bg-red-700"
                  disabled={mutateUserDelete.isLoading}
                  type="submit"
                >
                  Delete
                </Button>
              )}
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default DashboardDialog;
