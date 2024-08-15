import "./Hero.scss";

export const Hero = () => {

  return (
    <section className="hero-container">
      <div className="studio-background-image"></div>
      <div className="site-container">
        <h1 className="interior-design-title site-container">
          Welcome to Studio
          <br />
          InteriorDesign
        </h1>
        <p className="interior-text">
          We create bespoke and beautiful interior spaces that reflect your
          personality
        </p>
      </div>
    </section>
  );
};
