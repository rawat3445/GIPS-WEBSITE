import Hero from "./Components/Hero";
import Event from "./Components/Event";
import AntiRagging from "./Components/AntiRagging";
import About from "./Components/About";
import AboutPreview from "./Components/AboutPreview";
import Footer from "./Components/Footer";
import Program from "./Components/Program";
export default function Home() {
  return (
    <div >
      <Hero />
      <AboutPreview />
      <Program/>
      <About />
      <Event /> 
      <AntiRagging />
      <Footer />
    </div>
  );
}
