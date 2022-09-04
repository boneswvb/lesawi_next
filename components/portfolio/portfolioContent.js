import Img from "next/image";

function portfolioContent(portdata) {
  return (
    <div>
      {portdata.portdata.map((data) => {
        return (
          <section className="text-center" key={data.id}>
            <h2 className="text-center pt-5">
              <a href={data.titleHref}>
                <strong>{data.title}</strong>
              </a>
            </h2>
            <p>
              <span>
                <a href={data.titleHref}>
                  <Img
                    width={1000}
                    height={600}
                    src={data.img}
                    alt={data.alt}
                  />
                </a>
              </span>
              <br />
              <span>
                This website is owned by
                <a href={data.ownHref}>
                  <strong>{data.owner}</strong>
                </a>
                {data.description}
              </span>
            </p>
          </section>
        );
      })}
    </div>
  );
}
export default portfolioContent;
