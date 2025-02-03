import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Story5() {
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
              <strong className="text-[40px] font-semibold">H</strong>e had come
              early to celebrate her birthday, knowing he’d be tied up on the
              actual day. She wasn’t expecting anything extravagant, just happy
              to have him there, sharing these small moments that felt larger
              than life when they were together. After a simple, joyful day
              spent exploring and celebrating, they found themselves back at the
              hotel where he was staying—a quiet, peaceful place with a
              beautiful view of a large water tank behind it.
            </p>
            <p className="mb-2">
              The evening air was cool, and the sky was beginning to turn shades
              of orange and pink as the sun slowly dipped toward the horizon.
              Behind the hotel, the grassy area around the tank was a peaceful
              little escape, perfect for watching the sunset. They walked out to
              the green patch, laughing about the day, and found a spot to sit
              down on the soft grass.
            </p>
            <p className="mb-2">
              But what really caught their attention were the cows. There were
              so many of them lazily grazing around the tank. The sight of the
              cows, just casually hanging out in the middle of their sunset
              view, added a funny, lighthearted twist to the moment. They
              couldn’t stop laughing.
            </p>
            <p className="mb-2">
              Look at them!" she said, giggling. "It's like they know we’re
              trying to enjoy the sunset and decided to join in." "They’re
              probably here to wish you a happy early birthday," he teased,
              nudging her lightly. "Or maybe they're planning a surprise party."
            </p>

            <p className="mb-2">
              She laughed at the idea, and they both sat there, making up silly
              stories about what the cows might be thinking or doing, the sun
              slowly sinking behind the tank, painting the sky with breathtaking
              colors.
            </p>
            <p className="mb-2">
              At one point, feeling completely relaxed and at peace, she lay her
              head on his leg, staring up at the sky as the colors shifted from
              gold to deep pink. He absentmindedly ran his fingers through her
              hair, and they fell into a comfortable silence, just enjoying the
              beauty of the moment together. The warmth of the evening, the soft
              sounds of the cows nearby, and the stillness of the water all
              combined to create the perfect serene atmosphere.
            </p>
            <p className="mb-2">
              After a while, as the sun began to dip lower, she sat up,
              stretching. That’s when she noticed one of the cows had wandered a
              little closer. “I want to touch one,” she said suddenly, grinning
              as she stood up. He chuckled. “Good luck. You’ll probably scare it
              off.”
            </p>
            <p className="mb-2">
              But she was determined. Slowly, she approached the cow, her hand
              outstretched. The cow seemed entirely unbothered, and to her
              delight, she managed to give it a quick pat on the side. She
              turned back to him, beaming. "I did it!"
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
              He laughed, standing up to meet her. But as she started walking
              toward him, he took a step back, raising his hands in mock
              defense. “Don’t touch me after you touched the cow!” Her eyes lit
              up with mischief. “Oh, really?” she said, her tone playful.Before
              he could react, she made a move to chase him, her hands
              outstretched toward him, still laughing. “Come here! Cow germs and
              all!” He laughed and took off running, zigzagging between the
              cows, trying to dodge her. “No way! Stay back!”
            </p>
            <p className="mb-2">
              She chased him, laughing harder with each step, and just when he
              thought he’d outrun her, he stopped in his tracks, a wicked grin
              spreading across his face as an idea struck him. Right in front of
              him was a small pile of cow dung, freshly left behind by one of
              their bovine friends.
            </p>
            <p className="mb-2">
              “Oh no,” she said, stopping a few feet away, her eyes widening as
              she saw the look on his face. Without hesitation, he grabbed a
              nearby tree branch, dipped it into the cow dung, and turned to
              her, holding it out like a sword. “You want to chase me? Fine, but
              I’m coming for you now!” She screamed, laughing and running in the
              opposite direction as fast as she could, her heart pounding with
              excitement and joy. He chased after her, waving the branch
              dramatically as if he were a knight in some absurd, cow-dung duel.
            </p>
            <p className="mb-2">
              “No! No! Put it down!” she cried between gasps of laughter,
              darting between cows as he followed close behind, waving the
              branch like a madman. “Not until you admit defeat!” he called,
              laughing so hard he could barely catch his breath.
            </p>
            <p className="mb-2">
              Finally, they both collapsed on the grass, out of breath and still
              giggling like kids. He tossed the branch away, far from them both,
              and they lay there in the fading light, their sides aching from
              laughter. “You’re impossible,” she said, still catching her
              breath. “Hey, you started it,” he replied, grinning. “But I think
              we both know who won this round.”
            </p>
            <p className="mb-2">
              She rolled her eyes but smiled, the moment too perfect to argue.
              They lay there as the sun finally dipped below the horizon, the
              sky turning dark, the stars just beginning to peek out above them.
              It wasn’t a grand, fancy birthday celebration—but it was theirs,
              filled with laughter, silliness, and the kind of joy that only
              comes from moments shared with someone special.
            </p>
            <p className="mb-2">
              Without missing a beat, they turned and ran back toward the
              supermarket, laughing the whole way. The employees gave them
              amused looks as they hurried back in to retrieve their forgotten
              bag. She grabbed it with a sheepish smile, and they thanked the
              staff before heading back out to the bus stand.
            </p>
            <p className="mb-2">
              As they stood up to leave, she gave him a playful shove. “Next
              time, I’m keeping my hands clean. No cow germs.”
            </p>
            <p className="mb-2">
              He laughed and threw an arm around her shoulders as they walked
              back to the hotel. “Deal. But that was the best cow-themed
              birthday celebration ever, admit it.”
            </p>
            <p className="mb-2">She grinned. “Okay, fine. You win.”</p>
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
