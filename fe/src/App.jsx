import "./App.css";
import AboutUs from "./Component/About";
import Banner from "./Component/Banner";
import BlogSection from "./Component/BlogSection";
import ContactForm from "./Component/Contact";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Services from "./Component/Services";
import StatsSection from "./Component/StatsSection";

function App() {
  return (
    <>
      <Header />
      <section id="banner"><Banner /></section>
      <section id="about"><AboutUs /></section>
      <section id="services"><Services /></section>
      <section id="stats"><StatsSection /></section>
      <section id="blog"><BlogSection /></section>
      <section id="contact"><ContactForm /></section>
      <Footer />
    </>
  );
}

export default App;
