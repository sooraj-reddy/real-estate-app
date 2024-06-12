import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import styles from "./UserProfile.module.css";

const UserProfile: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLOGOTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.userProfile}>
      <Nav
        icbaselineSearch="/icbaselinesearch.svg"
        icon1="/vector-11.svg"
        onLOGOTextClick={onLOGOTextClick}
        onHomeTextClick={onHomeTextClick}
      />
      <section className={styles.sidebarContainer}>
        <Sidebar />
        <div className={styles.profileWrapper}>
          <div className={styles.profile}>
            <div className={styles.profileHeader}>
              <div className={styles.profilePicture}>
                <div className={styles.picture}>
                  <div className={styles.logo} />
                  <img
                    className={styles.cameraIcon}
                    loading="lazy"
                    alt=""
                    src="/camera.svg"
                  />
                </div>
              </div>
              <div className={styles.editProfile}>
                <button className={styles.editButton}>
                  <div className={styles.editButtonChild} />
                  <a className={styles.edit}>Edit</a>
                  <img
                    className={styles.materialSymbolseditIcon}
                    alt=""
                    src="/materialsymbolsedit.svg"
                  />
                </button>
              </div>
            </div>
            <div className={styles.profileInfo}>
              <div className={styles.info}>
                <div className={styles.firstNameRowParent}>
                  <div className={styles.firstNameRow}>
                    <div className={styles.firstNameInput}>
                      <div className={styles.firstName}>First Name</div>
                      <div className={styles.rectangleParent}>
                        <input className={styles.frameChild} type="text" />
                        <div className={styles.phoneNumber}>Phone Number*</div>
                      </div>
                    </div>
                    <textarea
                      className={styles.lastNameRow}
                      placeholder="Last Name"
                      rows={4}
                      cols={12}
                    />
                  </div>
                  <div className={styles.phoneNumberRow}>
                    <div className={styles.phoneNumberRowChild} />
                    <input
                      className={styles.xxxxxXxxxx}
                      placeholder="+91 xxxxx xxxxx"
                      type="text"
                    />
                  </div>
                </div>
                <div className={styles.emailRow}>
                  <div className={styles.mail}>Mail</div>
                  <div className={styles.emailInput}>
                    <div className={styles.emailInputChild} />
                    <input
                      className={styles.abcdegmailcom}
                      placeholder="abcde@gmail.com"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserProfile;
