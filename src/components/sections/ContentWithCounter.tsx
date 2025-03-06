"use client";
import CustomButton from "../ui/custombtn";
import Counter from "./Counter";

interface ContentWithCounterProps {
  title: string;
}

const ContentWithCounter: React.FC<ContentWithCounterProps> = ({ title }) => {
  return (
    <section className="p-0 mt-[-158px]">
      <div className="container">
        <div className="rounded-lg overflow-hidden drop-shadow-lg">
          <div className="bg-darkGray flex flex-row gap-4 py-8 px-14">
            <div className="text-wrap flex-[0_0_55%]">
              <h5 className="text-white max-w-[570px]">{title}</h5>
            </div>
            <div className="flex-[0_0_45%] flex gap-4 justify-end">
              <CustomButton
                type="primary-white"
                href="/why-surescripts"
                label="Why Surescripts"
              />
              <CustomButton
                type="secondary-white"
                href="/why"
                label="See Our Annual Impact Report"
              />
            </div>
          </div>
          <div className="bg-white p-6 pb-11">
            <div className="flex gap-6">
              <Counter
                counter={2.5}
                counterTextColor="text-sortBlue"
                suffix="million"
                description="healthcare professionals and provider organizations connected"
              />
              <Counter
                counter={2.5}
                counterTextColor="text-green"
                suffix="Virtually all"
                description="insured Americans represented in our Master Patient Index"
              />
              <Counter
                counter={23.8}
                counterTextColor="text-darkOrange"
                suffix="billion"
                description="network transactions in 2023"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentWithCounter;
