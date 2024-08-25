import "./About.scss";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="about-section ">
        <div className="about-content site-container">
          <div className="about-image">
            <img src="/public/photo/about.jpg" alt="About me" />
          </div>
          <div className="about-text">
            <h1>{t("about.title")}</h1>
            <p>{t("about.introduction")}</p>
            <p>{t("about.experience")}</p>
            <p>{t("about.mission")}</p>
          </div>
        </div>
        <div className="about-line"></div>
      </section>
    </>
  );
};
