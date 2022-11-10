import React from "react";
import Featured from "../../components/Featured";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ShoppingCartSection from "../../components/Organism/ShoppingCartSection";
import jwtDecode from "jwt-decode";

export default function ShoppingCart({ user }) {
  console.log("SSR : ", user);
  return (
    <>
      <Navbar />
      <ShoppingCartSection />
      <Featured />
      <Footer />
    </>
  );
}

export async function getServerSideProps({ req }) {
  const { authToken } = req.cookies;
  if (!authToken) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const jwtToken = Buffer.from(authToken, "base64").toString("ascii");
  const payload = jwtDecode(jwtToken);

  return {
    props: {
      user: payload,
    },
  };
}
