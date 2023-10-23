import Navbar from "./components/navbar";
import Intro from "./components/Intro/intro";
import Education from "./components/Education/education";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Education/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
