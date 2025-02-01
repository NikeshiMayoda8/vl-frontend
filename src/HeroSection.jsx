import React from 'react'
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
     const navigate = useNavigate();
    
      const handleClick = () => {
        navigate("/number-card");
      };

  return (
   
    <div className="min-h-screen w-full bg-cover bg-center flex items-center justify-center bg-no-repeat ">
    <img
      src="src/assets/images/hero4.jpg"
      className="w-full h-full object-cover absolute inset-0"
      alt="Hero background"
    />
    <div className="relative z-10 flex  items-center justify-center h-full">
      <button
        onClick={handleClick}
        class="cursor-pointer shadow-[6px_6px_12px_#df6869] p-3 rounded-md  active:shadow-[inset_4px_4px_12px_#df6869] text-[#f15771] font-bold w-[100px] "
      >
        <img
          src="src/assets/images/gift.png"
          className="animate-bounce p-2"
        />
      </button>
    </div>
  </div>
  )
}
