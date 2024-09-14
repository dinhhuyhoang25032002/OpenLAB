import BannerPage from "@/components/custom/BannerPage";
import SectionAllProduct from "@/components/product/all-product/SectionAllProduct";
import { courseInfor5G, courseInforAI, courseInforCloud, courseInforDataAnalyst, courseInforDronevsUav, courseInforLTN } from "@/services/data";
import CourseInfor from "@/components/product/course/CourseInfor";
import { dataSolution } from "@/services/data";
import { dataKit } from "@/services/data";
import { IoIosSearch } from "react-icons/io";
const AllProduct = () => {
  return (
    <div>
      <BannerPage
        header={"Tất Cả Sản Phẩm"}
        homepage={"Trang chủ"}
        name={"Sản phẩm"}
      />
      <div className="px-24 py-16 lg:px-14 sm:px-10 xs:px-10">
        <div className=" flex justify-between">
          <span className="xs:hidden">Hiển thị 6 sản phẩm</span>
          <div className=" relative">
            <input
              type="text"
              name=""
              id=""
              placeholder="Tìm kiếm sản phẩm"
              className="px-4 py-2 placeholder:text-sm bg-[#eee] rounded xs:w-full"
            />
            <IoIosSearch className="absolute top-1/2 right-2 translate-y-[-50%] cursor-pointer" />
          </div>
        </div>
        <SectionAllProduct
          title={"giải pháp/Dịch vụ"}
          data={dataSolution}
          type="APP"
        />
        <SectionAllProduct title={"Thiết bị/Kít"} data={dataKit} type="KIT" />

        <div className="">
          <span className="text-3xl font-semibold xs:text-2xl uppercase w-full text-center  block">Khóa học</span>
          <div className="px-16 flex flex-col py-10">
            <div className="  flex flex-col">
              <span className="text-xl font-semibold py-10 text-blue-600">THỰC HÀNH HỆ THỐNG IoT</span>
              <div className="flex   items-center w-full flex-wrap">
                {courseInforLTN.map((item, index) => {
                  return (
                    <div className="flex  flex-wrap justify-center items-center w-[24%] mt-2">
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
            <div className=" flex flex-col">
              <span className="text-xl font-semibold py-10 uppercase text-blue-600">Thực hành AI/ML</span>
              <div className="flex items-center w-full flex-wrap">
                {courseInforAI.map((item, index) => {
                  return (
                    <div className="flex mt-2  justify-center items-center w-[24%]">
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
            <div className="  flex flex-col">
              <span className="text-xl font-semibold py-10 uppercase text-blue-600">Thực hành mạng di động 5G</span>
              <div className="flex  justify-around items-center w-full flex-wrap ">
                {courseInfor5G.map((item, index) => {
                  return (
                    <div className="flex justify-center items-center w-[24%] ">
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

            <div className="  flex flex-col">
              <span className="text-xl font-semibold py-10 uppercase text-blue-600">Thực hành điện toán đám mây</span>
              <div className="flex   items-center w-full flex-wrap ">
                {courseInforCloud.map((item, index) => {
                  return (
                    <div className="flex  flex-wrap justify-center items-center w-[24%] mt-2">
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
            <div className=" flex flex-col">
              <span className="text-xl font-semibold py-10 uppercase text-blue-600">Thực hành phân tích dữ liệu</span>
              <div className="flex   items-center w-full flex-wrap ">
                {courseInforDataAnalyst.map((item, index) => {
                  return (
                    <div className="flex  flex-wrap justify-center items-center w-[24%] mt-2">
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
            <div className=" flex flex-col">
              <span className="text-xl font-semibold py-10 uppercase text-blue-600">Thực hành Drone/UAV</span>
              <div className="flex   items-center w-full flex-wrap ">
                {courseInforDronevsUav.map((item, index) => {
                  return (
                    <div className="flex  flex-wrap justify-center items-center w-[24%] mt-2">
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
      </div>
    </div>
  );
};

export default AllProduct;
