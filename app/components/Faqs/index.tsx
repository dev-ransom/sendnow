import { faqData } from "@/app/constants";
import Accordion from "../Accordion";

const FaqSection = () => {
  return (
    <section id="faq-section" className="px-[5%] flex flex-col pb-[4%] h-full">
      <div className="px-[6%]">
        <div className="pb-[100px] text-center flex flex-col gap-9 w-[50%] mx-auto relative">
          <img
            src="/images/Rectangle.png"
            className="size-4 left-0 top-6 absolute"
            alt=""
          />
          <h1 className="text-5xl font-semibold">
            General <span className="text-[#18B1FF]">FAQs</span>
          </h1>
          <p className="text-[#0E0E0E] text-[18px]">
            Everything you need to know about SendNow and how it works. Can’t
            find an answer?{" "}
            <a href="" className="text-[#18B1FF]">
              Send a Chat to our team
            </a>
          </p>
          <img
            src="/images/Rectangle.png"
            className="size-4 absolute right-0 bottom-[50px]"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-3">
          {faqData.map((item) => (
            <Accordion key={item.question} title={item.question}>
              <p className="text-white">{item.answer}</p>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
