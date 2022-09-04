import Head from "next/head";

import Header from "../header";
import Navigation from "../nav/Nav";
import Footer from "../footer";

import Img from "next/image";

import styles from "../home/home.module.css";

function HomePage() {
  return (
    <div className="container">
      <Head>
        <title>LeSaWi Services - Website and wep-app development</title>
        <meta name="description" content="Website and web-app development" />
        <link rel="icon" href="../images/favicon.ico" />
      </Head>

      <section>
        <Header />
        <Navigation />
      </section>

      <main className="main">
        <h1 className="text-center">Welcome to LeSaWi Services</h1>
        <span>
          <Img
            width={800}
            height={400}
            src="/images/pexels-mateusz-dach-450035.jpg"
            alt="Varius computers and telephones"
          />
        </span>
        <sub>
          <u>Photo by Mateusz Dach.</u>
        </sub>
        <br />
        <h2 className="text-center">some text here</h2>
        <br />
      </main>
      <Footer />
    </div>
  );
}
export default HomePage;
