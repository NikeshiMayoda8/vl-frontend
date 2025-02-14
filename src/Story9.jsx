import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Story9() {
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
            <strong className="text-[40px] font-semibold">T</strong>here wasn’t
            just one story—there were many.
          </p>
          <p className="mb-2">
            Little moments that seemed simple but meant everything to her.
            Pieces of time she loved to hold close, memories that made her heart
            warm whenever she thought about them.
          </p>
          <p className="mb-2">
            Every time they parted ways, he would always give her a farewell
            kiss, soft and reassuring, as if to say, I'll see you soon. No
            matter how short or long the goodbye was, that kiss was always
            there, a silent promise between them.
          </p>
          <p className="mb-2">
            When they walked together, he made sure she was never on the
            roadside. Without a word, he would gently guide her to the safer
            side, taking the place closest to the road himself. It was a small
            act, but she noticed every time, and every time, it made her heart
            melt a little more.
          </p>

          <p className="mb-2">
            On bus rides, he always chose the seat where the sun shone the most,
            shielding her from the harsh rays. "I don’t mind," he’d say
            casually, as if it wasn’t a big deal. But she knew—it was his way of
            looking out for her.
          </p>
          <p className="mb-2">
            Whenever they shared a meal and there was an egg on the plate, he
            would always push it toward her. "I don’t really like eggs," he’d
            claim with a small shrug. But she knew better. She had seen him eat
            eggs before. He just wanted to give her the best part, even in the
            smallest of ways.
          </p>
          <p className="mb-2">
            And when she was sad, when tears welled in her eyes and the world
            felt too heavy—he was always there. Whether it was with silly jokes,
            warm hugs, or just quiet reassurance, he never let her face her
            sadness alone.
          </p>
          <p className="mb-2">
            They weren’t grand gestures, but they didn’t need to be. These were
            the moments she cherished the most. Because love wasn’t always in
            the big things—it was in the everyday kindness, in the silent care,
            in the small, thoughtful ways he showed her that she was always,
            always loved.
          </p>
          <p className="mb-2">And that was more than enough.</p>
        </div>
      </div>
    </div>
  );
}
