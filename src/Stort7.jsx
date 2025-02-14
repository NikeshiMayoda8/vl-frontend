import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Story7() {
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
              <strong className="text-[40px] font-semibold">T</strong>he days felt heavier without a job. Every morning, she woke up with a sense of dread, the uncertainty pressing down on her chest. Applications sent, rejections received, and the silence in between—it all made her feel stuck, lost in a cycle of stress and doubt. Dark thoughts crept in when she was alone, whispering fears she couldn't shake.
            </p>
            <p className="mb-2">But then—there was him.</p>
            <p className="mb-2">
            Somehow, he always knew when she needed him most. A text, a call, or sometimes just showing up at her door with no reason other than to be there. "Hey, I thought you could use a break," he'd say, pulling her into a conversation about the most random things—funny stories, weird facts, old memories that made her laugh when she least expected to.
            </p>
            <p className="mb-2">
            With him, the weight on her shoulders felt lighter.
            </p>

            <p className="mb-2">On the worst days, when the stress was too much and she felt like nothing would get better, he’d remind her.</p>
            <p className="mb-2">
            "You’re more than this moment," he’d say, his voice steady, certain. "A job doesn’t define you. You’re still you."
            </p>
            <p className="mb-2">
            And slowly, little by little, she started believing him.
            </p>
            <p className="mb-2">
            She still worried, still overthought, but with him beside her, the fear didn’t seem so paralyzing. He made her smile when she thought she’d forgotten how. He made her laugh when she was convinced there was nothing to laugh about.
            </p>
            <p className="mb-2">And maybe, just maybe, that was enough to keep going.</p>
          </div>
      </div>
    </div>
  );
}
