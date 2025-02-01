import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleClick = () => {
     navigate("/")
  };

  return (
    <div className="bg-[#fda1a2] min-h-screen flex items-center justify-center">
      <div className="w-[450px] h-[450px] shadow-[inset_4px_4px_12px_#df6869] flex items-center justify-center flex-col">
        <img
          src="src/assets/images/couple-removebg-preview.png"
          className="w-[250px] h-[250px] "
        />
        <div className="mt-4 ">
          <button onClick={handleClick} className="cursor-pointer rounded-md shadow-[6px_6px_12px_#df6869] active:shadow-[inset_4px_4px_12px_#df6869] py-1 px-3 font-semibold flex gap-2 items-center">
            Welcome
            <img
              src="src/assets/images/Premium_Vector___Paper_cute_heart-removebg-preview.png"
              className="w-[30px] h-[30px] "
            />
          </button>
        </div>
      </div>
    </div>
  );
}
