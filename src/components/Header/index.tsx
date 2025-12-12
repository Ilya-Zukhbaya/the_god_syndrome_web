import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ThemeToggleButton from "../../components/ThemeToggleBtn";

import styles from "./index.module.scss";

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.logo__menu_container}>
        <h1 className={styles.logo}>
          <span className={styles.logoText}>
            {isMobile ? "TGS" : "The God Syndrome"}
          </span>
        </h1>
        <nav className={styles.menu_container}>
          <div className={styles.menuButton} onClick={toggleMenu}>
            <span
              className={`${styles.bar} ${isMenuOpen ? styles.open : ""}`}
            ></span>
            <span
              className={`${styles.bar} ${isMenuOpen ? styles.open : ""}`}
            ></span>
            <span
              className={`${styles.bar} ${isMenuOpen ? styles.open : ""}`}
            ></span>
          </div>
          <ul className={`${styles.list} ${isMenuOpen ? styles.active : ""}`}>
            <li className={styles.listItem}>
              <a href="#media">{t("Media")}</a>
            </li>
            <li className={styles.listItem}>
              <a href="#music">{t("Music")}</a>
            </li>
            <li className={styles.listItem}>
              <a href="#news">{t("News")}</a>
            </li>
            <li className={styles.listItem}>
              <a href="#contact">{t("Contact")}</a>
            </li>
            <li className={styles.listItem}>
              <a href="#merch">{t("Merch")}</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.btn_container}>
        <button onClick={() => changeLanguage("en")}>English</button>
        <button onClick={() => changeLanguage("ru")}>Русский</button>
      </div>

      <div className={styles.toggle_container}>
        <ThemeToggleButton />
      </div>
    </div>
  );
};
