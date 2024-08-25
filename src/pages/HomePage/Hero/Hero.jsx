import { useState } from "react";
import "./Hero.scss";
import { Modal } from "../../../components/Modal/Modal";
import { useTranslation } from "react-i18next";

export const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { t } = useTranslation();

    const handleOrderService = () => {
      console.log("Order service button clicked");
      setModalOpen(true);
    };

    const handleCloseModal = () => {
      console.log("Modal closed");
      setModalOpen(false);
    };

  return (
    <section className="hero-container">
      <div className="studio-background-image"></div>
      <div className="hero-content site-container">
        <h1 className="interior-design-title">
          {t("hero.title")}
          <br />
          {t("hero.subtitle")}
        </h1>
        <p className="interior-text">{t("hero.description")}</p>
        <button
          type="button"
          className="option-bnt"
          onClick={() => handleOrderService()}
        >
          {t("hero.orderButton")}
        </button>
      </div>
      {modalOpen && <Modal onClose={handleCloseModal} isOpen={modalOpen} />}
    </section>
  );
};
