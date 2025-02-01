import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Story1() {
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
              <strong className="text-[40px] font-semibold">T</strong>he
              afternoon had been perfect, almost too perfect. They had been
              sitting in a quaint seaside restaurant, the kind where the waves
              hum softly in the distance, and the salty air mixes with the aroma
              of fresh seafood. The sun was still peeking through a few clouds,
              and the couple had just finished a delicious lunch. He had ordered
              her favorite, and they had laughed over dessert, their plates
              still filled with crumbs of cake they had shared.
            </p>
            <p className="mb-2">
              As they were about to leave, he took her hand and said, "Let's go
              to the sea." His eyes sparkled with excitement. He knew how much
              she loved the ocean, how the sound of the waves always calmed her,
              how she would lose herself watching the endless horizon.
            </p>
            <p className="mb-2">
              But she hesitated. Her eyes shifted to the darkening clouds above.
              "It’s going to rain. I told you we’ll get caught if we go now,"
              she warned, her voice playful but cautious.
            </p>
            <p className="mb-2">
              He just smiled, brushing aside her concern. "A little rain never
              hurt anyone," he said, gently pulling her toward the beach. She
              rolled her eyes but couldn’t help smiling at his stubbornness.
              Together, they left the cozy restaurant and headed toward the
              shore.
            </p>
            <hr />
            <p className="mt-2 mb-2">
              Now, standing on the beach, they watched the waves crash against
              the rocks. Behind them, the stormy sea swirled with energy, dark
              and choppy, as if mirroring the sky above. In front of them, the
              railroad tracks stretched into the distance. A train was speeding
              by, its rhythmic clatter echoing in the wind.
            </p>
            <p className="mb-2">
              And then, it came. The first heavy drops of rain, followed by a
              gust of wind that tugged at her dress, lifting the edges of her
              frock. She tugged his arm and raised the umbrella. "I told you!"
              she exclaimed, her voice barely audible over the sound of the rain
              and the wind. She laughed, shaking her head, water already
              dripping from the tips of her hair.
            </p>
            <p className="mb-2">
              He turned to her, still smiling that boyish grin she loved so
              much. "You did," he admitted, but there was no regret in his
              voice. Only happiness. He was glad to be there, in the middle of
              the storm, with her.
            </p>
            <p className="mb-2">
              Suddenly, the rain became heavier, a downpour now, soaking their
              shoes and splattering across their clothes. The wind picked up,
              swirling around them, and it became impossible to stand still.
              They looked at each other, both smiling now, sharing the moment,
              before she grabbed his hand.
            </p>
            <p className="mb-2">“Come on! Let’s go!”</p>
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
            <p className="mb-2">
              They ran, the umbrella barely shielding them from the rain, their
              feet splashing in puddles that had formed on the street. Her frock
              danced wildly in the wind, and his jacket clung to his back. The
              train had long disappeared down the tracks, but the sound of its
              departure still echoed in the distance as they hurried down the
              empty road.
            </p>
            <p className="mb-2">
              Up ahead, the warm glow of a small coffee shop caught her eye. She
              pointed toward it, laughing. "There!"
            </p>
            <p className="mb-2">
              They burst through the door of the little café, breathless and
              soaked, the bell above the door ringing as they entered. The
              sudden warmth hit them, and they stood there for a moment,
              dripping water onto the floor, laughing at how drenched they were.
            </p>
            <p className="mb-2">
              The café was small and cozy, with fogged-up windows and the smell
              of freshly brewed coffee. A few patrons glanced at them, smiling
              knowingly. They found a corner table, and as they sat down, he
              reached across and wiped a raindrop off her cheek.
            </p>
            <p className="mb-2">
              “I guess you were right,” he said softly, still smiling, as a
              waitress approached them with a menu.
            </p>
            <p className="mb-2">
              “I always am,” she teased, shivering slightly but feeling the
              warmth return to her body. She glanced out the window, watching
              the rain pour down harder, knowing that no matter what the weather
              brought, this moment—this day—was perfect.
            </p>
            <p className="mb-2">
              And as they sat there, sipping hot coffee, listening to the rain
              hit the windows, they knew they would laugh about this day for
              years to come. The day they were caught in the rain but didn’t
              care, because they were together, and nothing else mattered.
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
