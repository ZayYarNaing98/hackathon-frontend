import * as z from "zod";
import MemoLoginCircleIcon from "@/components/Icons/LoginCircleIcon";
import MemoLoginUserIcon from "@/components/Icons/LoginUserIcon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTitle } from "@/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useNavigate } from "react-router-dom";
import { useQueryMutationAuth } from "@/api/hooks";
import { useTokenStore } from "@/stores/storage";

const formSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
});

export function ProfileForm() {
  const navigate = useNavigate();
  const { setToken } = useTokenStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const queryAuth = useQueryMutationAuth({
    onSuccess(data) {
      const { token } = data.data;
      setToken(token);
      navigate({
        pathname: "/dashboard",
      });
    },
    onError() {
      form.setError("email", {
        message: "Invalid Email",
      });
      form.setError("password", {
        message: "Invalid Password",
      });
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    queryAuth.mutate(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-[30px]">
        <FormLabel className="text-[25px] font-medium not-italic text-[#4B2C73]">
          Sign In
        </FormLabel>
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

        <Button
          className="h-[55px] w-full bg-[#8B3DFF] text-[20px] font-medium not-italic hover:bg-[#8B3DFF]"
          disabled={queryAuth.isLoading}
          type="submit"
        >
          Sign In
        </Button>
      </form>
    </Form>
  );
}

const DashboardLoginTemplate = () => {
  useTitle("Dashboard Login");
  return (
    <section className="relative h-screen min-h-screen overflow-hidden">
      <MemoLoginCircleIcon className="absolute bottom-0 left-0 top-0 z-10 scale-150" />
      <MemoLoginUserIcon className="absolute bottom-0 left-32 z-20" />
      <div className="absolute bottom-0 left-0 right-0 top-0 z-30 flex justify-end bg-white min-[1050px]:bg-transparent">
        <div className="flex h-screen w-full items-center justify-center px-5 min-[1050px]:w-1/2 xl:px-48">
          <div className="w-full bg-white p-3 ">
            <ProfileForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardLoginTemplate;
