import { DataTable } from "./data-table";
import { Payment, columns } from "./columns";

const payments: Payment[] = Array.from({ length: 5 }).map((_, index) => ({
  id: "jet" + index,
  userID: "U" + index,
  userName: "Zay Yar ing",
  email: "example@gmail.com",
  roleName: "user",
}));

function getData(): Payment[] {
  return payments;
}

const DashboardTable = () => {
  const data = getData();
  return (
    <div className="flex h-[calc(100%-213px)] flex-col items-stretch overflow-y-scroll px-8 pb-8 pt-3">
      <div className="flex-1 rounded-md bg-white p-[30px] pb-28 shadow-[0px_2px_10px_2px_rgb(0,0,0,0.10)]">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default DashboardTable;
