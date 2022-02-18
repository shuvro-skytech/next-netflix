import { useState } from "react";
import GetStartedForm from "../components/GetStartedForm/GetStartedForm";
import SignUpForm from "../components/SignUpForm/SignUpForm";
import SignInForm from "../components/SignInForm/SignInForm";
import Navigation from "../components/Navigation/Navigation";
import styles from "./LandingBanner.module.css";

const LandingBanner = () => {
  const [formState, setFormState] = useState("get-started");
  const [email, setEmail] = useState("");

  const changeFormHandler = (expectedFormState, email) => {
    setFormState(expectedFormState);
    setEmail(email);
    console.log(email);
  };

  return (
    <div className={styles.container}>
      <Navigation changeFormHandler={changeFormHandler} email={email} />
      <div className={styles.content}>
        {formState === "get-started" && (
          <GetStartedForm changeFormHandler={changeFormHandler} email={email} />
        )}
        {formState === "sign-up" && (
          <SignUpForm changeFormHandler={changeFormHandler} email={email} />
        )}
        {formState === "sign-in" && (
          <SignInForm changeFormHandler={changeFormHandler} email={email} />
        )}
      </div>
    </div>
  );
};

export default LandingBanner;
