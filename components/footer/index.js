import Link from "next/link";

import styles from "../footer/footer.module.css";

function Footer() {
  return (
    <div>
      <footer className={styles.foot}>
        <div>
          <h3>
            <Link
              href={{
                pathname: "/",
              }}
            >
              Web Design By LeSaWi Services - &copy;2018 - 2022
            </Link>
          </h3>
        </div>
        <div>
          <p className="text-center">
            <strong>
              Wim:
              <br />
              +27 (0) 61 525 0362
              <br />
              +27 (0) 71 099 2811
            </strong>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
