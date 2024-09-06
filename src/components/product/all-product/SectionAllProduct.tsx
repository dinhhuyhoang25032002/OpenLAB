import ProductDescription from "@components/product/ProductDescription";

import { productType } from "@services/data";
type sectionAllProductProp = {
  title: string;
  data: productType[];
};

const SectionAllProduct = ({ title, data }: sectionAllProductProp) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-7 py-10  flex-col ">
      <div className="text-3xl font-semibold">{title}</div>
      <div className="flex flex-wrap justify-center items-center py-10 px-10">
        {data.map((item, index) => {
          return (
            <div data-aos="fade-up" key={index} className="w-[30%] sm:w-[45%] xs:w-[94%]">
              <ProductDescription
                id={index}
                srcImg={item.image}
                typeApp={"App"}
                nameProduct={item.nameProduct}
                description={item.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionAllProduct;
