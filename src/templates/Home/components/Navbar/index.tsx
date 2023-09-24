import { useClientStore } from "@/stores/client";
import MemoChrownIcon from "../icons/ChrownIcon";
import SubscriptionDialog from "@/templates/Subscriptions/components/Dialog";
import { useNavigate } from "react-router-dom";
import MemoPromoHub from "../icons/PromoHub";
import { appClientToken } from "@/stores/storage";
import Avvvatars from "avvvatars-react";

function HomeNavbar() {
  const [dialogStatus, setDialogStatus, authInfo] = useClientStore((store) => [
    store.dialogStatus,
    store.setDialogStatus,
    store.authInfo,
  ]);

  const navigate = useNavigate();
  const { getToken, removeToken } = appClientToken();
  const token = getToken();

  return (
    <>
      <div className="sticky left-0 right-0 top-0 z-50 flex h-[124px] items-center border-b-2 border-[#707070] bg-white px-[150px]">
        <MemoPromoHub
          width={"230px"}
          height={"36px"}
          className="cursor-pointer"
          onClick={() => {
            navigate({
              pathname: "/",
            });
          }}
        />
        <button
          onClick={() => {
            navigate({
              pathname: "/subscriptions",
            });
          }}
          className="ml-auto flex h-[50px] w-[243px] items-center justify-center gap-2 rounded-full bg-gradient-to-t from-[#8B3DFF] to-[#5E0FD3] text-[18px] font-normal not-italic text-white"
        >
          Subscription Plan <MemoChrownIcon width={"28px"} height={"20px"} />
        </button>
        {token ? (
          <button
            onClick={() => {
              removeToken();
              navigate({
                pathname: "/",
              });
            }}
            className="ml-5 h-[50px] w-[119px] rounded-full border-[1.5px] border-solid border-[#8B3DFF] text-[18px] text-[#8B3DFF]"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => {
              setDialogStatus("signIn");
            }}
            className="ml-5 h-[50px] w-[119px] rounded-full border-[1.5px] border-solid border-[#8B3DFF] text-[18px] text-[#8B3DFF]"
          >
            Login
          </button>
        )}

        {token && (
          <div
            className="ml-4 cursor-pointer"
            onClick={() => {
              navigate({
                pathname: "/business-profile",
              });
            }}
          >
            <Avvvatars
              value={authInfo?.name as string}
              style="character"
              size={60}
            />
          </div>
        )}
      </div>
      {dialogStatus && <SubscriptionDialog />}
    </>
  );
}

export default HomeNavbar;
