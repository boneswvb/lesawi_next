import Img from "next/image";

import styles from "../header/header.module.css";

function Header() {
  return (
    <div className={styles.head}>
      <div className="mt-4">
        <span>
          <Img
            width={70}
            height={70}
            src="/images/ls.jpg"
            alt="Lesawi Services Logo"
          />
        </span>
      </div>
      <div className={styles.heading}>
        <h3>
          LeSaWi Services
          <br />
          Website & Wep-app development
        </h3>
        <h5>Striving for more than just excellence</h5>
      </div>
      <div>
        <p>
          Cell: +27 (0) 61 525 0362
          <br />
          Emai: info@lesawi.co.za
          <br />
          Emai: boneswvb@gmail.com
        </p>
      </div>
    </div>
  );
}
export default Header;
