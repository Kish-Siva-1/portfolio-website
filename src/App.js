import React from 'react'; 
import './App.css';
import { Navbar, Home, About, TechStack, Portfolio, Blogs, Contact, CopyRight } from "./components/index";
// import { Navbar } from "./components/NavBar/navBar";

class App extends React.Component {
  render() {
    return (
      <div className="App">

        <Navbar />
        <Home />
        <About />
        <TechStack />
        <Portfolio id="portfolio" />
        <Blogs />
        <Contact />
        <CopyRight />

      </div>
    );
  }
}

export default App;
