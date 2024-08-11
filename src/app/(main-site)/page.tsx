// import Caraousal from "@/components/HomePage/Caraousal.1";
// import Card from "@/components/HomePage/Card";
// import LinkedSections from "@/components/HomePage/LinkedSections";
// import MyHeading2 from "@/components/HomePage/MyHeading2";
// import VideoSection from "@/components/HomePage/VideoSection";
// import Services from "@/components/HomePage/services";

// export default function Home() {
//   return (
//     <>
//       <div className="container mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
//         <Caraousal />
//         <MyHeading2
//           title={<span>Gestiona</span>}
//           paragraph={<span>Al servicio del ciudadano</span>}
//         />
//         <div id="servicios">
//           <Services />
//         </div>
//         <MyHeading2
//           title={<span>Esto es lo que nos une</span>}
//           paragraph={<span>Nuestro compromiso</span>}
//         />
//         <div className="flex flex-row justify-center container mx-auto flex-wrap  gap-4 sm:gap-7 max-w-xl">
//           <LinkedSections
//             imageUrl="/Playa de Mogán.png"
//             subtitle="Tu pequeño paraiso"
//             title="Playas"
//             link="/playa"
//           />
//           <LinkedSections
//             imageUrl="/Parking.png"
//             subtitle="Accesos ilimitados"
//             title="Parking"
//             link="/parking"
//           />
//           <LinkedSections
//             imageUrl="/ZonaAzul.png"
//             subtitle="Parquímetro en tu mano"
//             title="Zona Azul"
//             link="/parking/meter"
//           />
//           <LinkedSections
//             imageUrl="/VPO.png"
//             subtitle="Promociones de viviendas"
//             title="VPO"
//             link="/parking/housing"
//           />
//         </div>
//         <div>
//           <VideoSection />
//         </div>
//         <div className="space-y-8 lg:space-y-14" id="ultimas-noticias">
//           <MyHeading2
//             title={<span>Últimas noticias</span>}
//             paragraph={<span></span>}
//           />
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-7 lg:grid-cols-3 pb-12 lg:pb-28">
//             <Card
//               title="Mogán ya gestiona de forma directa las playas que tiene concesionadas"
//               subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum harum vel in sequi eveniet accusantium quo nesciunt ut, doloribus obcaecati similique, illum reprehenderit corrupti repellendus, at ipsum repudiandae dolorem ea."
//               imgSrc="/1.png"
//               slug="mogán-ya-gestiona-de"
//             />

//             <Card
//               title="Onalia Bueno da la bienvenida al nuevo personal de las playas"
//               subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum harum vel in sequi eveniet accusantium quo nesciunt ut, doloribus obcaecati similique, illum reprehenderit corrupti repellendus, at ipsum repudiandae dolorem ea."
//               imgSrc="/2.png"
//               slug="mogán-ya-gestiona-de"
//             />
//             <Card
//               title="Gestiona Mogán estrena oficina virtual tributaria"
//               subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum harum vel in sequi eveniet accusantium quo nesciunt ut, doloribus obcaecati similique, illum reprehenderit corrupti repellendus, at ipsum repudiandae dolorem ea."
//               imgSrc="/4.png"
//               slug="mogán-ya-gestiona-de"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// "use client";

// import { usePathname } from "next/navigation";
// import Caraousal from "@/components/HomePage/Caraousal.1";
// import Card from "@/components/HomePage/Card";
// import LinkedSections from "@/components/HomePage/LinkedSections";
// import MyHeading2 from "@/components/HomePage/MyHeading2";
// import VideoSection from "@/components/HomePage/VideoSection";
// import Services from "@/components/HomePage/services";
// import PopUp from "@/components/PopUp";

// export default function Home() {
//   const pathname = usePathname();

//   // Condición para mostrar el PopUp solo en la ruta (main-site)
//   const showPopUp = pathname === "/app/(main-site)";

//   return (
//     <>
//       <div className="container mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
//         <Caraousal />
//         <MyHeading2
//           title={<span>Gestiona</span>}
//           paragraph={<span>Al servicio del ciudadano</span>}
//         />
//         <div id="servicios">
//           <Services />
//         </div>
//         <MyHeading2
//           title={<span>Esto es lo que nos une</span>}
//           paragraph={<span>Nuestro compromiso</span>}
//         />
//         <div className="flex flex-row justify-center container mx-auto flex-wrap gap-4 sm:gap-7 max-w-xl">
//           <LinkedSections
//             imageUrl="/Playa de Mogán.png"
//             subtitle="Tu pequeño paraiso"
//             title="Playas"
//             link="/playa"
//           />
//           <LinkedSections
//             imageUrl="/Parking.png"
//             subtitle="Accesos ilimitados"
//             title="Parking"
//             link="/parking"
//           />
//           <LinkedSections
//             imageUrl="/ZonaAzul.png"
//             subtitle="Parquímetro en tu mano"
//             title="Zona Azul"
//             link="/parking/meter"
//           />
//           <LinkedSections
//             imageUrl="/VPO.png"
//             subtitle="Promociones de viviendas"
//             title="VPO"
//             link="/parking/housing"
//           />
//         </div>
//         <div>
//           <VideoSection />
//         </div>
//         <div className="space-y-8 lg:space-y-14" id="ultimas-noticias">
//           <MyHeading2
//             title={<span>Últimas noticias</span>}
//             paragraph={<span></span>}
//           />
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-7 lg:grid-cols-3 pb-12 lg:pb-28">
//             <Card
//               title="Mogán ya gestiona de forma directa las playas que tiene concesionadas"
//               subtitle="El Ayuntamiento de Mogán ha instalado este viernes nuevas hamacas y sombrillas en la playa de Mogán, dando comienzo con ello a la gestión directa de los servicios de temporada de esta y las otras seis playas para las que ostenta la autorización correspondiente"
//               imgSrc="/1.png"
//               slug="[slug]\page.tsx"
//             />
//             <Card
//               title="Onalia Bueno da la bienvenida al nuevo personal de las playas"
//               subtitle="La alcaldesa de Mogán, Onalia Bueno, ha dado la bienvenida a la nueva plantilla de profesionales que realizarán las funciones de salvamento, alquiler de sombrillas y hamacas y mantenimiento en las playas que el Ayuntamiento tiene concesionadas por la Demarcación de Costas de Canarias."
//               imgSrc="/2.png"
//               slug="mogán-ya-gestiona-de"
//             />
//             <Card
//               title="Gestiona Mogán estrena oficina virtual tributaria"
//               subtitle="El Ayuntamiento de Mogán pone en marcha este 2 de marzo la Oficina Virtual Tributaria (OVT), un portal web que facilita el acceso a la información tributaria a los contribuyentes del municipio y que permite a estos realizar los mismos trámites que si acudieran a las dependencias municipales"
//               imgSrc="/4.png"
//               slug="mogán-ya-gestiona-de"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Renderizar PopUp solo si showPopUp es verdadero */}
//       {showPopUp && (
//         <PopUp classes="bottom-0 right-0">
//           <div className="space-y-3 pt-8">
//             <h3 className="text-[28px] font-medium leading-snug text-brand-orange text-center">
//               AVISO IMPORTANTE
//             </h3>
//             <div className="flex justify-center">
//               <img
//                 src="https://www.gestmogan.com/wp-content/uploads/2022/11/MOGAN-MARCA-Y-COMUNICACION-300x300.png"
//                 alt=""
//                 width="150"
//                 height="150"
//               />
//             </div>

//             <h3 className="pb-4 text-2xl text-dark text-center">
//               PRUEBA ESCRITA del próximo 11 de julio de 2024 <br />
//               En el “Edificio Polivalente de Arguineguin” situado en la C/
//               Damasco, en la cubierta del Parking subterráneo de Arguineguin.
//               <br />
//               <br />
//               2º.- La PRUEBA ESCRITA será a las 10:00 am., del 11 de julio de
//               2024, a la finalización de la misma se realizará la entrevista
//               personal.
//               <br />
//               <br />
//               3º.- NOTIFIQUESE la presente resolución al servicio y a la
//               administración y publíquese en la página web y en el tablón de
//               anuncios de la empresa Mogán Gestión Municipal, S.L (GESTIONA){" "}
//             </h3>
//           </div>
//         </PopUp>
//       )}
//     </>
//   );
// }

"use client";

import { usePathname } from "next/navigation";
import Caraousal from "@/components/HomePage/Caraousal.1";
import Card from "@/components/HomePage/Card";
import LinkedSections from "@/components/HomePage/LinkedSections";
import MyHeading2 from "@/components/HomePage/MyHeading2";
import VideoSection from "@/components/HomePage/VideoSection";
import Services from "@/components/HomePage/services";
import PopUp from "@/components/PopUp";

export default function Home() {
  const pathname = usePathname();

  // Condición para mostrar el PopUp solo en la ruta (main-site)
  const showPopUp = pathname === "/";

  return (
    <>
      <div className="container mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <Caraousal />
        <MyHeading2
          title={<span>Gestiona</span>}
          paragraph={<span>Al servicio del ciudadano</span>}
        />
        <div id="servicios">
          <Services />
        </div>
        <MyHeading2
          title={<span>Esto es lo que nos une</span>}
          paragraph={<span>Nuestro compromiso</span>}
        />
        <div className="flex flex-row justify-center container mx-auto flex-wrap gap-4 sm:gap-7 max-w-xl">
          <LinkedSections
            imageUrl="/Playa de Mogán.png"
            subtitle="Tu pequeño paraiso"
            title="Playas"
            link="/playas"
          />
          <LinkedSections
            imageUrl="/Parking.png"
            subtitle="Accesos ilimitados"
            title="Parking"
            link="/parking"
          />
          <LinkedSections
            imageUrl="/ZonaAzul.png"
            subtitle="Parquímetro en tu mano"
            title="Zona Azul"
            link="/zona-azul"
          />
          {/* <LinkedSections
            imageUrl="/VPO.png"
            subtitle="Promociones de viviendas"
            title="VPO"
            link="/vpo"
          /> */}
        </div>
        <div>
          <VideoSection />
        </div>
        <div className="space-y-8 lg:space-y-14" id="ultimas-noticias">
          <MyHeading2
            title={<span>Últimas noticias</span>}
            paragraph={<span></span>}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-7 lg:grid-cols-3 pb-12 lg:pb-28">
            <Card
              title="Mogán ya gestiona de forma directa las playas que tiene concesionadas"
              subtitle="El Ayuntamiento de Mogán ha instalado este viernes nuevas hamacas y sombrillas en la playa de Mogán, dando comienzo con ello a la gestión directa de los servicios de temporada de esta y las otras seis playas para las que ostenta la autorización correspondiente"
              imgSrc="/1.png"
              // slug="mogán-ya-gestiona"
              slug="page"
            />
            <Card
              title="Onalia Bueno da la bienvenida al nuevo personal de las playas"
              subtitle="La alcaldesa de Mogán, Onalia Bueno, ha dado la bienvenida a la nueva plantilla de profesionales que realizarán las funciones de salvamento, alquiler de sombrillas y hamacas y mantenimiento en las playas que el Ayuntamiento tiene concesionadas por la Demarcación de Costas de Canarias."
              imgSrc="/2.png"
              slug="page-copy"
            />
            <Card
              title="Gestiona Mogán estrena oficina virtual tributaria"
              subtitle="El Ayuntamiento de Mogán pone en marcha este 2 de marzo la Oficina Virtual Tributaria (OVT), un portal web que facilita el acceso a la información tributaria a los contribuyentes del municipio y que permite a estos realizar los mismos trámites que si acudieran a las dependencias municipales"
              imgSrc="/4.png"
              slug="page-copy-2"
            />
          </div>
        </div>
      </div>

      {/* Renderizar PopUp solo si showPopUp es verdadero */}
      {showPopUp && (
        <PopUp classes="bottom-0 left-0">
          <div className="space-y-3 pt-8">
            <h3 className="text-[28px] font-medium leading-snug text-brand-orange text-center">
              AVISO IMPORTANTE
            </h3>
            <div className="flex justify-center">
              <img
                src="https://www.gestmogan.com/wp-content/uploads/2022/11/MOGAN-MARCA-Y-COMUNICACION-300x300.png"
                alt=""
                width="150"
                height="150"
              />
            </div>
            <h5 className="text-3xl text-brand-orange text-center pb-3">
              Proyecto común de fusión
            </h5>
            <p className="text-center text-base text-dark pb-3">
              Click en en enlace para acceder al documento
            </p>
            <p className="text-center text-base pb-6">
              <a
                className="text-brand-orange hover:text-brand-maron transition-all flex items-end gap-1.5 justify-center"
                href="https://www.gestmogan.com/wp-content/uploads/2024/05/InformeFusionTrabajadores.pdf"
              >
                Informe Fusion Trabajadores
                <img
                  className="size-10 inline"
                  src="https://www.gestmogan.com/wp-content/uploads/2022/10/icons8-pdf-48.png"
                  alt="pdf"
                />
              </a>
            </p>
          </div>
        </PopUp>
      )}
    </>
  );
}
