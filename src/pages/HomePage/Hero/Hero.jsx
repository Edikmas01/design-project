import { useState } from "react";
import "./Hero.scss";
import { Modal } from "../../../components/Modal/Modal";

export const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);

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
          Welcome to Studio
          <br />
          InteriorDesign
        </h1>
        <p className="interior-text">
          We create bespoke and beautiful interior spaces that reflect your
          personality
        </p>
        <button
          type="button"
          className="option-bnt"
          onClick={() => handleOrderService()}
        >
          order service
        </button>
      </div>
      {modalOpen && <Modal onClose={handleCloseModal} isOpen={modalOpen} />}
    </section>
  );
};
