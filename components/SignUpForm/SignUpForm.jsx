import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { BiX } from "react-icons/bi";
import styles from "./SignUpForm.module.css";

const SignUpForm = ({ changeFormHandler }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onClickHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formInfo}>
        <h3 className={styles.heading}>Sign In</h3>
        <span onClick={(e) => changeFormHandler("get-started")}>
          <BiX size={28} />
        </span>
      </div>
      <input
        className={styles.inputField}
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className={styles.inputField}
        type="email"
        name="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className={styles.inputField}
        type="password"
        name="email"
        placeholder="Passowrd"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className={styles.getStarted} onClick={onClickHandler}>
        Sign Up
        <span>
          <FaChevronRight />
        </span>
      </button>

      <p className={styles.additionalText}>
        Already have an account?
        <span className="" onClick={(e) => changeFormHandler("sign-in")}>
          Sign In now.
        </span>
      </p>
    </div>
  );
};

export default SignUpForm;
