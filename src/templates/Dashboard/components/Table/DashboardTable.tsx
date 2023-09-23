import { DataTable } from "./data-table";
import { Users, columns } from "./columns";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import MemoPlusIcon from "@/components/Icons/PlusBoldIcon";
import DashboardDialog from "../Dialog";
import { useDashboardStore } from "@/stores/dashboard";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
} from "@/components/ui/select";
import { SelectItem } from "@radix-ui/react-select";
import { UserApiResponse } from "@/api/user/api";
import { useQueryClient } from "react-query";
import MemoSearchIcon from "@/components/Icons/SearchIcon";
import APIs from "@/api";

const DashboardTable = (props: {
  userData: UserApiResponse[];
  setUserData: any;
}) => {
  const [tableData, setTableData] = useState<Users[]>([]);
  const [select, setSelect] = useState("All");
  const [inputValue, setInputValue] = useState("");
  const { userData } = props;

  const [
    dialogStatus,
    setDialogState,
    showInsertDialog,
    showDeleteDialog,
    showUpdateDialog,
    showViewDialog,
  ] = useDashboardStore((store) => [
    store.dialogStatus,
    store.setDialogState,
    store.showInsertDialog,
    store.showDeleteDialog,
    store.showUpdateDialog,
    store.showViewDialog,
  ]);

  const queryClient = useQueryClient();

  useEffect(() => {
    if (userData) {
      const tData: Users[] = userData.map((i, index) => {
        return {
          id: i.id,
          tableID: index,
          userID: i.id,
          userName: i.name,
          email: i.email,
          status: i.status,
          roleName: i.roles,
          address: i.address,
          gender: i.gender,
          phone: i.phone,
          action: {
            showViewDialog,
            showDeleteDialog,
            showUpdateDialog,
            setDialogState,
            queryClient,
          },
        };
      });
      setTableData(tData);
    }
  }, [
    showDeleteDialog,
    showViewDialog,
    showUpdateDialog,
    setDialogState,
    queryClient,
    userData,
  ]);

  return (
    <>
      <div className="flex h-[calc(100%-213px)] flex-col items-stretch overflow-y-scroll px-8 pb-8 pt-3">
        <div className="flex-1 rounded-md bg-white p-[30px] pb-28 shadow-[0px_2px_10px_2px_rgb(0,0,0,0.10)]">
          <div className="flex">
            <div className="flex flex-row rounded-md border-[1px] border-[#F6F7F9] focus-visible:outline-none">
              <Select
                value={select}
                onValueChange={(value) => {
                  setSelect(value);
                }}
                disabled={dialogStatus === "view"}
              >
                <SelectTrigger className="h-[60px] w-[105px] rounded-none border-[1px] border-r-[1px] border-none border-gray-100 px-3 py-2 text-start text-[20px] font-medium not-italic hover:border-[#A865FF] focus-visible:ring-[#A865FF]">
                  <p className={"text-[#292929]"}>{select ? select : "All"}</p>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="All">All</SelectItem>
                    <SelectItem value="Status">Status</SelectItem>
                    <SelectItem value="Role">Role</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Input
                value={inputValue}
                onChange={(ev) => {
                  setInputValue(ev.target.value);
                }}
                className="ml-3 h-[55px] w-[300px] rounded-none border-0 text-[20px] font-medium not-italic outline-none"
                placeholder="Search..."
              />
              <Button
                className="ml-2 flex h-[60px] w-[60px] items-center justify-center rounded-r-md bg-[#8B3DFF]"
                onClick={() => {
                  APIs.userApi
                    .lists({
                      type: select,
                      value: inputValue,
                    })
                    .then((data) => {
                      props.setUserData(data.data);
                    });
                }}
              >
                <MemoSearchIcon width={"26px"} height={"26px"} />
              </Button>
            </div>
            <Button
              className="ml-auto h-[55px] w-[220px] bg-[#8B3DFF] hover:bg-[#612ab3]"
              onClick={showInsertDialog}
            >
              <MemoPlusIcon />
              <p className="ml-3 text-[20px] font-medium not-italic text-white">
                Add New User
              </p>
            </Button>
          </div>
          <DataTable columns={columns} data={tableData} />
        </div>
      </div>
      {dialogStatus && <DashboardDialog />}
    </>
  );
};

export default DashboardTable;
