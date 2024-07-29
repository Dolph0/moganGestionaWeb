import Banner from "@/components/Parking/Vouchers/Banner";
import Demo from "@/components/Parking/Vouchers/Demo";
import Info from "@/components/Parking/Vouchers/Info";
import Image from "next/image";
export default function TimeVouchers() {
  return (
    <main>
      <Banner />
      <Image
        src="/workInProgress.png"
        width={1440}
        height={1080}
        alt="work in progress"
      />
      {/* <Info />
      <Demo /> */}
    </main>
  );
}
