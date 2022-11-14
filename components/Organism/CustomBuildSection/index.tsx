import Link from "next/link";
import React, { useCallback, useState, useEffect } from "react";
import ProductItem from "../../ProductItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper";
import { getProductsByCategory } from "../../../services/fakestore-service";

export default function CustomBuildSection({ isMobile, categoryName }) {
  const [productList, setProductList] = useState([]);

  const getProductCategoryList = useCallback(async () => {
    const { data } = await getProductsByCategory(categoryName);
    setProductList(data);
  }, [getProductsByCategory]);

  useEffect(() => {
    getProductCategoryList();
  }, []);

  return (
    <div className="flex flex-row md:flex-col mx-auto max-w-7xl p-4">
      <div className="bg-gray-500 p-4 text-white tracking-wide flex items-center justify-center w-2/5 md:w-full bg-[url('/bg-section-1.svg')] bg-cover bg-right-bottom md:bg-right">
        <div className="flex flex-col justify-center items-center space-y-4 justify-items-center	">
          <h4 className="text-base md:text-2xl font-bold px-2 md:px-4 capitalize">
            {categoryName}
          </h4>
          <Link
            href={{
              pathname: `products`,
              query: { categories: categoryName, page: "1" },
            }}
            className="text-xs underline md:px-4"
          >
            See All Products
          </Link>
        </div>
      </div>
      <Swiper
        slidesPerView={isMobile ? "auto" : 5}
        spaceBetween={30}
        freeMode={true}
        centeredSlides={false}
        modules={[FreeMode]}
        className="mySwiper w-3/5 md:w-full my-4 flex"
      >
        {productList?.map((item, idx) => (
          <SwiperSlide key={idx}>
            <ProductItem
              id={item.id}
              name={item.title}
              image={item.image}
              rating={item.rating.rate}
              reviewCount={item.rating.count}
              price={`${item.price}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
