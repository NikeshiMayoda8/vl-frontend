import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Story6() {
  const navigate = useNavigate();
  const [ishide, setIshide] = useState(false);

  const handelClick = () => {
    setIshide(true);
  };
  const handelShow = () => {
    setIshide(false);
  };

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
        {!ishide ? (
          <div className="shadow-[inset_4px_4px_12px_#df6869] p-3">
            <p className=" mt-[20px] mb-2">
              <strong className="text-[40px] font-semibold">S</strong>he had
              been dreading this day for weeks. The thought of surgery weighed
              heavily on her, filling her with anxiety that refused to let go.
              No matter how much she tried to distract herself, the worry was
              always there, lingering.
            </p>
            <p className="mb-2">But then—he came.</p>
            <p className="mb-2">
              She hadn't expected him, hadn't even thought he could make it. Yet
              there he was, standing in the doorway with that familiar, warm
              smile. Surprise flickered into relief as he walked in, closing the
              distance between them. "You didn’t think I’d let you go through
              this alone, did you?" he said softly.
            </p>
            <p className="mb-2">
              He stayed with her, sitting close, his voice a steady presence
              against the chaos in her mind. He talked—about anything,
              everything—making her smile, making her forget, even if just for a
              little while. The weight in her chest loosened, just a bit, just
              enough.
            </p>

            <p className="mb-2">Then the doctor came. It was time.</p>
            <p className="mb-2">
              Her heart pounded as she was led toward the operating room, the
              sterile walls and bright lights making her anxiety spike all over
              again. Everything felt too real now. She waited, nerves buzzing
              under her skin, hands gripping the fabric of her hospital gown.
            </p>
            <p className="mb-2">
              Then another voice. The doctor again. "You need to use the
              bathroom before we begin," they said.
            </p>
            <p className="mb-2">
              She nodded, stepping into the small restroom. And when she came
              out, she wasn’t alone. Her mom and boyfriend were waiting there,
              their familiar faces grounding her. They talked—softly,
              gently—about nothing important, but somehow, it made all the
              difference. The fear didn’t vanish, but it didn’t feel so
              overwhelming anymore.
            </p>
            <div className="flex justify-end">
              <button
                onClick={handelClick}
                className=" rounded-md cursor-pointer shadow-[6px_6px_12px_#df6869] p-2 active:shadow-[inset_4px_4px_12px_#df6869]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>{" "}
            </div>
          </div>
        ) : (
          <div className="shadow-[inset_4px_4px_12px_#df6869] p-3">
            <p className="mb-2">The surgery came and went.</p>
            <p className="mb-2">
              When she woke, everything was hazy, her body heavy with
              exhaustion. But one thing was clear—he was there. Sitting beside
              her, watching over her, his hand resting lightly on hers. As she
              stirred, his fingers curled around hers, and he gave her a small,
              reassuring squeeze.
            </p>
            <p className="mb-2">"You’re okay," he murmured. "It’s over."</p>
            <p className="mb-2">
              She blinked slowly, the last traces of fear fading. He stayed,
              whispering words meant to calm, his presence the only thing she
              needed.
            </p>
            <p className="mb-2">
              And then, just as sleep started pulling her under again, she heard
              his voice, soft and certain.
            </p>
            <p className="mb-2">"I love you."</p>
            <p className="mb-2">A small, tired smile touched her lips.</p>
            <p className="mb-2">
              As they stood up to leave, she gave him a playful shove. “Next
              time, I’m keeping my hands clean. No cow germs.”
            </p>
            <p className="mb-2">
              "Love you too," she whispered back, just before drifting off.
            </p>
            <button
              onClick={handelShow}
              className="rounded-md cursor-pointer shadow-[6px_6px_12px_#df6869] p-2 active:shadow-[inset_4px_4px_12px_#df6869]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
