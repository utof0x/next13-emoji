"use client";

import { Emoji } from "types";

export default function Emoji({
  name,
  htmlCode,
}: {
  name: string;
  htmlCode: string[];
}) {
  return (
    <>
      <div
        onClick={() => {
          const emoji = document.querySelector(
            `div[data-htmlCode="${htmlCode[0]}"]`
          )?.innerHTML;
          navigator.clipboard.writeText(emoji || "");
        }}
        className="
          group flex flex-col items-center justify-center w-24 h-24 cursor-pointer mt-4 mr-4 rounded-full bg-greyCustom
          hover:rounded-md
        "
      >
        <div
          data-htmlCode={htmlCode[0]}
          className="text-5xl group-hover:text-4xl"
          dangerouslySetInnerHTML={{ __html: htmlCode[0] }}
        />
        <div
          className="
            hidden text-textColor text-center mt-1 whitespace-nowrap max-w-[92px] first-letter:capitalize text-ellipsis overflow-hidden
            group-hover:block 
          "
        >
          {name}
        </div>
      </div>
    </>
  );
}
