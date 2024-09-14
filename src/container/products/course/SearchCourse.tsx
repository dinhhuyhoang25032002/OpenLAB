import BannerPage from "@/components/custom/BannerPage";
import imageSale from "@/assets/image/product/sales.jpg";
// import { courseInfor5G, courseInforAI, courseInforCloud, courseInforDataAnalyst, courseInforDronevsUav, courseInforLTN } from "@/services/data";
// import CourseInfor from "@/components/product/course/CourseInfor";
const SearchCourse = () => {
  return (
    <div>
      <BannerPage
        header={"Tìm kiếm khóa học"}
        homepage={"Trang chủ"}
        name={"Tìm kiếm khóa học"}
      />
      <div className="flex px-16 gap-4 py-10 bg-[#eee]">
        <div className=" bg-orange-400 w-1/3 flex justify-center gap-5 py-10 rounded-2xl ">
          <div className=" w-1/2 flex flex-col ">
            <label htmlFor="search-course " className="text-white">
              Nhập thông tin để tìm kiếm khóa học
            </label>
            <input
              type="text"
              className="px-4 py-3 rounded"
              id="search-course"
              placeholder="ID-KIT/ID-Khóa học"
            />
          </div>
          <div className="flex items-start  justify-center pt-[24px]">
            <button className="px-5 py-3 bg-red-600 rounded-sm hover:opacity-85 text-white">
              <span>Tìm kiếm</span>
            </button>
          </div>
        </div>
        <div className="w-2/3">
          <img
            src={imageSale}
            alt="image-Sale"
            className="object-cover object-center w-full h-56 rounded-2xl"
          />
        </div>
      </div>
     

     
    </div>
  );
};

export default SearchCourse;
