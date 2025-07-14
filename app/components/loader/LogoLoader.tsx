
import Image from "next/image";
import { PropagateLoader } from "react-spinners";

interface ILogoLoader {
  hasImage?: boolean;
}

const LogoLoader = ({ hasImage = true }: ILogoLoader) => {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-white dark:bg-brand-dark gap-6 h-screen">
      {hasImage && (
        <Image
          src="/images/loaderLogo.png"
          alt=""
          width={100}
          height={100}
          className="w-[120px] h-[120px]"
        />
      )}
      <div className="items-center justify-center w-full flex">
        <PropagateLoader
          color="#18b2ff"
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
};

export default LogoLoader;
