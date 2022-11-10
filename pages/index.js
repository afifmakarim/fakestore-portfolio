import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Carousel from "../components/Carousel";
import Ads from "../components/Ads";
import NewProductSection from "../components/Organism/NewProductSection";
import CustomBuildSection from "../components/Organism/CustomBuildSection";
import Sponsored from "../components/Sponsored";
import Reviews from "../components/Reviews";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import { useMediaQuery } from "react-responsive";

export default function Home() {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return (
    <>
      <Head>
        <title>Fake Store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      </Head>

      <Navbar />
      <Carousel />
      <NewProductSection />
      <Ads />
      <CustomBuildSection isMobile={isMobile} categoryName="electronics" />
      <CustomBuildSection isMobile={isMobile} categoryName="jewelery" />
      <CustomBuildSection isMobile={isMobile} categoryName="men's clothing" />
      <CustomBuildSection isMobile={isMobile} categoryName="women's clothing" />
      <Sponsored />
      <Reviews />
      <Featured />
      <Footer />
    </>
  );
}
