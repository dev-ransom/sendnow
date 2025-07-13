import Image from "next/image";
const SendNowFeature = () => {
  return (
    <section className="w-full h-full  flex flex-col items-center justify-center px-[5%] bg-linear-[45deg,#c9edff,#ffffff,#c9edff]">
      <div
        className="flex flex-col items-center relative justify-center w-full h-full py-[4%] rounded-2xl min-h-screen bg-cover bg-center bg-no-repeat bg-blue-500"
        style={{ backgroundImage: "url(/images/transparentbg.png)" }}
      >
        <div className="flex flex-col items-center relative justify-center w-full h-full">
          <div className="md:h-3 md:w-3 h-2 w-2 bg-[#18B1FF] rotate-45 md:top-14 top-12 absolute lg:left-[36%] left-[30%]"></div>
          <div className="md:h-3 md:w-3 h-2 w-2 bg-[#18B1FF] rotate-45 absolute md:top-[50%] top-[55%] md:right-[39%] right-[30%]"></div>
          <h1 className="lg:text-5xl text-3xl font-bold text-center">
            Packed with Powerful
            <br />
            <span className="text-[#18B1FF] mt-2">Features</span>
          </h1>
        </div>
        <div className="flex flex-col justify-between items-center px-[6%] w-full pt-8 gap-8">
          <div className="flex w-full items-center justify-between lg:flex-row flex-col md:gap-[100px] gap-[40px]">
            <div className="flex flex-col gap-4 justify-between">
              <h1 className="md:text-5xl text-3xl font-bold">
                Real-time <br className="md:flex hidden" />
                Messaging
              </h1>
              <p className="text-lg text-[#797979]">
                Send and receive messages <br className="md:flex hidden" />{" "}
                instantly <br className="flex md:hidden" /> – always in sync.
              </p>
            </div>
            <div className="md:w-[500px] w-full md:h-[400px] h-full">
              <Image
                src="/images/tobemagic.png"
                width={100}
                height={100}
                alt=""
                className="w-full h-full rounded-4xl"
              />
            </div>
          </div>
          <div className="flex w-full md:items-center lg:flex-row flex-col-reverse md:gap-[100px] gap-[40px]">
            <div className="md:w-[500px] w-full md:h-[400px] h-full">
              <Image
                src="/images/delete.png"
                width={100}
                height={100}
                alt=""
                className="h-full w-full"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl font-bold">
                Edit & Delete <br /> Messages
              </h1>
              <p className="md:text-lg text-gray-600">
                Mistakes? No problem. Edit or delete messages, with history
                preserved.
              </p>
            </div>
          </div>
          <div className="flex w-full md:items-center justify-between lg:flex-row flex-col md:gap-[100px] gap-[40px]">
            <div className="flex flex-col gap-4">
              <h1 className="md:text-5xl text-3xl font-bold">
                Message <br className="md:flex hidden" />
                Tools
              </h1>
              <p className="lg:text-lg text-gray-600">
                Reply, copy, forward, star, pin, and share messages with ease.
              </p>
            </div>
            <div className="md:w-[500px] w-full md:h-[400px] h-full">
              <Image
                src="/images/switch.png"
                width={100}
                height={100}
                alt=""
                className="h-full w-full rounded-4xl"
              />
            </div>
          </div>
          <div className="flex relative w-full md:items-center lg:flex-row flex-col-reverse md:gap-[100px] gap-[40px]">
            <div className="absolute left-[40%] bottom-[-40px] h-[55px] w-[55px] flex md:hidden justify-center items-center bg-[#18B1FF] rounded-full hover:shadow-[0_0_2px_#18B1FF,0_0_4px_#18B1FF,0_0_6px_#18B1FF,0_0_8px_#18B1FF] transition-all duration-500 ease-in-out">
              <Image
                src="/images/arrowForward.png"
                width={24}
                height={24}
                alt=""
                className="size-6"
              />
            </div>
            <div className="md:w-[500px] w-full md:h-[400px] h-full">
              <Image
                src="/images/emojiSupport.png"
                width={100}
                height={100}
                className="h-full w-full rounded-4xl"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl font-bold">
                Emoji <br className="md:flex hidden" />
                Support
              </h1>
              <p className="text-lg text-gray-600">
                Express yourself with full <br className="md:flex hidden" />{" "}
                emoji support.
              </p>
              <div className="h-[55px] w-[55px] md:flex hidden justify-center items-center bg-[#18B1FF] rounded-full hover:shadow-[0_0_2px_#18B1FF,0_0_4px_#18B1FF,0_0_6px_#18B1FF,0_0_8px_#18B1FF] transition-all duration-500 ease-in-out">
                <Image
                  src="/images/arrowForward.png"
                  width={24}
                  height={24}
                  alt=""
                  className="size-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SendNowFeature;
