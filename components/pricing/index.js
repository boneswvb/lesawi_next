import Head from "next/head";
import Link from "next/link";

import Header from "../header";
import Navigation from "../nav/Nav";
import Footer from "../footer";

function Pricing() {
  return (
    <div className="container">
      <Head>
        <meta
          name="description"
          content="Welcome to Lesawi Services. Your one stop Wepsite and Web Application creators."
        />
        <meta
          name="keywords"
          content="Lesawi, Lesai Services, Website development, Web application development, Pricing, Prices, web app development"
        />
        <title>Contact LeSaWi Prices</title>
      </Head>

      <section>
        <Header />
        <Navigation />
      </section>

      <main className="main">
        <h1 className="title">LeSaWi Services - Pricing</h1>

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col" style={{ width: "18rem" }}>
                Type
              </th>
              <th scope="col" style={{ width: "36rem" }}>
                Price and Description
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pay As You Go</td>
              <td>
                <p>
                  Starting from as little as R 250.00 per month we will create a
                  web site for you, publish the web site and maintain the web
                  site for you. The fee is payable up front on a monthly basis.
                  Depending on the option that you select you get maintenance
                  and support from 1 hour per month at no extra cost.
                  <br />
                  <Link
                    href={{
                      pathname: "/contact-us-page",
                    }}
                  >
                    More info
                  </Link>
                </p>
              </td>
            </tr>
            <tr>
              <td>Basic One Pager Web site</td>
              <td>
                A basic 1 pager web site that contain all the below
                <br />
                from as little as R 750.00
                <ul>
                  <li>
                    Basic Custom Design Long page with top menu (no dropdowns)
                  </li>
                  <li>
                    Responsive &ndash; Working on: Desk top, Lap top, Tablet and
                    Cell phone
                  </li>
                  <li>Add Image Gallery for R 250.00 per 30 photos</li>
                  <li>Basic Contact form - no Google maps</li>
                  <li>Social buttons</li>
                  <li>No data base</li>
                  <li>Extras to be quoted</li>
                  <li style={{ listStyleType: "none" }}>
                    <Link
                      href={{
                        pathname: "/contact-us-page",
                      }}
                    >
                      More Info
                    </Link>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Personal Web site/Web App</td>
              <td>
                <p>
                  These are normally for people who like blogging or making
                  videos for training or used for a hobby.
                </p>
                <p>
                  We will assess your request and quote you. You have the option
                  to make use of the pay as you go option or a once off charge.
                  Should you wish to make use of the once off option we can
                  always add a maintenance contract to make life easier for you
                  to keep your web site or app up to date.
                  <br />
                  Starting from R 2 000.00
                  <br />
                  <Link
                    href={{
                      pathname: "/contact-us-page",
                    }}
                  >
                    More Info
                  </Link>
                </p>
              </td>
            </tr>
            <tr>
              <td>Small Web site/Web App</td>
              <td>
                <p>
                  A small web site or web app have 3 to 4 pages with no database
                  linked to the web site or web app. Normally used for new
                  startups.
                  <br />
                  <b>
                    <u>Reduced to R 3 000.00 for a limited time only!</u>
                  </b>
                </p>
                <p>
                  We will assess your request and quote you. You have the option
                  to make use of the pay as you go option or a once off charge.
                  Should you wish to make use of the once off option we can
                  always add a maintenance contract to make life easier for you
                  to keep your web site or app up to date.
                  <br />
                  <Link
                    href={{
                      pathname: "/contact-us-page",
                    }}
                  >
                    More Info
                  </Link>
                </p>
              </td>
            </tr>
            <tr>
              <td>Medium Web site/Web App</td>
              <td>
                <p>
                  A medium web site or web app have 5 to 10 pages with or
                  without a database linked to the web site or web app. Normally
                  used for businesses that has been around for a while and is
                  now expanding their products and or services. Starting from R5
                  000.00
                </p>
                <ul>
                  <li>Basic Custom Design with a top or side menu</li>
                  <li>
                    Responsive &ndash; Working on: Desk top, Lap top, Tablet and
                    Cell phone
                  </li>
                  <li>Add Image Gallery @ only R 0.50 per photo</li>
                  <li>
                    Advance Contact form - Can send the form to multiple emails
                  </li>
                  <li>Social buttons</li>
                  <li>Data base to be quoted</li>
                </ul>
                <p>
                  We will assess your request and quote you. We can add a
                  maintenance contract to make life easier for you to keep your
                  web site or app up to date.
                  <br />
                  <Link
                    href={{
                      pathname: "/contact-us-page",
                    }}
                  >
                    More Info
                  </Link>
                </p>
              </td>
            </tr>
            <tr>
              <td>Large Web site/Web App</td>
              <td>
                <p>
                  A large web site or web app have more than 10 pages with or
                  without a database linked to the web site or web app. Normally
                  used for businesses that has been around for a couple of years
                  and is well established now expanding their products and or
                  services to a larger audience.
                </p>
                <p>
                  We will assess your request and quote you.
                  <br />
                  <Link
                    href={{
                      pathname: "/contact-us-page",
                    }}
                  >
                    More Info
                  </Link>
                </p>
              </td>
            </tr>
            <tr>
              <td>Corporate Web site/Web App</td>
              <td>
                <p>
                  A corporate web site or web app is for the bigger spenders
                  that know what they need. These sites are very specialized and
                  have a corporate theme that is present on all the pages and
                  conform to strict development rules and regulations. Typically
                  used by large companies that has local and or international
                  clients.
                </p>
                <p>
                  We will assess your request and quote you.
                  <br />
                  <Link
                    href={{
                      pathname: "/contact-us-page",
                    }}
                  >
                    More Info
                  </Link>
                </p>
              </td>
            </tr>
            <tr>
              <td>Online Store</td>
              <td>
                <p>
                  An Online Store web site or web app is the best way to market
                  your products and services and is more popular today as it is
                  very convenient. The world is rapidly changing to rather bay
                  online than to have to go to town. This also makes payments
                  easy for the customers and ensures that you get paid before
                  delivering.
                </p>
                <p>
                  We will assess your request and quote you.
                  <br />
                  <Link
                    href={{
                      pathname: "/contact-us-page",
                    }}
                  >
                    More Info
                  </Link>
                </p>
              </td>
            </tr>
            <tr>
              <td>Info Collection / Research Web site/Web App</td>
              <td>
                <p>
                  An Info Collection / Research web site or web app is a good
                  option for people that collect a lot of data. These normally
                  have a database to store the information with various user
                  interfaces to work with the data and are very specifically
                  designed to give the info back in a specific ways.
                </p>
                <p>
                  We will assess your request and quote you. You have the option
                  to make use of the pay as you go option or a once off charge.
                  Should you wish to make use of the once off option we can
                  always add a maintenance contract to make life easier for you
                  to keep your web site or app up to date.
                  <br />
                  <Link
                    href={{
                      pathname: "/contact-us-page",
                    }}
                  >
                    More Info
                  </Link>
                </p>
              </td>
            </tr>
            <tr>
              <td>Web site/Web App Not Mentioned Here</td>
              <td>
                <p>
                  We will assess your request and quote you. You have the option
                  to make use of the pay as you go option or a once off charge.
                  Should you wish to make use of the once off option we can
                  always add a maintenance contract to make life easier for you
                  to keep your web site or app up to date.
                  <br />
                  <Link
                    href={{
                      pathname: "/contact-us-page",
                    }}
                  >
                    More Info
                  </Link>
                </p>
              </td>
            </tr>
            <tr>
              <td>Web site/Web App Upgrages and Maintenance</td>
              <td>
                <p>
                  We will gladly look at your current web site or web app and
                  discuss the best options to upgrade your current web site or
                  web app starting from as little as R 150.00 per hour depending
                  of the difficulty of the work. All other maintenance work will
                  be charged at R 250.00 per hour.
                  <br />
                  <Link
                    href={{
                      pathname: "/contact-us-page",
                    }}
                  >
                    More Info
                  </Link>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="text-center">
          All web sites and web apps will be supported for a period of six month
          after completion at no extra cost for any possible errors and it will
          not form part of the maintenance contract if one is in place. We proud
          our self&apos;s at delivering the correct product on time. All our
          products are produced with a phone first approach.
        </p>
      </main>

      <Footer />
    </div>
  );
}

export default Pricing;
