import Emojis from "./components/Emojis";
import Head from "./components/Head";
import Input from "./components/Input";

export default function HomePage() {
  return (
    <div className="bg-background min-h-screen">
      <Head />
      <Input />
      {/* Tabs */}

      {/* @ts-expect-error Server Component */}
      <Emojis />
    </div>
  );
}
