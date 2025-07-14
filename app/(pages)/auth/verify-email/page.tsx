import VerifyCode from "@/app/components/verify-email";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full px-[5%]">
      <div className="w-full flex justify-center items-center lg:flex-row flex-col">
        <div className="h-[500px] lg:w-[600px] w-full flex-1">
          <img src="/images/verifycode.png" alt="" className="w-full h-full" />
        </div>
        <div className="flex-1">
          <VerifyCode />
        </div>
      </div>
    </div>
  );
}

export default page