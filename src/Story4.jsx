import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Story4() {
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
              <strong className="text-[40px] font-semibold">I</strong>t was her
              first day at work, and the early morning air in Rajagiriya was
              crisp and fresh, filled with the quiet hum of a city waking up. He
              had made sure to arrive early, taking the train into town just as
              the sun was beginning to rise. From the station, he caught an Uber
              to her boarding place, eager to be there for her on this important
              day.
            </p>
            <p className="mb-2">
              When he arrived, she was already waiting outside, dressed neatly
              and looking both excited and nervous. He greeted her with a warm
              smile, and instantly, some of the tension in her shoulders seemed
              to ease. Together, they walked towards the bus stand, the sky
              still soft with morning light. The streets were beginning to fill
              with people, and the familiar sounds of traffic and daily life
              surrounded them.
            </p>
            <p className="mb-2">
              They stood at the bus stand for a few minutes, chatting lightly
              about her new job. He could see the flicker of anxiety in her
              eyes, so he kept the conversation playful, telling her a silly
              story about his own first day at work. She laughed, and it made
              him happy to know he was easing her nerves, even if just a little.
            </p>
            <p className="mb-2">
              When the bus came, they got on together. The ride was filled with
              the usual crowd, but it felt comforting knowing he was there
              beside her. She glanced out the window, watching the city rush by,
              and as the bus moved closer to her office, her heart began to race
              again.
            </p>

            <p className="mb-2">
              They got off a few stops later, and as they stepped onto the busy
              street, he continued walking with her, all the way to her office
              building. The road was bustling with people hurrying to work, but
              for them, it felt like their own little path. He didn’t leave her
              until they reached the office gate.
            </p>
            <p className="mb-2">
              He paused, turning to her with a grin. “You’ll do great,” he said,
              his voice full of quiet confidence. She smiled, taking a deep breath. “Thanks for coming with me.”
            </p>
            <p className="mb-2">
              With a quick wave, he turned and headed off, leaving her to begin
              her first day. She stood there for a moment, watching him
              disappear into the crowd before turning to face the large office
              building in front of her. It was a big moment, but knowing he’d
              been there made it feel a little less intimidating.
            </p>
            <hr />
            <p className="mb-2">
              The day was long, filled with introductions, new faces, and
              learning the ropes of her job. But throughout it all, she kept
              thinking about the morning—the way he had walked her to the gate,
              the calmness in his voice. It made her smile, even during the
              busiest moments.
            </p>
            <p className="mb-2">
              When her workday finally ended, she stepped out of the building
              and saw him waiting just a short distance away. Her heart lifted
              instantly, the stress of the day melting away as she walked
              towards him.
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
              “Hey,” he greeted, a smile spreading across his face. “How’d it
              go?” She sighed, a mix of exhaustion and relief. “I survived,” she
              said with a grin. “Good enough for the first day,” he chuckled.
              “Come on, let’s get something to eat.”
            </p>
            <p className="mb-2">
              Together, they made their way to a nearby supermarket. The aisles
              were quiet in the evening, and they wandered through, picking up
              snacks and something for dinner. He insisted on buying her dinner,
              despite her protests. "It's your first day," he said, grabbing a
              ready-made meal. "Let me treat you."
            </p>
            <p className="mb-2">
              They left the supermarket with a small bag of groceries, talking
              about her day as they walked back toward the bus stand. The
              evening air was cool, and the streets were beginning to quiet down
              as the rush hour passed. They reached the bus stop and stood
              together, waiting for their bus to arrive.
            </p>
            <p className="mb-2">
              Suddenly, as they were standing there, she froze. Her eyes widened
              in realization, and she turned to him with a look of panic. “Oh
              no… I think we forgot our dinner at Cargills!”
            </p>
            <p className="mb-2">
              He blinked, and then they both burst out laughing. “Seriously?” he
              asked, shaking his head. “We just bought it!”
            </p>
            <p className="mb-2">
              Without missing a beat, they turned and ran back toward the
              supermarket, laughing the whole way. The employees gave them
              amused looks as they hurried back in to retrieve their forgotten
              bag. She grabbed it with a sheepish smile, and they thanked the
              staff before heading back out to the bus stand.
            </p>
            <p className="mb-2">
              They finally caught their bus, the two of them laughing
              breathlessly as they sat down. “We’re never going to live that one
              down,” she said, shaking her head in disbelief. “Hey, at least we
              didn’t forget it for good,” he teased, nudging her with his
              shoulder. “Besides, it’s a memorable way to end your first day.”
            </p>
            <p className="mb-2">
              When they got off the bus, they walked the familiar path back to
              her boarding place, their steps slow as they enjoyed the quiet
              evening. The day had been long, but now, as they neared her place,
              everything felt calm again. She was grateful he had been with her,
              supporting her from the start to the end of the day.
            </p>
            <p className="mb-2">
              As they reached the gate to her boarding place, he turned to her,
              his smile softening. “Goodnight,” he said, his tone gentle. “I’ll
              see you soon.” She smiled back, feeling a warmth in her chest.
              “Goodnight. And thanks for everything.”
            </p>
            <p className="mb-2">
              With a quick wave, he headed off into the night, leaving her
              standing there, watching as he disappeared down the street. She
              turned and went inside, feeling exhausted but happy, knowing that
              no matter how overwhelming the day had been, it was made lighter
              by him being there.
            </p>
            <p className="mb-2">
              And as she sat down to finally eat her dinner, she couldn’t help
              but smile, thinking about the mad dash back to the supermarket and
              the way he had laughed with her, making her first day at work
              something truly special.
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
