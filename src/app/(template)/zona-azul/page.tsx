import Banner from "@/components/Parking/Meter/Banner";
import Content from "@/components/Parking/Meter/Content";
import Info from "@/components/Parking/Meter/Info";
import Map from "@/components/Parking/Meter/Map";
import TaxRate from "@/components/Parking/Meter/TaxRate";
import Image from "next/image";

export default function Meter() {
  return (
    <main>
      <Banner />
      {/* <Image
        src="/workInProgress.png"
        width={1440}
        height={1080}
        alt="work in progress"
      /> */}
      <Info />
      <TaxRate />
      <Content />
      <Map />
    </main>
  );
}
