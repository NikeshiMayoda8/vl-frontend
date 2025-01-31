import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function NumberCard() {
    const navigate = useNavigate();

  const giftCard = [
    { img: "src/assets/images/66.jpg", text:"1" },
    { img: "src/assets/images/66.jpg", text:"2"  },
    { img: "src/assets/images/66.jpg", text:"3" },
    { img: "src/assets/images/66.jpg", text:"4" },
    { img: "src/assets/images/66.jpg", text:"5" },
    { img: "src/assets/images/66.jpg", text:"6" },
    { img: "src/assets/images/66.jpg", text:"7" },
    { img: "src/assets/images/66.jpg", text:"8" },
    { img: "src/assets/images/66.jpg", text:"9" },
    { img: "src/assets/images/66.jpg", text:"10" }

];

    const handleClick = (text) =>{
        navigate(`/story${text}`)
    }

  return (
    <div className="bg-[#fda1a2] min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {giftCard.map((gift, index) => (
          <div
            key={index}
            className="w-[200px] h-[250px] shadow-[inset_2px_5px_10px_#f06a80] rounded-lg"
          >
            <div>
              <img
                src={gift.img}
                className="object-cover h-full w-full rounded-t-lg "
                alt={`Gift ${gift.text}`}
              />
              <div className="flex items-center justify-center mt-5">
              <button onClick={()=>handleClick(gift.text)} className="rounded-md shadow-[6px_6px_12px_#df6869] active:shadow-[inset_4px_4px_12px_#df6869] px-4 py-2 text-white font-semibold">{gift.text}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
