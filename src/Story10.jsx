import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Story10() {
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
            <strong className="text-[40px] font-semibold">I</strong>t was Green
            Fiesta day—a celebration filled with life, music, and the smell of
            delicious food wafting through the air. The campus was buzzing with
            excitement, food carts lining the pathways, and a grand musical
            festival set up in the center. Laughter and chatter blended with the
            melodies playing in the background, creating the perfect atmosphere.
          </p>
          <p className="mb-2">
            Hand in hand, they walked through the festival, soaking in every
            moment together. The day felt magical, like a scene from a movie
            where everything was just right.
          </p>
          <p className="mb-2">
            At one point, as they stood near the open field, she mentioned how
            much she loved firecrackers. The sparkle in her eyes when she spoke
            made him smile. And when the fireworks finally began, he did
            something unexpected—he gently covered her eyes.
          </p>
          <p className="mb-2">"Wait for it," he whispered.</p>

          <p className="mb-2">
            Then, just as the sky exploded into colors, he let go. She gasped in
            awe, watching the golden sparks scatter across the night, the
            reflection dancing in her wide eyes. He stood close, watching her
            more than the sky, because to him, her happiness was the best part
            of it all.
          </p>
          <p className="mb-2">
            Later, when the music shifted to a soft, romantic tune, he pulled
            her in for a dance. The world around them faded as he twirled her,
            her fingers brushing against his before he caught her again, holding
            her close.
          </p>
          <p className="mb-2">
            The night carried on like that—fireworks in the sky, music in the
            air, and the warmth of his arms around her every time they danced.
            It was one of those nights that felt endless, yet passed too
            quickly, leaving behind nothing but sweet memories and the feeling
            of love wrapped around them like a melody they never wanted to end.
          </p>
        </div>
      </div>
    </div>
  );
}
