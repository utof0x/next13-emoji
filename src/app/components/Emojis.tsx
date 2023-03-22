import React from "react";
import { Emoji } from "types";

async function getEmojis() {
  return (await fetch("https://emojihub.yurace.pro/api/all")).json();
}

export default async function Emojis() {
  const emojis: Emoji[] = await getEmojis();

  return (
    <div className="flex flex-wrap">
      {emojis.map((emoji) => {
        console.log(typeof emoji.name);
        return (
          <div
            key={emoji.name}
            className="flex items-center justify-center w-16 h-16 cursor-pointer mt-3 mr-3"
          >
            <div
              className="text-4xl"
              dangerouslySetInnerHTML={{ __html: emoji.htmlCode[0] }}
            />
          </div>
        );
      })}
    </div>
  );
}
