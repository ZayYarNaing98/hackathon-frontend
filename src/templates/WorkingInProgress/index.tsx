import imageUrl from "@/assets/working_in_progress.png";
import { useNavigate } from "react-router-dom";

function WorkingInProgressTemplate() {
  const navigate = useNavigate();
  return (
    <div className="grid h-screen place-items-center">
      <div className="flex flex-col items-center justify-center">
        <img src={imageUrl} width={"276px"} height={"276px"} />
        <p className="mb-5 text-[27px] font-medium">Oops! Work in Progress.</p>
        <button
          className="h-[55px] w-[225px] rounded-full bg-gradient-to-t from-[#8B3DFF] to-[#5E0FD3] text-center text-white"
          onClick={() => {
            navigate({
              pathname: "/",
            });
          }}
        >
          Back to home
        </button>
      </div>
    </div>
  );
}

export default WorkingInProgressTemplate;
