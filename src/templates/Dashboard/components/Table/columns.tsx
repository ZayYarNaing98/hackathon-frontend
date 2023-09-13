import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  userID: string;
  userName: string;
  email: string;
  roleName: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "userID",
    header: "User ID",
  },
  {
    accessorKey: "userName",
    header: "User Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "roleName",
    header: "Role Name",
  },
];

// header() {
//   return <div className="min-w-[300px]">User Name</div>;
// },
// cell(props) {
//   return (
//     <div className="min-w-[300px]">{props.row.getValue("userName")}</div>
//   );
// },
