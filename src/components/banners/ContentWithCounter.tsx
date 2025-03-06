"use client";
import CustomButton from "../ui/custombtn";

interface ContentWithCounterProps {
  title: string;
}

const ContentWithCounter: React.FC<ContentWithCounterProps> = ({ title }) => {
  return (
    <section className="content-with-counter no-padding overlap-counter">
      <div className="container">
        <div className="rounded-lg overflow-hidden">
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
          <div className="bg-white">
            <div className="flex gap-6">
              <div className="col-3">
                <div className="digits-wrapper">
                  <h2 className="text-sortBlue">2.14</h2>
                  <span className="text-sortBlue"> million</span>
                </div>
                <div className="text-wrap">
                  <p>
                    healthcare professionals and provider organizations
                    connected
                  </p>
                </div>
              </div>
              <div className="col-3">
                <div className="digits-wrapper">
                  <span className="text-green">Virtually all</span>
                </div>
                <div className="text-wrap">
                  <p>
                    insured Americans represented in our Master Patient Index
                  </p>
                </div>
              </div>
              <div className="col-3">
                <div className="digits-wrapper">
                  <h2 className="text-darkOrange">23.8</h2>
                  <span className="text-darkOrange"> billion</span>
                </div>
                <div className="text-wrap">
                  <p>network transactions in 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentWithCounter;
