import { Emoji } from "types";
import EmojiComponent from "./Emoji";

async function getEmojis() {
  return (await fetch("https://emojihub.yurace.pro/api/all")).json();
}

export default async function Emojis() {
  const emojis: Emoji[] = await getEmojis();

  return (
    <div className="flex flex-wrap mt-10 justify-center p-2">
      {emojis.map((emoji) => (
        <EmojiComponent
          key={emoji.name}
          name={emoji.name}
          htmlCode={emoji.htmlCode}
        />
      ))}
    </div>
  );
}
