import path from "path";
import fs from "fs/promises";

import Portfolio from "../components/portfolio/index";

function PortfolioPage(props) {
  return (
    <div>
      <Portfolio portfolioData={props.portfolioData} />
    </div>
  );
}

export default PortfolioPage;

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "portfolioData.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  // if (!data) {
  //   redirect: {
  //     destination: "./something";
  //   }
  // }

  if (data.portfolio.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      portfolioData: data.portfolio,
    },
    revalidate: 1,
  };
}
