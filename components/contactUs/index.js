import Head from "next/head";

import Header from "../header";
import Navigation from "../nav/Nav";
import Footer from "../footer";

import { FcCellPhone } from "react-icons/fc";
import { BsWhatsapp } from "react-icons/bs";
import { SiGooglemeet } from "react-icons/si";
import { SiGotomeeting } from "react-icons/si";
import { MdOutlineAlternateEmail } from "react-icons/md";

function ContactUs() {
  return (
    <div className="container">
      <Head>
        <meta
          name="description"
          content="Welcome to Lesawi Services. Your one stop Wepsite and Web Application creators."
        />
        <meta
          name="keywords"
          content="Lesawi, Lesai Services, Website development, Web application development, Contact us, web app development"
        />
        <title>Contact LeSaWi Services</title>
      </Head>

      <section>
        <Header />
        <Navigation />
      </section>

      <main className="main">
        <h1 className="title">LeSaWi Services - Contact Us</h1>
        <section>
          <div>
            <header className="text-center">
              <h2>Ways you can contact us.</h2>
              <p>Please feel free to contact us on any of the below options.</p>
            </header>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col" style={{ width: "18rem" }}>
                    &nbsp;
                  </th>
                  <th scope="col" style={{ width: "36rem" }}>
                    &nbsp;
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <h3>
                      <MdOutlineAlternateEmail
                        className="icon"
                        style={{
                          top: "20px",
                          right: "20px",
                          marginRight: "10px",
                        }}
                        size="30px"
                        color="darkgreen"
                      />
                      Email
                    </h3>
                  </th>
                  <td>
                    <p>
                      We prefer that clients contact us via email on
                      <strong>
                        <a href="mailto:info@lesawi.co.za?cc=boneswvb@gmail.com&subject=Internet-inquiry">
                          info@lesawi.co.za
                        </a>
                      </strong>
                      click the link below. This way we are sure that we get all
                      the relevant information to assist you effectively from
                      the start.
                      <br />
                      <button type="button" className="btn btn-link">
                        <a href="mailto:info@lesawi.co.za?cc=boneswvb@gmail.com&subject=Internet-inquiry">
                          Email us with your enquiry.
                        </a>
                      </button>
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <h3>
                      <FcCellPhone
                        className="icon"
                        style={{
                          top: "20px",
                          right: "20px",
                        }}
                        size="40px"
                        color="red"
                      />
                      Give us a call
                    </h3>
                  </th>
                  <td>
                    <p>
                      You can call Wim on
                      <br />
                      <strong>
                        +27 (0) 71 099 2811
                        <br />
                        +27 (0) 61 525 0362
                      </strong>
                      .
                      <br />
                      If he is not available he will call you back as soon as
                      possible.
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <h3>
                      <BsWhatsapp
                        className="icon"
                        style={{
                          top: "20px",
                          right: "20px",
                          marginRight: "10px",
                        }}
                        size="30px"
                        color="blue"
                      />
                      Whatsapp call or message.
                    </h3>
                  </th>
                  <td>
                    <p>
                      You can call or message Wim on
                      <br />
                      <strong>
                        +27 (0) 71 099 2811
                        <br />
                        +27 (0) 61 525 0362
                      </strong>
                      .
                      <br />
                      If he is not available he will call you back as soon as
                      possible.
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <h3>
                      <SiGooglemeet
                        className="icon"
                        style={{
                          top: "20px",
                          right: "20px",
                          marginRight: "10px",
                        }}
                        size="30px"
                        color="red"
                      />
                      Google Meet
                    </h3>
                  </th>
                  <td>
                    <p>
                      If pre-arranged we are very happy to meet with you on
                      Google Meet. You can send us a link or we can send you a
                      link.
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <h3>
                      <SiGotomeeting
                        className="icon"
                        style={{
                          top: "20px",
                          right: "20px",
                          marginRight: "10px",
                        }}
                        size="30px"
                        color="red"
                      />
                      Alternative Online Meeting Services
                    </h3>
                  </th>
                  <td>
                    <p>
                      We would gladly meet with you on any other acceptable
                      platforms for a meeting. Should there be any cost involve,
                      the cost will be for the customer.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
export default ContactUs;
