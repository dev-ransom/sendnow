import PhoneVerificationForm from "../PhoneVerificationForm";

const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full px-[5%] ">
      <div className="flex md:flex-row flex-col items-center justify-between">
        <div className="h-[500px] lg:w-[600px] w-full flex-1">
          <img src="/images/login.png" alt="" className="w-full h-full" />
        </div>
        <div className="flex-1">
          <PhoneVerificationForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
