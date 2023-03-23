import { Emoji } from "types";

export default function Input({
  emojis,
  setEmojis,
}: {
  emojis: Emoji[];
  setEmojis: any;
}) {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    setEmojis(emojis.filter((emoji) => emoji.name.includes(value)));
  };

  return (
    <div className="flex flex-col items-center max-auto mt-12">
      <div className="sm:text-2xl lg:text-3xl text-center text-textColor font-roboto font-semibold">
        Click on emoji to copy it to clipboard
      </div>
      <input
        onChange={(e) => handleChange(e)}
        className="
          outline-none w-[calc(100%_-_2rem)] max-w-lg h-10 rounded-md pl-4 mt-6
          :placeholder font-roboto font-medium
        "
        type="text"
        placeholder="Search for emoji"
      />
    </div>
  );
}
