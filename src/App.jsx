import "./App.css";
import Certificates from "./components/Certificates";
import ContactModal from "./components/ContactModal";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import { useState } from "react";
import Tech from "./components/Tech";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import CTASection from "./components/CTASection";
import Services from "./components/Services";
import Copyright from "./components/Copyright";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [modalForm, setModalForm] = useState(false);
  return (
    <>
      <main className={`${darkMode ? "dark" : ""} text-slate-800`}>
        <Nav
          handleclick={() => setDarkMode(!darkMode)}
          openmodal={() => setModalForm(!modalForm)}
          darkMode={darkMode}
        />
        <Hero />
        <Tech />
        <Portfolio />
        <Certificates />
        <CTASection openmodal={() => setModalForm(!modalForm)} />
        <Services />
        <Footer />
        <Copyright />
        {modalForm && (
          <ContactModal openmodal={() => setModalForm(!modalForm)} />
        )}
      </main>
    </>
  );
}

export default App;
