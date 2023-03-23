"use client";

import { useState } from "react";
import EmojiComponent from "./Emoji";
import Input from "./Input";
import { Emoji } from "types";

export default function Emojis({ emojis = [] }: { emojis: Emoji[] }) {
  const [filteredEmojis, setFilteredEmojis] = useState(emojis);

  return (
    <div>
      <Input
        emojis={emojis}
        setEmojis={(emojis: Emoji[]) => setFilteredEmojis(emojis)}
      />
      <div className="flex flex-wrap mt-10 justify-center p-2">
        {filteredEmojis.map((emoji) => (
          <EmojiComponent
            key={emoji.name}
            name={emoji.name}
            htmlCode={emoji.htmlCode}
          />
        ))}
      </div>
    </div>
  );
}
