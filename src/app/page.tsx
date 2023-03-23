import Head from "./components/Head";
import Emojis from "./components/Emojis";
import { Emoji } from "types";

async function getEmojis() {
  return (await fetch("https://emojihub.yurace.pro/api/all")).json();
}

export default async function HomePage() {
  const emojis: Emoji[] = await getEmojis();

  return (
    <div className="bg-background min-h-screen">
      <Head />
      <Emojis emojis={emojis} />
    </div>
  );
}
