import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Story2() {
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
            <p className=" mt-[10px] mb-2">
              <strong className="text-[40px] font-semibold">I</strong>t was the
              day before Christmas, December 24th. The streets were buzzing with
              holiday lights, festive decorations, and the joyful hum of people
              preparing for the holiday. But instead of joining the crowds, they
              had chosen to escape to the sea—her favorite place.
            </p>
            <p className="mb-2">
              The beach was quiet, the soft winter breeze carrying the scent of
              salt and the sound of distant waves. They walked hand in hand,
              their footsteps the only sound on the sand as they made their way
              toward the shore. She had always loved the ocean, and he knew that
              no matter the season, the sea made her feel free.
            </p>
            <p className="mb-2">
              As they reached the beach, her excitement burst free like it
              always did when she saw the water. She let go of his hand and ran
              toward the shore, her laughter filling the air. She jumped and
              skipped along the edge of the water, her shoes sinking slightly
              into the wet sand as the waves gently kissed her feet.
            </p>
            <p className="mb-2">
              He watched her from a distance, smiling, and found a small fishing
              boat beached on the sand. He sat on it, his legs dangling over the
              side, the wooden planks creaking under his weight. Beside him, an
              old fisherman sat quietly, his eyes squinting out toward the
              horizon. The man gave a nod of greeting, and soon they struck up a
              light conversation, mostly about the sea, the tides, and the
              stories fishermen tell.
            </p>
            
            <p className=" mb-2">
              But his attention kept drifting back to her. She was like a child
              again, hopping around the shoreline, her laughter echoing across
              the beach. Suddenly, her foot slipped, and a playful wave caught
              her off guard, soaking her shoes and sending a spray of water up
              her legs.
            </p>
            <p className="mb-2">
              She squealed in surprise, hopping back onto the dry sand, her
              shoes dripping wet. The fisherman chuckled quietly, but it was the
              boy who couldn’t stop laughing. He laughed so hard that his
              shoulders shook, and he could barely catch his breath. She shot
              him a playful glare, her lips pursed, her eyebrows raised in mock
              annoyance
            </p>
            <p className="mb-2">
              "Stop laughing!" she scolded, trying to suppress a grin.
            </p>
            <p className="mb-2">
              But he couldn't. "I told you the sea had its own plans!" he said
              between laughs.
            </p>
            <p className="mb-2">
              “In response, she kicked off her wet shoes and marched over to
              him, planting her hands on her hips in mock frustration. "You
              think it’s funny, huh?"”
            </p>
            <p className="mb-2">
              Still grinning, he stood up and walked over to her. "Yeah, I do."
              But seeing her shivering slightly from the cold water, his teasing
              tone softened. Without saying a word, he sat down on the sand
              beside her, pulling off his socks. “Here,” he said, offering them
              to her.
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
            
            <p className="mb-2">
              She blinked in surprise. "What? No, you need them. It's cold."
            </p>
            <p className="mb-2">
              He shrugged, slipping his feet into his shoes without the socks.
              “I’ll be fine. I don’t want you catching a cold.”
            </p>
            <p className="mb-2">
              Reluctantly, she took the socks, their warmth already soothing her
              cold feet. She pulled them on, and they were so big on her, it
              made them both laugh. The moment felt light again. Together, they
              walked to the shoreline, and this time, with her shoes off, they
              ran along the water, splashing and playing like children, the cold
              winter air forgotten in the joy of the moment.
            </p>
            <p className="mb-2">
              After a while, the sun began to dip lower in the sky, casting a
              golden glow across the horizon. They returned to the boarding
              place, where their things were kept, and she felt guilty looking
              at his socks, now wet and sandy.
            </p>
            <p className="mb-2">
              "I’ll wash these for you,” she promised, determined to return them
              better than she had found them. He smiled but didn’t argue.
            </p>
            <hr />
            <p className="mb-2">
              That evening, back at home, she made good on her promise. She
              washed his socks again and again, scrubbing every trace of sand
              and dirt from them. But she wasn’t done there. She found a bottle
              of sweet-smelling liquid, something that reminded her of warm,
              clean laundry, and added it to the wash. She rinsed them until
              they were spotless and hung them carefully to dry. The next
              morning, they smelled as fresh as a garden in bloom.
            </p>
            <p className="mb-2">
              When they met again, she handed them back to him, perfectly folded
              and smelling faintly of flowers.
            </p>
            <p className="mb-2">
              He raised an eyebrow as he took them. "Did you wash these until
              they almost broke?" he teased, feeling how soft and clean they
              were.
            </p>
            <p className="mb-2">
              She laughed. "I just wanted to make sure they smelled nice. Don’t
              you like it?"
            </p>
            <p className="mb-2">
              He held them up to his nose, sniffing dramatically. “They smell
              amazing. But you didn’t have to go overboard!”
            </p>
            <p className="mb-2">
              She blushed, playfully pushing his arm. “I couldn’t give them back
              dirty.”
            </p>
            <p className="mb-2">
              He grinned and, with a twinkle in his eyes, said, "You know, if
              they smell this nice, I might let you borrow them again next
              time." He laughed, and so did she, their shared joy bubbling up
              between them like the waves they had played in.
            </p>
            <p className="mb-2">
              As they stood there, the sounds of Christmas filling the air, they
              realized that it wasn’t the perfect gifts or grand gestures that
              made this time special—it was the little moments, like socks
              washed with care, and laughter shared on a beach, that mattered
              most.
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
