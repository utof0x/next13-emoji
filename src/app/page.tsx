import Head from "./components/Head";
import Input from "./components/Input";
import Emojis from "./components/Emojis";

export default async function HomePage() {
  return (
    <div className="bg-background min-h-screen">
      <Head />
      <Input />
      {/* @ts-expect-error Server Component */}
      <Emojis />
    </div>
  );
}
