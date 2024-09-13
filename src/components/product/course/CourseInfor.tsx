import { FaSignal, FaStarHalfAlt, FaUsers } from "react-icons/fa";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
type CourseInforProps = {
  srcImg: string;
  id: string | number;
  nameCourse: string;
  price: string;
};
const CourseInfor = ({ srcImg, id, nameCourse, price }: CourseInforProps) => {
  return (
    <div className=" flex flex-col relative cursor-pointer w-[95%] xs:w-[95%]  h-[480px] rounded-xl px-4 py-4 shadow-md  item-center hover:shadow-2xl  sm:mt-4  ">
      <div className="mb-5 flex justify-center relative hover:scale-105 hover:transition-all ease-in duration-200">
        <img
          src={srcImg}
          alt="image-product-section"
          className="w-full h-48 object-center object-fill border-[#8AD9E4] border-2 rounded xs:h-48"
        />
        <div className="flex justify-end items-center  absolute w-full h-full  top-0 left-0 opacity-0 hover:opacity-100 ">
          <Link
            to={`/product/${id}`}
            className="flex justify-center items-center w-full h-full  "
          >
            <button className="rounded-full px-4 py-2  font-medium bg-gradient-to-r text-white from-blue-900 from-0% via-cyan-800 via-58% to-sky-800 to-100%  flex gap-2 items-center hover:transition-colors  hover:text-white transition ease-in-out delay-100 ">
              Xem chi tiết <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
      <div className="flex justify-between items-center mb-3 ">
        <div className="flex gap-1 items-center">
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStarHalfAlt className="text-yellow-500" />
        </div>
        <div className="flex items-center gap-2">
          <FaSignal className="text-red-500" />
          <span className="text-xs font-normal">Có sẵn</span>
        </div>
      </div>
      <div className="flex justify-between py-2 ">
        <div className="bg-[#081140] px-2 py-1 text-white rounded-md ">
          {nameCourse}
        </div>

        <div className="flex gap-2 items-center ">
          <FaUsers className="mt-[1px]" />
          <span className=" font-semibold text-sm text-end">1236</span>
        </div>
      </div>
      <div className="text-center  ">
        <span className="text-[#081140] text-lg font-semibold ">{price}</span>
      </div>
    </div>
  );
};

export default CourseInfor;
