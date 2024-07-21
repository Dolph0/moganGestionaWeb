import Accordion from "@/components/Accordion";
import CountDown from "@/components/CountDown";
import Caraousal from "@/components/HomePage/Caraousal.1";
import Tabs from "@/components/Tabs/Tabs";
import { datas } from "../../datas";

type Props = {};

const page = ({ params }: { params: { id: number } }) => {
  const data = datas.find((data: any) => data.id === +params.id);

  return (
    <>
      <div className="container mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <Caraousal />
        <div className="pt-12 pb-12 sm:pb-20 space-y-12 md:space-y-14 px-4 md:px-8">
          <div className="space-y-3">
            <h2 className="font-extrabold text-center text-xl sm:text-3xl text-brand-blue !leading-relaxed">
              {data?.title || ''}
            </h2>
            <div className="text-dark/80 text-center text-base">
              <article
                dangerouslySetInnerHTML={{
                  __html: data?.details || '',
                }}
              />
            </div>
            <div className="space-y-12 pt-6">
              <div className="space-y-6">
                <h3 className="text-brand-blue text-center text-xl font-semibold">
                  {data?.counter?.title || ''}
                </h3>
                <div className="space-y-6">
                  <CountDown targetDate={data?.counter?.target_date || ''} />
                </div>
                <div className="py-12">
                  <Tabs items={data?.tabitems || []} />
                </div>
                <div className="border-y divide-y divide-brand-teal border-brand-teal">
                  {data?.accordions?.map((accordion: any) => (
                    <Accordion key={accordion?.title} title={accordion?.title}>
                      <article
                        dangerouslySetInnerHTML={{
                          __html: accordion?.details || '',
                        }}
                      />
                    </Accordion>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
