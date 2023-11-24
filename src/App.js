import  "./App.css";
import NavBar from "./Components/Navbar";
import ContactBar from "./Components/ContactBar";
import Footer from "./Components/Footer";
import Home from "./Sections/Home";
import About from "./Sections/About";
import Contact from "./Sections/Contact";

function App() {
  return (
    <main className="main">
      <NavBar/>
      <div className='app_section_contanier'>
        <Home/>
        <About/>
        <Contact/>
      </div>
      <ContactBar/>
      <Footer/>
    </main>
  );
}

export default App;
