import Image from "next/image";
import Box from "../common/Box";
export default function Home() {
  return (
    <main>
      <h1 className="font-mystery-mixed text-7xl">Hola Mundo!</h1>
      <Image
        src="/public/svg/indonesia.png"
        width={500}
        height={500}
        alt="Picture"
      />
      <Box text="Hola Victoria" />
    </main>
  );
}
