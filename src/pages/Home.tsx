import React from "react";
import Header from "../components/Header/Header";
import Layout from "../main";
import Pizzas from "../components/Pizzas/Pizzas";

function Home() {
  return (
    <>
      <Layout>
        <Pizzas/>
      </Layout>
    </>
  );
}
export default Home;
