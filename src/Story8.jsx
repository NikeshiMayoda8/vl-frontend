import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Story8() {
  const navigate = useNavigate();
  
  const handelChange = () => {
    navigate("/number-card");
  };
  return (
    <div className="bg-[#fda1a2] min-h-screen w-full flex items-center justify-center">
      <div className="w-[1400px] h-full rounded-md">
        <div
          onClick={handelChange}
          className="flex items-center justify-center rounded-md cursor-pointer shadow-[6px_6px_12px_#df6869] w-[30px] h-[30px] active:shadow-[inset_4px_4px_12px_#df6869] mb-5"
        >
          <button className="cursor-pointer text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-6 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
              />
            </svg>
          </button>
        </div>
          <div className="shadow-[inset_4px_4px_12px_#df6869] p-3">
            <p className=" mt-[20px] mb-2">
              <strong className="text-[40px] font-semibold">I</strong>t was the first time he gave her flowers, and in that moment, she felt like she had won the world.
            </p>
            <p className="mb-2">The day had been long, office hours stretching endlessly, but she had managed to leave early. As she stepped outside, there he was—waiting for her, just as he always did. The sight of him instantly made her day better.</p>
            <p className="mb-2">
            She got into the car, expecting just another simple ride together, but then—he surprised her.
            </p>
            <p className="mb-2">
            Without a word, he reached to the side and handed her a bunch of bright yellow flowers. Her eyes widened, her heart skipping a beat as she took them into her hands. "You got these for me?" she asked, her voice barely above a whisper, as if speaking too loudly would break the magic of the moment.
            </p>

            <p className="mb-2">"Picked them from my garden," he admitted with a small smile. "Wanted them to be fresh for you."</p>
            <p className="mb-2">
            Her happiness overflowed. She couldn’t stop looking at the flowers, touching their petals as if to make sure they were real. Even through the car ride, she kept taking pictures, capturing every angle, trying to freeze this perfect moment in time.
            </p>
            <p className="mb-2">
            The next day at work, the joy still hadn’t faded. She showed the photos to everyone who would listen, her excitement bubbling over every time she told the story. "He even brought a water jar to keep them fresh!" she gushed, her heart swelling at the thought.
            </p>
            <p className="mb-2">
            And even now, whenever she thinks about that day, it still feels just as sweet. A simple gesture, yet it meant everything—because it came from him.
            </p>
          </div>
      </div>
    </div>
  );
}
