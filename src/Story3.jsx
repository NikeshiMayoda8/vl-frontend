import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Story3() {
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
              first day at the boarding place. The move had been a
              whirlwind—boxes, suitcases, and the excitement of settling into a
              new space. By the time everything had been moved in and arranged,
              afternoon had already slipped into evening. The light outside was
              dimming, casting long shadows down the narrow corridors of the
              boarding house.
            </p>
            <p className="mb-2">
              Now, as the sky shifted from golden to a deeper blue, they found
              themselves sitting together on an old seat that had once belonged
              in a van. The seat was worn but surprisingly comfortable, tucked
              away at the end of the corridor, a quiet little spot that felt
              like their own private corner. The air was cool, and the sounds of
              the city beyond the boarding house hummed faintly in the
              background.
            </p>
            <p className="mb-2">
              They sat close, talking softly, as if the day had been building to
              this quiet moment. She was still getting used to the idea of being
              here, of this new chapter in her life. He had been there all day,
              helping her unpack, carrying her things up the stairs, offering
              jokes to lighten the heavy work. Now, as they sat side by side, it
              felt like they could finally take a breath.
            </p>
            <p className="mb-2">
              The conversation flowed easily, as it always did between them.
              They talked about her new place, her plans, and little things that
              didn’t really matter but filled the space between them with
              comfort. She was nervous, but his presence made everything feel a
              little less overwhelming, a little more manageable. It was as if
              just sitting next to him could make any place feel like home.
            </p>
        
            <p className="mb-2">
              She glanced at him, realizing how much she had appreciated his
              help today, and smiled. "Thank you for staying with me this long,"
              she said softly.
            </p>
            <p className="mb-2">
              He shrugged, a playful smile tugging at the corner of his lips. "I
              wouldn’t leave you on your first day here. Plus, it’s not like I
              had anywhere better to be."
            </p>
            <p className="mb-2">
              They shared a small laugh, and for a while, they simply sat in
              silence, watching as the evening deepened. The corridor was quiet,
              except for the occasional sound of footsteps from other residents
              passing by. It was peaceful, and neither of them seemed in a hurry
              for the moment to end.
            </p>
            <p className="mb-2">
              But time, as it always does, moved on. Eventually, the
              conversation lulled, and they both knew his train time was drawing
              close.
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
              He checked his phone, glancing at the clock. "I should probably
              get going soon. My train is coming up," he said, though there was
              a hint of reluctance in his voice.
            </p>
            <p className="mb-2">
              She nodded, feeling a small pang of sadness that their evening was
              almost over. "Yeah, you don’t want to miss it."
            </p>
            <p className="mb-2">
              They sat there for a few more moments, neither of them rushing to
              stand. The quiet between them was comfortable, but it was filled
              with the unspoken acknowledgment that he would be leaving soon.
            </p>
            <p className="mb-2">
              And then, out of the blue, he looked at her and said, "My train’s
              close now... I really have to go."
            </p>
            <p className="mb-2">
              Before she could respond, before she could even register his words
              fully, he leaned in and, with the gentlest touch, kissed her
              forehead. It was so quick, so soft, that it took her completely by
              surprise. She blinked, her breath catching as she felt the warmth
              of his lips linger on her skin for a brief second.
            </p>
            <p className="mb-2">
              She looked up at him, wide-eyed, unsure of what to say. But before
              she could gather her thoughts, he stood up, gave her a quick,
              lopsided smile, and said, “See you soon.” And then, he ran down
              the corridor, his footsteps echoing as he hurried to catch his
              train.
            </p>
            <p className="mb-2">
              She sat there for a moment, frozen in place, still processing what
              had just happened. Her hand instinctively went to her forehead,
              touching the spot where he had kissed her. It was such a simple
              gesture, yet it left her completely flustered.
            </p>
            <p className="mb-2">
              She couldn’t help but smile, even as her cheeks grew warm with
              surprise. He had never kissed her like that before—not on the
              forehead, not so tenderly. It was sweet, unexpected, and somehow,
              it felt like it meant more than anything he could have said.
            </p>
            <p>
              As the sound of his footsteps faded, and the corridor grew quiet
              once more, she leaned back against the seat from the van, still
              smiling to herself. The day had been long, and moving into the
              boarding house had been a lot to take in, but that moment—his soft
              kiss, his sudden departure—made everything feel right. Like maybe
              this new place, this new chapter, wouldn’t be so bad after all.
            </p>
            <p className="mb-2">
              She glanced at the door where he had disappeared, already looking
              forward to the next time they’d meet, and whispered to herself,
              "See you soon."
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
