import Banner from "@/components/Parking/Housing/Banner";
import Info from "@/components/Parking/Housing/Info";
import Image from "next/image";

export default function Housing() {
  return (
    <main>
      <Banner />
      <Image
        src="/workInProgress.png"
        width={1440}
        height={1080}
        alt="work in progress"
      />
      <Info />
    </main>
  );
}
