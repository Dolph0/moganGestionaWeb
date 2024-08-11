// import map from "@/public/images/parking/meter/map.png";
// import Image from "next/image";
// export default function Map() {
//   return (
//     <section className="px-8  pb-20 pt-8 sm:py-14">
//       <div className="max-w-screen-xl mx-auto space-y-10">
//         <h3 className="text-center text-2xl lg:text-[42px] font-extrabold text-brand-teal">
//           ¿Dónde aparcar?
//         </h3>
//         <div>
//           <Image
//             src={map}
//             className="object-cover max-md:h-[230px] object-center w-full"
//             alt={"Blog Img"}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";

export default function Map() {
  return (
    <section className="px-8 pb-20 pt-8 sm:py-14">
      <div className="max-w-screen-xl mx-auto space-y-10">
        <h3 className="text-center text-2xl lg:text-[42px] font-extrabold text-brand-teal">
          ¿Dónde aparcar?
        </h3>
        <div
          className="relative overflow-hidden"
          style={{ paddingTop: "56.25%" }}
        >
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1Dgcbx8_q6TScqx5Ce6_yJdaJXgvdItE&ll=27.795393007530233%2C-15.707844155712893&z=13"
            width="100%"
            height="100%"
            style={{ border: 0, position: "absolute", top: 0, left: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
