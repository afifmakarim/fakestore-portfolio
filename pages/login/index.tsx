import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Featured from "../../components/Featured";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import LoginSection from "../../components/Organism/LoginSection";
import Sponsored from "../../components/Sponsored";
import Cookies from "js-cookie";

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("authToken");

    if (token) {
      const jwtToken = atob(token);

      if (jwtToken) {
        router.push("/");
      }
    }
  }, []);

  return (
    <>
      <Navbar />
      <LoginSection />
      <Featured />
      <Footer />
    </>
  );
}
