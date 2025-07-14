"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";


const index = () => {
  return (
    <>
      <div
        className="relative flex items-center justify-center h-screen px-4 text-center bg-center bg-no-repeat bg-cover dark:text-white bg-white dark:bg-brand-dark"
        data-aos="fade"
      >
        <div className="content">
          <div className="fixed transform -translate-x-1/2 top-4 left-1/2">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={216}
                height={59}
                className="h-[59px] w-[216px] object-contain"
              />
            </Link>
          </div>
          {/* End logo */}
          <h1 className="text-black text-[125px] leading-none tracking-wider md:text-[80px]">
            404!
          </h1>
          <p className="text-lg font-medium my-7 text-black">
            The page you are looking for could not be found.
          </p>
          <Link
            className="bg-[#18b2ff] text-black transition duration-200 ease-out hover:text-white relative text-center rounded-lg px-[35px] py-[18px]"
            href="/"
          >
            BACK TO HOME
          </Link>
        </div>
        {/* End .content */}
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
