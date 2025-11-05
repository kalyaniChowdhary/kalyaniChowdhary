import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";
import SocialLinks from "./SocialLinks";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <SocialLinks />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
