import VerifyCode from "@/app/components/verify-email";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full px-[5%]">
      <div className="w-full flex justify-center items-center">
        <div className="flex-1 h-[600px]">
          <img src="/images/verifycode.png" alt="" />
        </div>
        <div className="flex-1">

        <VerifyCode />
        </div>
      </div>
    </div>
  );
}

export default page