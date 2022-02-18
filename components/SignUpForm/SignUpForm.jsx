import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { BiX } from "react-icons/bi";
import styles from "./SignUpForm.module.css";
import axios from "axios";
import { toast } from "react-toastify";

const SignUpForm = ({ changeFormHandler, email }) => {
  const [name, setName] = useState("");
  const [_email, setEmail] = useState(email);
  const [password, setPassword] = useState("");

  /* Toast Config */
  const toastConfig = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  const onClickHandler = async (e) => {
    e.preventDefault();
    await axios
      .post(`/api/user/register`, {
        name,
        _email,
        password,
      })
      .then((response) => {
        console.log(response.data);
        toast.success("User Created Succesfully!", toastConfig);
      })
      .catch((err) => {
        toast.error(err.message, toastConfig);
      });
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formInfo}>
        <h3 className={styles.heading}>Sign Up</h3>
        <span onClick={(e) => changeFormHandler("get-started", _email)}>
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
        value={_email}
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
        <span
          className=""
          onClick={(e) => changeFormHandler("sign-in", _email)}
        >
          Sign In now.
        </span>
      </p>
    </div>
  );
};

export default SignUpForm;
