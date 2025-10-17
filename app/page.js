import Hero from "./Components/Hero";
import AntiRagging from "./Components/AntiRagging";
import AboutPreview from "./Components/AboutPreview";
import Footer from "./Components/Footer";
import Program from "./Components/Program";
export default function Home() {
  return (
    <div >
      <Hero />
      <AboutPreview />
      <Program/>
      <AntiRagging />
      <Footer />
    </div>
  );
}
