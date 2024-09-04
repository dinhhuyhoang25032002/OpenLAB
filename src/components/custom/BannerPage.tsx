import { Link } from "react-router-dom";

type contentBannerProps = {
  header: string;
  homepage: string;
  name: string;
  connectStatus?: string;
};
const BannerPage = ({
  header,
  homepage,
  name,
  connectStatus,
}: contentBannerProps) => {
  return (
    <div className="w-full   text-white flex justify-center items-center">
      <div className="flex justify-center items-center flex-col bg-banner_homepage object-center bg-no-repeat h-72 object-fill w-[80%] bg-red-300">
        <h1 className="text-3xl font-semibold mb-4">{header}</h1>
        <span className="flex gap-1 text-lg">
          <Link to={"/"}>
            <span className="text-[#D32F2F] font-semibold cursor-pointer">
              {homepage}
            </span>
          </Link>
          /{" "}
          <div className="flex gap-2 items-center">
            <span>{name}</span>
            <span className="font-medium text-red-600">{connectStatus}</span>
          </div>
        </span>
      </div>
    </div>
  );
};

export default BannerPage;
