import Image from "next/image";
import React from "react";
import ButtonTheme from "../../../components/Button";
import Featured from "../../../components/Featured";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import DetailProduct from "../../../components/Organism/DetailProduct";
import {
  getAllProduct,
  getProductById,
} from "../../../services/fakestore-service";

export default function ProductDetails({ data }) {
  return (
    <>
      <Navbar />
      <DetailProduct
        id={data.id}
        name={data.title}
        description={data.description}
        image={data.image}
        price={data.price}
      />
      <Featured />

      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const { data } = await getAllProduct();
  const paths = data.map((item) => ({
    params: {
      id: item.id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const { data } = await getProductById(id);
  return {
    props: {
      data,
    },
  };
}
