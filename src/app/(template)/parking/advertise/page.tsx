import Banner from "@/components/Parking/Advertise/Banner";
import Contact from "@/components/Parking/Advertise/Contact";
import Info from "@/components/Parking/Advertise/Info";
import Image from "next/image";
export default function Advertise() {
  return (
    <main>
      <Banner />
      {/* <Info />
      <Contact /> */}
      <Image
        src="/workInProgress.png"
        width={1440}
        height={1080}
        alt="work in progress"
      />
    </main>
  );
}
