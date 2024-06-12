import { FunctionComponent } from "react";
import styles from "./Component1.module.css";

export type Component1Type = {
  className?: string;
};

const Component1: FunctionComponent<Component1Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.contactContentWrapper, className].join(" ")}>
      <div className={styles.contactContent}>
        <b className={styles.contactForm}>Contact Form</b>
        <div className={styles.contactFormContainer}>
          <div className={styles.frameParent}>
            <div className={styles.contactFormParent}>
              <div className={styles.contactForm1}>
                <div className={styles.contactFormChild} />
                <div className={styles.writeYourMessage}>
                  Write your message ...
                </div>
              </div>
              <div className={styles.emailPhoneContainer}>
                <div className={styles.emailContainer}>
                  <div className={styles.emailFieldContainer}>
                    <div className={styles.email}>Email</div>
                  </div>
                  <div className={styles.phone}>Phone</div>
                </div>
              </div>
            </div>
            <div className={styles.brokerContainer}>
              <div className={styles.brokerInfoContainer}>
                <b className={styles.brokergmailcom}>broker@gmail.com</b>
                <div className={styles.brokerInfo}>+33 1234 5678</div>
              </div>
            </div>
          </div>
          <div className={styles.contactDetailsContainer}>
            <div className={styles.contactDetailsLabels}>
              <div className={styles.phoneNumber}>
                <div className={styles.phoneNumberChild} />
                <div className={styles.phoneNumber1}>Phone Number</div>
              </div>
              <div className={styles.email1}>
                <div className={styles.emailChild} />
                <div className={styles.emailAddress}>Email Address</div>
              </div>
            </div>
            <div className={styles.submitButtonContainer}>
              <div className={styles.submitBtn}>
                <div className={styles.submitBtnChild} />
                <div className={styles.submit}>Submit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Component1;
