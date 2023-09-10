import MemoNotFound404Icon from "@/components/Icons/NotFound40";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound404Template = () => {
  const navigate = useNavigate();
  return (
    <section className="relative flex h-screen min-h-screen flex-col items-center justify-center overflow-hidden">
      <MemoNotFound404Icon />
      <p className="mt-16 text-[27px] font-medium not-italic text-[#292929]">
        Oops! That page can’t be found.
      </p>
      <Button
        className="mt-[37px] h-[55px] w-[270px] bg-[#8B3DFF] text-[20px] font-medium not-italic hover:bg-[#6e2fcb]"
        onClick={() => {
          navigate({
            pathname: "/dashboard",
          });
        }}
      >
        Back to Dashboard
      </Button>
    </section>
  );
};

export default NotFound404Template;
