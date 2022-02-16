import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import styles from "./GetStartedForm.module.css";

const GetStartedForm = ({ changeFormHandler }) => {
  const [email, setEmail] = useState("");

  const onClickHandler = (e) => {
    e.preventDefault();
    changeFormHandler("sign-up");
  };

  return (
    <div className={styles.formContainer}>
      <div className="">
        <h1 className={styles.heading}>
          Unlimited movies, TV shows, and more.
        </h1>
        <h3 className={styles.subheading}>Watch anywhere. Cancel anytime.</h3>
        <p className={styles.description}>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
      </div>
      <div className={styles.form}>
        <input
          className={styles.email}
          type="text"
          name="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className={styles.getStarted} onClick={onClickHandler}>
          Get Started
          <span>
            <FaChevronRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default GetStartedForm;
