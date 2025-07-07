import Image from "next/image";
const SendNowFeature = () => {
  return (
    <section className="w-full h-full  flex flex-col items-center justify-center px-[5%]">
      <div
        className="flex flex-col items-center relative justify-center w-full h-full py-[4%] rounded-2xl min-h-screen bg-cover bg-center bg-no-repeat bg-white"
        style={{ backgroundImage: "url(/images/transparentbg.png)" }}
      >
        <div className="flex flex-col items-center relative justify-center w-full h-full">
          <div className="h-3 w-3 bg-[#18B1FF] rotate-45 top-14 absolute left-[36%]"></div>
          <div className="h-3 w-3 bg-[#18B1FF] rotate-45 absolute top-[50%] right-[39%]"></div>
          <h1 className="text-5xl font-bold text-center">
            Packed with Powerful
            <br />
            <span className="text-[#18B1FF]">Features</span>
          </h1>
        </div>
        <div className="flex flex-col justify-between items-center px-[6%] w-full pt-8 gap-8">
          <div className="flex w-full items-center justify-between lg:flex-row flex-col gap-[100px]">
            <div className="flex flex-col gap-4 justify-between">
              <h1 className="text-5xl font-bold">
                Real-time <br />
                Messaging
              </h1>
              <p className="text-lg text-gray-600">
                Send and receive messages <br /> instantly – always in sync.
              </p>
            </div>
            <div className="w-[500px] h-[400px]">
              <Image
                src="/images/tobemagic.png"
                width={100}
                height={100}
                alt=""
                className="w-full h-full rounded-4xl"
              />
            </div>
          </div>
          <div className="flex w-full items-center lg:flex-row flex-col gap-[100px]">
            <div className="w-[500px] h-[400px]">
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
              <p className="text-lg text-gray-600">
                Send and receive messages <br /> instantly – always in sync.
              </p>
            </div>
          </div>
          <div className="flex w-full items-center justify-between lg:flex-row flex-col">
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl font-bold">
                Real-time <br />
                Messaging
              </h1>
              <p className="text-lg text-gray-600">
                Send and receive messages <br /> instantly – always in sync.
              </p>
            </div>
            <div className="w-[500px] h-[400px]">
              <Image src="/images/switch.png" width={100} height={100} alt="" className="h-full w-full rounded-4xl" />
            </div>
          </div>
          <div className="flex w-full items-center lg:flex-row flex-col gap-[100px]">
            <div className="w-[500px] h-[400px]">
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
                Emoji <br />
                Support
              </h1>
              <p className="text-lg text-gray-600">
                Express yourself with full <br /> emoji support.
              </p>
              <div className="h-[55px] w-[55px] flex justify-center items-center bg-[#18B1FF] rounded-full hover:shadow-[0_0_2px_#18B1FF,0_0_4px_#18B1FF,0_0_6px_#18B1FF,0_0_8px_#18B1FF] transition-all duration-500 ease-in-out">
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
