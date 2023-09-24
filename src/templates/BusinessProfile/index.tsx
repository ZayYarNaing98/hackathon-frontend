import HomeNavbar from "../Home/components/Navbar";
import MemoProfileUser from "./components/icons/ProfileUser";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import MemoChrownThree from "../Subscriptions/components/icons/ChrownThree";
import MemoPostingIcon from "./components/icons/PostingIcon";
import SubscriptionCard from "../Subscriptions/components/SubscriptionCard";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import MemoWarningIcon from "./components/icons/WarningIcon";
import { Button } from "@/components/ui/button";
import Protected from "../Home/Protected";
import {
  useQueryBusinessProfile,
  useQueryMutationBusinessProfile,
} from "@/api/profile/hooks";
import { useClientStore } from "@/stores/client";
import { useQueryUserBy } from "@/api/user/hooks";
import Avvvatars from "avvvatars-react";
import { useQueryCategory } from "@/api/hooks";
import { useQueryClient } from "react-query";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 letter long.",
  }),
  description: z.string().min(5, {
    message: "Description must be at least 10 words long.",
  }),
  category: z.string().min(3, {
    message: "Please select service type",
  }),
  phone: z.string().min(5, {
    message: "Phone number must be 12 character long.",
  }),
  email: z.string().email({
    message: "Invalid email",
  }),
  facebook: z.string().optional(),
  address: z.string().min(2, {
    message: "Address must be 10 character long",
  }),
});

const BusinessProfile = () => {
  const [tab, setTab] = useState<1 | 2 | 3>(1);
  const [category, setCategory] = useState<{ id: number; name: string }[]>([]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      phone: "",
      address: "",
      email: "",
      facebook: "",
      category: "",
    },
  });
  const queryClient = useQueryClient();
  const authInfo = useClientStore((store) => store.authInfo);
  const queryMutationBusinessProfile = useQueryMutationBusinessProfile();
  const queryUser = useQueryUserBy(authInfo.id, true);
  const queryBusinessProfile = useQueryBusinessProfile(authInfo.id);
  const queryCategory = useQueryCategory(true);

  useEffect(() => {
    if (queryCategory.isSuccess) {
      setCategory(queryCategory.data?.data.data);
    }
  }, [queryCategory.data?.data.data, queryCategory.isSuccess]);

  useEffect(() => {
    if (
      queryBusinessProfile.isSuccess &&
      queryBusinessProfile.data.data.length > 0 &&
      queryCategory.isSuccess
    ) {
      const objQB = queryBusinessProfile.data.data[0];
      form.setValue("name", objQB.name);
      form.setValue("address", objQB.address);
      form.setValue("description", objQB.description);
      form.setValue("email", objQB.email);
      form.setValue("facebook", objQB.facebook);
      form.setValue("phone", objQB.phone);
      setTimeout(() => {
        form.setValue(
          "category",
          queryCategory.data?.data.data.find((i) => i.id === objQB.category_id)
            ?.name ?? "",
        );
      }, 150);
    }
  }, [
    form,
    queryBusinessProfile.data?.data,
    queryBusinessProfile.isSuccess,
    queryCategory.data?.data.data,
    queryCategory.isSuccess,
  ]);

  if (
    queryBusinessProfile.isLoading &&
    queryUser.isLoading &&
    queryCategory.isLoading
  )
    return null;

  return (
    <Protected>
      <div className="h-screen overflow-y-auto bg-[#F0F0F0] pb-52">
        <HomeNavbar />
        <div className="mt-10 flex gap-2 rounded-md px-[150px]">
          <div className=" w-[364px] bg-white px-[27px] pb-[30px] pt-[63px] shadow-md ">
            <div className="flex flex-col items-center justify-center">
              <div className="mb-[43px] flex h-[119px] w-[119px] items-center justify-center overflow-hidden rounded-full">
                {queryUser.data?.data[0].image ? (
                  <img
                    src={queryUser.data?.data[0].image}
                    alt=""
                    className="bg-cover"
                  />
                ) : (
                  <Avvvatars
                    size={150}
                    style="character"
                    value={queryUser.data?.data[0].name as string}
                  />
                )}
              </div>
              <h1 className="font-libre text-[30px]">
                {queryUser.data?.data[0].name}
              </h1>
              <div className="mb-5 rounded-full bg-[#8B3DFF] bg-opacity-20 px-3 py-1 text-[18px] text-[#8B3DFF]">
                Fee User
              </div>
            </div>
            <div>
              <button
                onClick={() => {
                  setTab(1);
                }}
                className={twMerge([
                  "my-3 flex h-[60px] w-[300px] items-center justify-start gap-2 rounded-md pl-9 text-[20px] font-medium text-black",
                  tab === 1 && "broder-[#8B3DFF] border-l-8 border-solid",
                ])}
              >
                <MemoProfileUser
                  fillColor="#8B3DFF"
                  width={"20px"}
                  height={"20px"}
                />
                Business Profile
              </button>
              <button
                onClick={() => {
                  setTab(2);
                }}
                className={twMerge([
                  "my-3 flex h-[60px] w-[300px] items-center justify-start gap-2 rounded-md pl-9 text-[20px] font-medium text-black",
                  tab === 2 && "broder-[#8B3DFF] border-l-8 border-solid",
                ])}
              >
                <MemoChrownThree
                  width={"26px"}
                  height={"21px"}
                  colorFill="#8B3DFF"
                />
                Subscription Plans
              </button>
              <button
                onClick={() => {
                  setTab(3);
                }}
                className={twMerge([
                  "my-3 flex h-[60px] w-[300px] items-center justify-start gap-2 rounded-md pl-9 text-[20px] font-medium text-black",
                  tab === 3 && "broder-[#8B3DFF] border-l-8 border-solid",
                ])}
              >
                <MemoPostingIcon
                  width={"20px"}
                  height={"20px"}
                  fillColor="#8B3DFF"
                />
                Posting
              </button>
            </div>
          </div>
          {tab === 3 && (
            <div className=" flex-1 flex-col bg-white px-[56px] pb-[30px] pt-[63px] shadow-md">
              <div className="flex h-[80px] items-center justify-center gap-2 rounded-md bg-[#FD346E] bg-opacity-5 text-center text-[22px] text-[#FD346E]">
                <MemoWarningIcon width={"27px"} height={"27px"} /> You must be
                subscribe at least one plan and fill business profile data.
              </div>
              <h1 className="font-libre mt-5 pb-[45px] text-[40px]">Posting</h1>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(() => {})}
                  className="space-y-[30px]"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[20px] font-medium not-italic text-[#292929]">
                          Title
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter name"
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
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[20px] font-medium not-italic text-[#292929]">
                          Description
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter description"
                            {...field}
                            className="h-[60px] text-[20px] font-medium not-italic hover:border-[#A865FF] focus-visible:ring-[#A865FF]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex justify-end">
                    <Button className="ml-auto h-[60px] w-[225px] rounded-full bg-gradient-to-t from-[#8B3DFF] to-[#5E0FD3] text-white">
                      Save
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          )}
          {tab === 2 && (
            <div className=" flex-1 flex-col bg-white px-[56px] pb-[30px] pt-[63px] shadow-md">
              <h1 className="font-libre pb-[45px] text-[40px]">
                My Subscription Plans
              </h1>
              <div className="flex flex-wrap gap-5 py-3">
                <SubscriptionCard
                  onClick={() => {}}
                  title="Basic Plan"
                  level={1}
                  price={10000}
                  list={["2 posts (No Time Limit)", "Low Visiability"]}
                  ctaLabel="Subscribe Now"
                />
                <SubscriptionCard
                  onClick={() => {}}
                  title="Standard Plan"
                  level={2}
                  price={20000}
                  list={["4 posts (No Time Limit)", "Low Visiability"]}
                  ctaLabel="Subscribe Now"
                />
                <SubscriptionCard
                  onClick={() => {}}
                  title="Premium Plan"
                  level={3}
                  price={30000}
                  list={["6 posts (No Time Limit)", "Low Visiability"]}
                  ctaLabel="Subscribe Now"
                />
              </div>
            </div>
          )}
          {tab === 1 && (
            <div className=" flex-1 flex-col bg-white px-[56px] pb-[30px] pt-[63px] shadow-md">
              <h1 className="font-libre pb-[45px] text-[40px]">
                Business Profile
              </h1>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit((value) => {
                    queryMutationBusinessProfile.mutate({
                      address: value.address,
                      description: value.description,
                      email: value.email,
                      facebook: value.facebook as string,
                      image: null,
                      category_id:
                        category.find((i) => i.name === value.category)?.id ??
                        0,
                      name: value.name,
                      phone: value.phone,
                      user_id: authInfo.id,
                      id: 0,
                    });
                    queryClient.invalidateQueries(["business-profile-by"]);
                  })}
                  className="space-y-[30px]"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[20px] font-medium not-italic text-[#292929]">
                          Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter name"
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
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[20px] font-medium not-italic text-[#292929]">
                          Description
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter description"
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
                    name="category"
                    render={({ field }) => (
                      <FormItem className=" flex flex-col">
                        <FormLabel className="text-[20px] font-medium not-italic text-[#292929]">
                          Category
                        </FormLabel>
                        <FormControl>
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                            // disabled={dialogStatus === "view"}
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
                                  ? "Select Category"
                                  : field.value}
                              </p>
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Category</SelectLabel>
                                {category.map((i, index) => {
                                  return (
                                    <SelectItem value={i.name} key={index}>
                                      {i.name}
                                    </SelectItem>
                                  );
                                })}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
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
                            placeholder="Enter description"
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
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[20px] font-medium not-italic text-[#292929]">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter Email"
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
                    name="facebook"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[20px] font-medium not-italic text-[#292929]">
                          Facebook
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter Email"
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
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[20px] font-medium not-italic text-[#292929]">
                          Address
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter Address"
                            {...field}
                            className="h-[60px] text-[20px] font-medium not-italic hover:border-[#A865FF] focus-visible:ring-[#A865FF]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[20px] font-medium not-italic text-[#292929]">
                          Upload Profile Banner Image
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            placeholder="Enter Address"
                            {...field}
                            className="h-[60px] text-[20px] font-medium not-italic hover:border-[#A865FF] focus-visible:ring-[#A865FF]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}
                  {queryBusinessProfile.data?.data.length === 0 && (
                    <div className="flex justify-end">
                      <Button
                        className="ml-auto h-[60px] w-[225px] rounded-full bg-gradient-to-t from-[#8B3DFF] to-[#5E0FD3] text-white"
                        disabled={queryMutationBusinessProfile.isLoading}
                      >
                        Save
                      </Button>
                    </div>
                  )}
                </form>
              </Form>
            </div>
          )}
        </div>
      </div>
    </Protected>
  );
};

export default BusinessProfile;
