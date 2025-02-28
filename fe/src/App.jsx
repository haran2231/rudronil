import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./Component/About";
import Banner from "./Component/Banner";
import BlogSection from "./Component/BlogSection";
import ContactForm from "./Component/Contact";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Services from "./Component/Services";
import StatsSection from "./Component/StatsSection";
import SingleBlog from "./Component/SingleBlog";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          {/* Home Page with Sections */}
          <Route
            path="/"
            element={
              <>
                <section id="banner"><Banner /></section>
                <section id="about"><AboutUs /></section>
                <section id="services"><Services /></section>
                <section id="stats"><StatsSection /></section>
                <section id="blog"><BlogSection /></section>
                <section id="contact"><ContactForm /></section>
              </>
            }
          />
          {/* Single Blog Page */}
          <Route path="/blog/:id" element={<SingleBlog />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
