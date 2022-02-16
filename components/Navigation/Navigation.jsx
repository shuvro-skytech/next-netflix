import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/logo.png";
import styles from "./Navigation.module.css";

const Navigation = ({ changeFormHandler }) => {
  return (
    <div className={styles.navigationContainer}>
      <Link href="/" passHref>
        <a>
          <Image src={Logo} alt="Logo" width={120} height={40} />
        </a>
      </Link>
      <input
        className={styles.signInBtn}
        type="button"
        value="sign-in"
        onClick={(e) => changeFormHandler("sign-in")}
      />
    </div>
  );
};

export default Navigation;
