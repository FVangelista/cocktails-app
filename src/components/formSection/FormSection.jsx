import { useState, useEffect } from "react";
import styles from "./index.module.scss";

import FormSubmit from "../formSubmit";
import FormDelete from "../formDelete";
import FormPopup from "../formPopup";

import { scrollToSection } from "../../utils/utils";
import { FaArrowLeft, FaArrowUp } from "react-icons/fa";

function FormSection({ refs, setPopup, isPopup }) {
  const [isDeleteVisible, setDeleteVisible] = useState(false);
  const [isActive, setActive] = useState(false);
  const [formData, setFormData] = useState(
    localStorage.getItem("preorder")
      ? JSON.parse(localStorage.getItem("preorder"))
      : []
  );

  const handlePopup = () => {
    setPopup(true);
    setTimeout(() => {
      setPopup(false);
    }, 2000);
  };

  const handleScroll = () => {
    const position = window.pageYOffset;

    if (position >= 300) {
      setActive(true);
    }
    if (position <= 300) {
      setActive(false);
    }
  };

  const handleClick = () => setDeleteVisible((prev) => !prev);

  useEffect(() => {
    localStorage.setItem("preorder", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section ref={refs.formRef} className={styles.Preorder}>
      <div className={styles.formWrapper}>
        {isPopup && (
          <FormPopup>
            <h3>{isDeleteVisible ? "got it!" : "thanks!"}</h3>
            <p>
              {isDeleteVisible
                ? "your order has been deleted"
                : "we received your order"}
            </p>
          </FormPopup>
        )}
        <h2 className={styles.title}>
          {isDeleteVisible ? "see you soon!" : "get your spot!"}
        </h2>

        {isDeleteVisible ? (
          <FormDelete
            handlePopup={handlePopup}
            formData={formData}
            setFormData={setFormData}
          />
        ) : (
          <FormSubmit handlePopup={handlePopup} setFormData={setFormData} />
        )}

        <button onClick={handleClick} className={styles.delBtnForm}>
          {isDeleteVisible ? <FaArrowLeft /> : "change your mind ?"}
        </button>
      </div>

      <button
        onClick={() => scrollToSection(refs.homeRef)}
        className={
          isActive ? `${styles.btnUp} ${styles.active}` : `${styles.btnUp}`
        }
      >
        <FaArrowUp />
      </button>
    </section>
  );
}

export default FormSection;
