import React from 'react'; 
import './App.css';
import { Navbar, Home, About, TechStack, Portfolio, Blogs, Contact, Footer, CopyRight } from "./components/index";

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
        <Footer />
        <CopyRight />

      </div>
    );
  }
}

export default App;
