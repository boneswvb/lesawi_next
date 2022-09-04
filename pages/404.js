function NotFoundPage() {
  return (
    <div className="container text-center mt-5">
      <h1>This page cannot be found!</h1>
      <h2 className="mt-5">
        Make sure that you are connected to the internet and then try again.
      </h2>
      <a href="mailto:webmaster@lesawi.co.za">
        <p>
          If there is still a problem please let the web master know about your
          problem <u>by clicking this link</u>.
        </p>
      </a>
    </div>
  );
}

export default NotFoundPage;
