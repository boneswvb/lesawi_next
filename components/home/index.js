import Head from "next/head";
// import Link from "next/link";

import Header from "../header";
import Navigation from "../nav/Nav";
import Footer from "../footer";

import styles from "../home/home.module.css";

function HomePage() {
  return (
    <div className={styles.tester}>
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
        <div className={styles.backGround}>
          <main className="containiner">
            <br />
            <br />
            <h1 className={styles.center}>Welcome to LeSaWi Services</h1>
            <be />
            <h2 className={styles.center} style={{ color: "#f00" }}>
              ??? FREE WEBSITES & WEB APPS FOR ALL ???
            </h2>
            <h3 className={styles.center} style={{ color: "green" }}>
              ?? IS THAT POSSIBLE ??
            </h3>
            <section>
              <a href="mailto:info@lesawi.co.za?subject=Quote Request From Lesawi Website&body=Please add as much information as you can to make the initial estimate as close as possible to correct">
                <h3 className={styles.quote}>
                  Click here to request your free no obligation quote today!
                </h3>
              </a>
            </section>
            <section className={styles.displayInline}>
              <section className={styles.circle}>
                <p className={styles.displayInlineItem}>
                  <strong className={styles.circleHeading}>
                    Free web sites & apps
                  </strong>
                  <br />
                  Get your free web site or app from LeSaWi Services and{" "}
                  <strong>
                    only pay for your hosting from as little as R 175.00
                  </strong>{" "}
                  <br />
                  per month.
                  <br />
                  You get 2 custom email addresses free.
                </p>
              </section>
              <section className={styles.square}>
                <p className={styles.displayInlineItem}>
                  <strong className={styles.circleHeading}>
                    Affordable Web Hosting
                  </strong>
                  <br />
                  Get affordable hosting from LeSaWi Services to host your own
                  website. Starting from as little as R 220.00 per month with 5
                  custom email adressess.
                </p>
              </section>
            </section>
            <section className={styles.displayInline}>
              <section className={styles.square}>
                <p className={styles.displayInlineItem}>
                  <strong className={styles.circleHeading}>
                    DECEMBER FESTIVE SEASON SPECIAL
                  </strong>
                  <br />
                  Confirm your order before 15 December 2022 and stand a chance
                  to get your first 3 months for free. Three lucky winners will
                  be announced on 16 Dec 2022.
                </p>
              </section>
              <section className={styles.circle}>
                <p className={styles.displayInlineItem}>
                  <strong className={styles.circleHeading}>
                    Discount for advance payments
                  </strong>
                  <br />
                  1. Pay for three months in advance &ndash;{" "}
                  <strong>Get 2% discount</strong>
                  <br />
                  2. Pay for six months in advance &ndash;{" "}
                  <strong> Get 5% discount</strong>
                  <br />
                  3. Pay for twelve months in advance &ndash;
                  <strong> Get 10% discount</strong>
                </p>
              </section>
            </section>
            <br />
            <section className={styles.center}>
              <button type="button" className={styles.button}>
                <a href="mailto:info@lesawi.co.za?cc=boneswvb@gmail.com&subject=Internet-inquiry&body=Please provide us with your name, a contact number, tell us about your inquiry and a convenient time to call you.">
                  <h3>I need more information</h3>
                </a>
              </button>
              <button type="button" className={styles.button}>
                <a href="mailto:info@lesawi.co.za?cc=boneswvb@gmail.com&subject=Internet-inquiry&body=Please provide us with your name, a contact number and a convenient time to call you.">
                  <h3>Please call me</h3>
                </a>
              </button>
            </section>
            <section className={styles.whatWeDoBox}></section>
            <section className={styles.gridContainer}>
              <div className={styles.item1}>
                <h1 style={{ fontSize: 100 }} className={styles.circleHeading}>
                  What we offer
                </h1>
              </div>
              <div className={styles.item2}>
                <p>
                  All websites &amp;
                  <br />
                  Apps are
                  <br />
                  compatable with
                </p>
                <ul className={styles.ul}>
                  <li>Large Screen</li>
                  <li>Small Screens</li>
                  <li>Desktop</li>
                  <li>Tablet</li>
                  <li>Cell phones</li>
                </ul>
              </div>
              <div className={styles.item3}>
                <p>
                  Web site
                  <br />& Web App
                  <br />
                  development
                </p>
              </div>
              <div className={styles.item4}>
                <p>No upfront cost!!!</p>
              </div>
              <div className={styles.item5}>
                <p>Single page access apps</p>
              </div>
              <div className={styles.item6}>
                <p>Multiple page access apps</p>
              </div>
              <div className={styles.item7}>
                <p>Affordable Web Hosting</p>
              </div>
            </section>
          </main>
          <br />
          <br />
          <br />
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default HomePage;
