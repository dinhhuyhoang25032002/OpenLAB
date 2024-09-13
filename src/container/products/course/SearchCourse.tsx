import BannerPage from "@/components/custom/BannerPage";
import imageSale from "@/assets/image/product/sales.jpg";
import { courseInfor5G, courseInforAI, courseInforCloud, courseInforDataAnalyst, courseInforDronevsUav, courseInforLTN } from "@/services/data";
import CourseInfor from "@/components/product/course/CourseInfor";
const SearchCourse = () => {
  return (
    <div>
      <BannerPage
        header={"Tìm kiếm khóa học"}
        homepage={"Trang chủ"}
        name={"Tìm kiếm khóa học"}
      />
      <div className="flex px-16 gap-4">
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
      <div className="px-24 flex flex-col">
        <div className=" text-center flex flex-col">
          <span className="text-3xl font-semibold">Khóa học 5G</span>
          <div className="flex  justify-around items-center w-full flex-wrap ">
            {courseInfor5G.map((item, index) => {
              return (
                <div className="flex  flex-wrap justify-center items-center w-[20%]">
                  <CourseInfor
                    srcImg={item.image}
                    id={index}
                    nameCourse={item.nameCourse}
                    price={item.price}
                    key={index}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className=" text-center flex flex-col">
          <span className="text-3xl font-semibold">Khóa học AI</span>
          <div className="flex  justify-around items-center w-full flex-wrap">
            {courseInforAI.map((item, index) => {
              return (
                <div className="flex  flex-wrap justify-center items-center w-[30%]">
                  <CourseInfor
                    srcImg={item.image}
                    id={index}
                    nameCourse={item.nameCourse}
                    price={item.price}
                    key={index}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className=" text-center flex flex-col">
          <span className="text-3xl font-semibold">Khóa học Clound</span>
          <div className="flex  justify-around items-center w-full flex-wrap ">
            {courseInforCloud.map((item, index) => {
              return (
                <div className="flex  flex-wrap justify-center items-center w-[30%]">
                  <CourseInfor
                    srcImg={item.image}
                    id={index}
                    nameCourse={item.nameCourse}
                    price={item.price}
                    key={index}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className=" text-center flex flex-col">
          <span className="text-3xl font-semibold">Khóa học phân tích dữ liệu</span>
          <div className="flex  justify-around items-center w-full flex-wrap ">
            {courseInforDataAnalyst.map((item, index) => {
              return (
                <div className="flex  flex-wrap justify-center items-center w-[30%]">
                  <CourseInfor
                    srcImg={item.image}
                    id={index}
                    nameCourse={item.nameCourse}
                    price={item.price}
                    key={index}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className=" text-center flex flex-col">
          <span className="text-3xl font-semibold">Khóa học Drone và UAV</span>
          <div className="flex  justify-around items-center w-full flex-wrap ">
            {courseInforDronevsUav.map((item, index) => {
              return (
                <div className="flex  flex-wrap justify-center items-center w-[30%]">
                  <CourseInfor
                    srcImg={item.image}
                    id={index}
                    nameCourse={item.nameCourse}
                    price={item.price}
                    key={index}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className=" text-center flex flex-col">
          <span className="text-3xl font-semibold">Khóa học lập trình nhúng</span>
          <div className="flex  justify-around items-center w-full flex-wrap">
            {courseInforLTN.map((item, index) => {
              return (
                <div className="flex  flex-wrap justify-center items-center w-[30%]">
                  <CourseInfor
                    srcImg={item.image}
                    id={index}
                    nameCourse={item.nameCourse}
                    price={item.price}
                    key={index}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCourse;
