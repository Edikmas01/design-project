import "./ContactForm.scss";

export const ContactForm = () => {
  return (
    <section className="contact-form-container site-container">
      <h1>Contact us</h1>
      <p>Any questions? We are here to help! Contact me now.</p>
      <form action="" className="contact-form">
        <div className="form-group ">
          <label htmlFor="name">Name *</label>
          <input type="text" id="name" placeholder="Enter your name" required />
        </div>
        <div className="form-group ">
          <label htmlFor="email">E-mail *</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group ">
          <label htmlFor="phone">Phone number *</label>
          <input
            type="phone"
            id="phone"
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="form-group ">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            placeholder="Enter your message "
            required
          ></textarea>
        </div>
        <button type="submit">contact</button>
      </form>
    </section>
  );
};
