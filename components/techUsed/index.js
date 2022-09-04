import Head from "next/head";
import Img from "next/image";

import Header from "../header/index";
import Navigation from "../nav/Nav";
import Footer from "../footer";

import styles from "../techUsed/techUsed.module.css";

function TechUsed() {
  return (
    <div className="container">
      <Head>
        <meta
          name="description"
          content="Welcome to Lesawi Services. Your one stop Wepsite and Web Application creators."
        />
        <meta
          name="keywords"
          content="Lesawi, Lesai Services, Website development, Web application development, Tech used, technology used,Postgres, Data base, HTML, CSS, Next.js, React.js, Bootstrap 5, web app development"
        />
        <title>Contact LeSaWi - The Technology In Our Projects</title>
      </Head>

      <section>
        <Header />
        <Navigation />
      </section>

      <main className="main">
        <h3 className="title">LeSaWi Services - Technology Used</h3>
        <h2> Web development </h2>
        <p>
          We only use the latest available technologies for the creation of your
          website or web application to make sure that your customers get the
          best user experience possible.
        </p>
        <p>
          As the owner of a website it is important to know what is going into
          your website should you wish to change from your current service
          provider for what so ever reason. You do not want to have a website or
          webapp that is using scares technology as it will be difficult or
          expensive to change suppliers.
        </p>
        <p>
          Below are some of the different technologies that go into a LeSaWi
          website or webapp. Not all is listed below and you are more than
          welcome to ask should you like to have more info on the other
          technologies not mentioned here. We are also making use of SCSS,
          Node-mailer, Helmet for React and more.
        </p>
        <p>
          <b>
            <sub>Click on the below icons for more details.</sub>
          </b>
        </p>
        <ul className={styles.row}>
          <li>
            <a href="#react">
              <span>
                <Img
                  src="/images/react.png"
                  alt="react"
                  width={50}
                  height={50}
                />
              </span>
              React.js
            </a>
          </li>
          <li>
            <a href="#sql">
              <span>
                <Img
                  src="/images/postgresql.png"
                  alt="postgresql"
                  width={50}
                  height={50}
                />
                SQL
              </span>
            </a>
          </li>
          <li>
            <a href="#bootstrap">
              <span>
                <Img
                  src="/images/bootstrap.png"
                  alt="bootstrap"
                  width={50}
                  height={50}
                />
                Bootstrap
              </span>
            </a>
          </li>
          <br />
          <li>
            <a href="#js">
              <span>
                <Img src="/images/js.png" alt="js" width={50} height={50} />
                JavaScript
              </span>
            </a>
          </li>
          <li>
            <a href="#html">
              <span>
                <Img src="/images/html.png" alt="html" width={50} height={50} />
                HTML
              </span>
            </a>
          </li>
          <li>
            <a href="#css">
              <span>
                <Img src="/images/css.png" alt="css" width={50} height={50} />
                CSS
              </span>
            </a>
          </li>
        </ul>

        <section id="two">
          <h2 className="text-center">Other Technologies</h2>
          <section className="d-flex flex-row">
            <div>
              <Img
                src="/images/irus.webp"
                width={250}
                height={250}
                alt="Other Technologies"
              />
            </div>
            <div className="d-flex justify-content-center p-3">
              <p>
                We make use of a wide variety of
                <a href="https://en.wikipedia.org/wiki/Open_source">
                  open source products
                </a>
                available to the programming world to create the best web sites
                and web apps for our users. This ensure that the end user have a
                pleasant user experience and will return to the web site or web
                app. Below are some of the technologies that we use in the
                production of a web site or web app.
              </p>
            </div>
          </section>

          <h2 className="text-center">React</h2>
          <section id="react" section className="d-flex flex-row-reverse">
            <div className="mt-3">
              <Img
                src="/images/react.png"
                width={350}
                height={350}
                alt="react1"
              />
            </div>
            <div className="d-flex justify-content-center p-3">
              <p>
                <u>
                  <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)">
                    For more information see - Wikipedia
                  </a>
                </u>
                React (also known as React.js or ReactJS) is a free and
                open-source front-end JavaScript library for building user
                interfaces based on UI components. It is maintained by Meta
                (formerly Facebook) and a community of individual developers and
                companies. React can be used as a base in the development of
                single-page or mobile applications. However, React is only
                concerned with state management and rendering that state to the
                DOM, so creating React applications usually requires the use of
                additional libraries for routing, as well as certain client-side
                functionality.
              </p>
            </div>
          </section>
          <h2 className="text-center">PostgreSQL</h2>
          <section id="sql" className="d-flex flex-row">
            <div className="mt-4">
              <Img
                src="/images/postgresql.png"
                width={350}
                height={350}
                alt="postgresql"
              />
            </div>
            <div className="d-flex justify-content-center p-3">
              <p>
                <u>
                  <a href="https://en.wikipedia.org/wiki/PostgreSQL">
                    For more information see - Wikipedia
                  </a>
                </u>
                PostgreSQL also known as Postgres, is a free and open&#45;source
                relational database management system &#40;RDBMS&#41;
                emphasizing extensibility and SQL compliance. It was originally
                named POSTGRES, referring to its origins as a successor to the
                Ingres database developed at the University of California,
                Berkeley. In 1996, the project was renamed to PostgreSQL to
                reflect its support for SQL. After a review in 2007, the
                development team decided to keep the name PostgreSQL and the
                alias Postgres.
                <br /> PostgreSQL features transactions with Atomicity,
                Consistency, Isolation, Durability &#40;ACID&#41; properties,
                automatically updatable views, materialized views, triggers,
                foreign keys, and stored procedures. It is designed to handle a
                range of workloads, from single machines to data warehouses or
                Web services with many concurrent users.
              </p>
            </div>
          </section>
          <h2 className="text-center">Bootstrap</h2>
          <section id="bootstrap" className="d-flex flex-row-reverse p-4">
            <div className="mt-2">
              <Img
                src="/images/bootstrap.png"
                width={350}
                height={350}
                alt="bootstrap1"
              />
            </div>
            <div className="d-flex justify-content-center">
              <p>
                <u>
                  <a href="https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)">
                    For more information see - Wikipedia
                  </a>
                </u>
                Bootstrap is an HTML, CSS &amp; JS Library that focuses on
                simplifying the development of informative web pages (as opposed
                to web apps). The primary purpose of adding it to a web project
                is to apply Bootstrap&apos;s choices of color, size, font and
                layout to that project. As such, the primary factor is whether
                the developers in charge find those choices to their liking.
                Once added to a project, Bootstrap provides basic style
                definitions for all HTML elements. The result is a uniform
                appearance for prose, tables and form elements across web
                browsers. In addition, developers can take advantage of CSS
                classes defined in Bootstrap to further customize the appearance
                of their contents.
              </p>
            </div>
          </section>
          <h2 className="text-center">Java Script</h2>
          <section id="js" className="d-flex d-flex-row">
            <div className="mt-5">
              <Img src="/images/js.png" width={350} height={400} alt="js1" />
            </div>
            <div className="d-flex justify-content-center p-3">
              <p>
                <u>
                  <a href="https://en.wikipedia.org/wiki/JavaScript">
                    For more information see - Wikipedia
                  </a>
                </u>
                JavaScript is often abbreviated JS, is a programming language
                that is one of the core technologies of the World Wide Web,
                alongside HTML and CSS. Over 97&#37; of websites use JavaScript
                on the client side for web page behavior, often incorporating
                third&#45;party libraries. All major web browsers have a
                dedicated JavaScript engine to execute the code on users&#39;
                devices. JavaScript is a high&#45;level, often
                just&#45;in&#45;time compiled language that conforms to the
                ECMAScript standard. It has dynamic typing, prototype&#45;based
                object&#45;orientation, and first&#45;class functions. It is
                multi&#45;paradigm, supporting event&#45;driven, functional, and
                imperative programming styles. It has application programming
                interfaces &#40;APIs&#41; for working with text, dates, regular
                expressions, standard data structures, and the Document Object
                Model &#40;DOM&#41;.
              </p>
            </div>
          </section>
          <h2 className="text-center">HTML</h2>
          <section id="html" className="d-flex flex-row-reverse">
            <div className="mt-4">
              <Img
                src="/images/html.png"
                width={350}
                height={350}
                alt="html1"
              />
            </div>
            <div className="d-flex justify-content-center p-3">
              <p>
                <u>
                  <a href="https://en.wikipedia.org/wiki/HTML5">
                    For more information see - Wikipedia
                  </a>
                </u>
                HTML5 is a markup language used for structuring and presenting
                content on the World Wide Web. It is the fifth and last major
                HTML version that is a World Wide Web Consortium &#40;W3C&#41;
                recommendation. The current specification is known as the HTML
                Living Standard. It is maintained by the Web Hypertext
                Application Technology Working Group &#40;WHATWG&#41;, a
                consortium of the major browser vendors &#40;Apple, Google,
                Mozilla, and Microsoft&#41;.
                <br />
                HTML5 includes detailed processing models to encourage more
                interoperable implementations; it extends, improves, and
                rationalizes the markup available for documents and introduces
                markup and application programming interfaces &#40;APIs&#41; for
                complex web applications. For the same reasons, HTML5 is also a
                candidate for cross-platform mobile applications because it
                includes features designed with low-powered devices in mind.
              </p>
            </div>
          </section>
          <h2 className="text-center">CSS</h2>
          <section id="css" className="d-flex flex-row">
            <div className="mt-4">
              <Img src="/images/css.png" width={350} height={450} alt="css1" />
            </div>
            <div className="d-flex justify-content-center p-3">
              <p>
                <u>
                  <a href="https://en.wikipedia.org/wiki/CSS">
                    For more information see - Wikipedia
                  </a>
                </u>
                Cascading Style Sheets &#40;CSS&#41; is a style sheet language
                used for describing the presentation of a document written in a
                markup language such as HTML. CSS is a cornerstone technology of
                the World Wide Web, alongside HTML and JavaScript.
                <br />
                CSS is designed to enable the separation of presentation and
                content, including layout, colors, and fonts. This separation
                can improve content accessibility; provide more flexibility and
                control in the specification of presentation characteristics;
                enable multiple web pages to share formatting by specifying the
                relevant CSS in a separate .css file, which reduces complexity
                and repetition in the structural content; and enable the .css
                file to be cached to improve the page load speed between the
                pages that share the file and its formatting.
              </p>
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default TechUsed;
