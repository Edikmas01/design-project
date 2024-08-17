import { useState , useEffect } from "react";
import "./ServicesPage.scss";
import { NavLink, useParams } from "react-router-dom";
import { Modal } from "../../components/Modal/Modal";

export const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [ services, setServices] = useState([])
  const [modalOpen, setModalOpen] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch("/public/api/services.json")
      .then((res) => res.json())
    .then((data) => {
      setServices(data);
      if (id) {
        const service = data.find((s) => s.id === id);
        console.log(service, "im id d[[d[d[d[d[");
        
        if (service) {
          setSelectedService(service);
        }
      }
    })
  .catch((error) => console.error("Error fetching projects:", error));
}, [id])
  
  
  const handleServiceClick = (services) => {
    setSelectedService(services);
    console.log("Selected service:", services);
  };

  const handleOrderService = () => {
    console.log("Order service button clicked");
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log("Modal closed");
    setModalOpen(false);
  };

  return (
    <section className="service-section ">
      <div className="option">
        <div className="beckgroundImg"></div>
        <div className="oooo">
          <h1 className="option-title">Services</h1>
          <ul className="option-list">
            {services.map((service) => (
              <li className="option-item" key={service.id}>
                <NavLink
                      to={`/services/${service.id}`} 
                  className="option-item-nav"
                  onClick={() => handleServiceClick(service)}
                >
                  {service.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="option-bnt"
            onClick={() => handleOrderService()}
          >
            order service
          </button>
        </div>
      </div>
      <h1 className="description-title">
        {selectedService ? selectedService.title : "Select a service"}
      </h1>
      <div className="description-and-price site-container">
        <div className="description">
          <p className="description-text">
            {selectedService
              ? selectedService.description
              : "Click on a service to see its description"}
          </p>
          {selectedService && (
            <h3 className="price">Price: {selectedService.price}м²</h3>
          )}
        </div>
        {selectedService && (
          <div className="includes">
            <h3 className="includes-title">includes</h3>
            <ul className="includes-list">
              {selectedService.plen.map((item, index) => (
                <li key={index} className="includes-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {selectedService && (
        <div className="image-container site-container">
          <img className="img-services" src={selectedService.image} alt="" />
        </div>
      )}
      {modalOpen && <Modal onClose={handleCloseModal} isOpen={modalOpen} />}
    </section>
  );
};

