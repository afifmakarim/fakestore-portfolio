import React from "react";
import Carousel from "../../components/Carousel";
import Featured from "../../components/Featured";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Pagination from "../../components/Pagination";
import ProductItem from "../../components/ProductItem";
import { getAllProduct } from "../../services/fakestore-service";

export default function Results({ data }) {
  return (
    <>
      <Navbar />
      <Carousel />
      <div className="max-w-7xl mx-auto">
        {data.length === 0 && (
          <p className="flex justify-center py-8">Data Not Found</p>
        )}

        {data.length > 0 && <h4 className="px-8 py-4">Search Results</h4>}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {data?.map((item, idx) => (
            <ProductItem
              key={idx}
              id={item.id}
              name={item.title}
              image={item.image}
              rating={item.rating.rate}
              reviewCount={item.rating.count}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <Featured />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const { search_query } = context.query;
  const { data } = await getAllProduct();

  const filteredData = data.filter((item) => {
    return Object.values(item)
      .join("")
      .toLowerCase()
      .includes(search_query?.toLowerCase());
  });

  const sorting = search_query.toLowerCase() === "all" ? data : filteredData;

  // Pass data to the page via props
  return { props: { data: sorting } };
}
