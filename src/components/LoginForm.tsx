import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.css";

export type LoginFormType = {
  className?: string;
};

const LoginForm: FunctionComponent<LoginFormType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onRegisterNowTextClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  const onSubmitButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <form className={[styles.loginForm, className].join(" ")}>
      <div className={styles.loginFormChild} />
      <div className={styles.loginCredentials}>
        <div className={styles.logInsignIn}>Log In/Sign In</div>
      </div>
      <div className={styles.contactInput}>
        <div className={styles.phoneNumberMail}>Phone Number/ mail</div>
        <input className={styles.phoneNumberField} type="text" />
      </div>
      <div className={styles.passwordField}>
        <div className={styles.passwordInput}>
          <div className={styles.password}>Password</div>
          <div className={styles.passwordStrength} />
        </div>
      </div>
      <div className={styles.registration}>
        <div className={styles.registerCallToAction}>
          <div className={styles.registerMessage}>
            <div className={styles.doNotHave}>Do not have an account?</div>
            <div
              className={styles.registerNow}
              onClick={onRegisterNowTextClick}
            >
              <span className={styles.span}>{` `}</span>
              <span className={styles.registerNow1}>Register Now</span>
            </div>
          </div>
          <div className={styles.submitAction}>
            <button
              className={styles.submitButton}
              onClick={onSubmitButtonClick}
            >
              <div className={styles.submitButtonChild} />
              <div className={styles.logIn}>LOG IN</div>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
