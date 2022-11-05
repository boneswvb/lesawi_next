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
              Web APP &amp; Website Design By LeSaWi Services - &copy;2018 -
              2022
            </Link>
          </h3>
        </div>
        <div>
          <p className="text-center">
            <strong>
              Call Wim on:
              <br />
              +27 (0) 61 525 0362
            </strong>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
