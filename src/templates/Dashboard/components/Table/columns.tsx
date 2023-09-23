import APIs from "@/api";
import MemoEditIcon from "@/components/Icons/EditIcon";
import MemoEyesIcon from "@/components/Icons/EyesIcon";
import MemoTrashIcon from "@/components/Icons/TrashIcon";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/components/ui/use-toast";
import { Actions } from "@/stores/dashboard";
import { ColumnDef } from "@tanstack/react-table";

export type Users = {
  id: number;
  tableID: number;
  userID: number;
  userName: string;
  email: string;
  roleName: string;
  status: number;
  phone: string;
  gender: string;
  action: {
    showViewDialog: () => void;
    showDeleteDialog: () => void;
    showUpdateDialog: () => void;
    setDialogState: Actions["setDialogState"];
    queryClient: any;
  };
};

export const columns: ColumnDef<Users, Users>[] = [
  {
    accessorKey: "userID",
    header() {
      return <div className="invisible min-w-[30px] text-left">User ID</div>;
    },
    cell(props) {
      return (
        <div className="invisible min-w-[30px] text-left">
          {props.row.getValue("userID")}
        </div>
      );
    },
  },
  {
    accessorKey: "tableID",
    header() {
      return (
        <div className="min-w-[100px] max-w-[100px] text-left">User ID</div>
      );
    },
    cell(props) {
      return (
        <div className="min-w-[100px] max-w-[100px] text-left">
          {props.row.getValue("tableID")}
        </div>
      );
    },
  },
  {
    accessorKey: "userName",
    header() {
      return (
        <div className="min-w-[250px] max-w-[250px] truncate text-left">
          User Name
        </div>
      );
    },
    cell(props) {
      return (
        <div className="min-w-[250px] max-w-[250px] truncate text-left">
          {props.row.getValue("userName")}
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header() {
      return (
        <div className="min-w-[250px] max-w-[250px] truncate text-left">
          Email
        </div>
      );
    },
    cell(props) {
      return (
        <div className="min-w-[250px] max-w-[250px] truncate text-left">
          {props.row.getValue("email")}
        </div>
      );
    },
  },
  {
    accessorKey: "address",
    header() {
      return (
        <div className="min-w-[250px] max-w-[250px] truncate text-left">
          Address
        </div>
      );
    },
    cell(props) {
      return (
        <div className="min-w-[250px] max-w-[250px] truncate text-left">
          {props.row.getValue("address")}
        </div>
      );
    },
  },
  {
    accessorKey: "phone",
    header() {
      return (
        <div className="min-w-[250px] max-w-[250px] truncate text-left">
          Phone
        </div>
      );
    },
    cell(props) {
      return (
        <div className="min-w-[250px] max-w-[250px] truncate text-left">
          {props.row.getValue("phone")}
        </div>
      );
    },
  },
  {
    accessorKey: "gender",
    header() {
      return (
        <div className="min-w-[250px] max-w-[250px] truncate text-left">
          Gender
        </div>
      );
    },
    cell(props) {
      return (
        <div className="min-w-[250px] max-w-[250px] truncate text-left">
          {props.row.getValue("gender")}
        </div>
      );
    },
  },
  {
    accessorKey: "roleName",
    header() {
      return (
        <div className="min-w-[130px] max-w-[130px] truncate text-left">
          Role Name
        </div>
      );
    },
    cell(props) {
      return (
        <div className="min-w-[130px] max-w-[130px] truncate text-left">
          {props.row.getValue("roleName")}
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header() {
      return (
        <div className="min-w-[250px] max-w-[250px] truncate text-left">
          Status
        </div>
      );
    },
    cell(props) {
      const { queryClient } = props.row.getValue<any>("action");
      return (
        <div className="flex min-w-[250px] max-w-[250px] items-center justify-start gap-2 truncate text-left">
          <span>Inactive</span>
          <div>
            <Switch
              className="data-[state=checked]:bg-[#1CCF99] data-[state=unchecked]:bg-[#FD346E]"
              checked={props.row.getValue("status")}
              onClick={() => {
                APIs.userApi
                  .changeStatus({
                    id: props.row.getValue("userID"),
                    status:
                      parseInt(props.row.getValue("status")) === 1 ? 0 : 1,
                  })
                  .then(() => {
                    queryClient.invalidateQueries({
                      queryKey: ["user-list"],
                    });
                    toast({
                      title: "Remainder",
                      description: "Updating status successful!",
                    });
                  });
              }}
            />
          </div>
          <span>Active</span>
        </div>
      );
    },
  },
  {
    accessorKey: "action",
    header() {
      return (
        <div className="min-w-[250px] max-w-[250px] truncate text-left">
          Action
        </div>
      );
    },
    cell(props) {
      const {
        showViewDialog,
        showDeleteDialog,
        showUpdateDialog,
        setDialogState,
      } = props.row.getValue<any>("action");

      const getRowData = () => {
        setDialogState({
          id: props.row.getValue("userID"),
          userName: props.row.getValue("userName"),
          email: props.row.getValue("email"),
          address: props.row.getValue("address"),
          phone: props.row.getValue("phone"),
          gender: props.row.getValue("gender"),
          role: props.row.getValue("roleName"),
        });
      };

      return (
        <div className="flex min-w-[250px] max-w-[250px] items-center justify-start gap-2 truncate text-left">
          <div className="flex gap-3">
            <Button
              className="h-[58px] w-[58px] bg-[#8B3DFF]"
              onClick={() => {
                getRowData();
                showViewDialog();
              }}
            >
              <MemoEyesIcon />
            </Button>

            <Button
              className="h-[58px] w-[58px] bg-[#1CCF99]"
              onClick={() => {
                getRowData();
                showUpdateDialog();
              }}
            >
              <MemoEditIcon />
            </Button>

            <Button
              className="h-[58px] w-[58px] bg-[#FD346E]"
              onClick={() => {
                getRowData();
                showDeleteDialog();
              }}
            >
              <MemoTrashIcon />
            </Button>
          </div>
        </div>
      );
    },
  },
];
