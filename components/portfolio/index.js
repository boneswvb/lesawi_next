import PortfolioContent from "./portfolioContent";

import Head from "next/head";

import Header from "../header";
import Navigation from "../nav/Nav";
import Footer from "../footer/index";

function Portfolio(props) {
  const portData = props.portfolioData.map((data) => {
    return data;
  });
  return (
    <div className="container">
      <Head>
        <meta
          name="description"
          content="Welcome to Lesawi Services. Your one stop Wepsite and Web Application creators."
        />
        <meta
          name="keywords"
          content="Lesawi, Lesai Services, Website development, Web application development, Portfolio of Lesawi services, web app development"
        />
        <title>Contact LeSaWi Portfolio</title>
      </Head>

      <section>
        <Header />
        <Navigation />
      </section>

      <section>
        <main className="main">
          <h1 className="title">LeSaWi Services Portfolio</h1>
          <PortfolioContent portdata={portData} />
        </main>
        <Footer />
      </section>
    </div>
  );
}

export default Portfolio;
