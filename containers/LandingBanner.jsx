import { useState } from "react";
import GetStartedForm from "../components/GetStartedForm/GetStartedForm";
import SignUpForm from "../components/SignUpForm/SignUpForm";
import SignInForm from "../components/SignInForm/SignInForm";
import Navigation from "../components/Navigation/Navigation";
import styles from "./LandingBanner.module.css";

const LandingBanner = () => {
  const [formState, setFormState] = useState("get-started");

  const changeFormHandler = (expectedFormState) => {
    setFormState(expectedFormState);
  };

  console.log(formState);

  return (
    <div className={styles.container}>
      <Navigation changeFormHandler={changeFormHandler} />
      <div className={styles.content}>
        {formState === "get-started" && (
          <GetStartedForm changeFormHandler={changeFormHandler} />
        )}
        {formState === "sign-up" && (
          <SignUpForm changeFormHandler={changeFormHandler} />
        )}
        {formState === "sign-in" && (
          <SignInForm changeFormHandler={changeFormHandler} />
        )}
      </div>
    </div>
  );
};

export default LandingBanner;
