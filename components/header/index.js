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
            alt="NWR Namibia Web Site"
          />
        </span>
      </div>
      <div>
        <h3>
          LeSaWi Services - Website
          <br />
          Wep-app development
        </h3>
        <h5>Striving for more than just excellence</h5>
      </div>
      <div>
        <p>
          Cell: +27 (0) 71 099 2811
          <br />
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
