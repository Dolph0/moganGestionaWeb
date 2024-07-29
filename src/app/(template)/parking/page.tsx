import Articles from "@/components/Parking/Home/Articles";
import Discount from "@/components/Parking/Home/Discount";
import InfoForm from "@/components/Parking/Home/InfoForm/Index";
import Places from "@/components/Parking/Home/Places";
import Recharge from "@/components/Parking/Home/Recharge";
import VideoArea from "@/components/Parking/Home/VideoArea";
import Image from "next/image";

export default function page() {
  return (
    <main>
      <VideoArea />
      {/* <Image
        src="/workInProgress.png"
        width={1440}
        height={1080}
        alt="work in progress"
      /> */}
      <Places />
      {/* <InfoForm /> */}
      <Discount />
      <Articles />

      <Recharge />
    </main>
  );
}
