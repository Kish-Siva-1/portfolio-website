import React from 'react'; 
import './App.css';
import { Navbar, Home, About, TechStack, Portfolio, Blogs, Contact, CopyRight } from "./components/index";

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
