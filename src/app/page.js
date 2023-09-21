import { Message } from "@/components/Message";
import { Qr_social_networks } from "@/components/Qr_social_networks";

export default function Home() {
  return (
    <main>
      <Message
        item_num={"1 ."}
        text={`Planificación y diseño de roadmaps de investigación efectivos`}
      />
      <div className="w-full max-w-[250px] h-auto mx-auto grid place-items-center grid-cols-2">
        <Qr_social_networks
          styles={"ml-6"}
          url={"behance.png"}
          width={100}
          height={100}
        />
        <Qr_social_networks
          styles={"mt-10"}
          url={"github.png"}
          width={100}
          height={100}
        />
        <Qr_social_networks
          styles={"ml-2"}
          url={"instagram.png"}
          width={100}
          height={100}
        />
        <Qr_social_networks
          styles={"mt-4 ml-4"}
          url={"wpp.png"}
          width={100}
          height={100}
        />
        <Qr_social_networks
          styles={"mt-4 ml-4"}
          url={"tiktok.png"}
          rotation={"col-span-2"}
          width={100}
          height={100}
        />
      </div>
    </main>
  );
}
