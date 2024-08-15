// import "./HomePage.scss";
import { About } from "./About/About"; 
import { Hero } from "./Hero/Hero";
import { MyServices} from "./MyServices/MyServices"
import { ProjectCartSlider } from "../../components/ProjectCartSlider/ProjectCartSlider";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <ProjectCartSlider />
      <About />
      <MyServices />
    </>
  );
};
