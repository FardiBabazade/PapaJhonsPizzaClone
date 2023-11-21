import React from "react";
import Header from "../components/Header/Header";
import Layout from "../main";
import CompanySlider from "../components/CompanySlider/CompanySlider";

function Home() {
  return (
    <>
      <Layout>
        <CompanySlider/>
      </Layout>
    </>
  );
}
export default Home;