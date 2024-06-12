import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FormContainer.module.css";

export type FormContainerType = {
  className?: string;
};

const FormContainer: FunctionComponent<FormContainerType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onLoginNowTextClick = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  const onSubmitButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={[styles.formContainer, className].join(" ")}>
      <div className={styles.formContainerChild} />
      <div className={styles.form}>
        <div className={styles.registerFields}>
          <b className={styles.register}>Register</b>
        </div>
        <div className={styles.inputFields}>
          <div className={styles.namePhone}>
            <div className={styles.firstNameField}>
              <div className={styles.firstName}>First Name*</div>
              <div className={styles.firstNameInput}>
                <div className={styles.firstNameInputChild} />
                <div className={styles.phoneNumber}>Phone Number*</div>
              </div>
            </div>
            <div className={styles.lastNameField}>
              <div className={styles.lastNameInput}>
                <div className={styles.lastName}>Last Name*</div>
                <div className={styles.lastNameInputChild} />
              </div>
            </div>
          </div>
          <div className={styles.instructionsContainer}>
            <input className={styles.instructionsContainerChild} type="text" />
          </div>
          <div className={styles.emailPassword}>
            <div className={styles.mail}>Mail</div>
            <input className={styles.emailPasswordInputs} type="text" />
          </div>
          <div className={styles.emailPassword1}>
            <div className={styles.password}>Password*</div>
            <input className={styles.emailPasswordChild} type="text" />
          </div>
          <p className={styles.instructions}>Instructions*</p>
        </div>
      </div>
      <div className={styles.loginLinkContainer}>
        <div className={styles.loginLink}>
          <div
            className={styles.alreadyHaveAn}
          >{`Already have an account? `}</div>
          <u className={styles.loginNow} onClick={onLoginNowTextClick}>
            Login Now
          </u>
        </div>
      </div>
      <div className={styles.submitContainer}>
        <button className={styles.submitButton} onClick={onSubmitButtonClick}>
          <div className={styles.submitButtonChild} />
          <div className={styles.register1}>REGISTER</div>
        </button>
      </div>
    </div>
  );
};

export default FormContainer;
