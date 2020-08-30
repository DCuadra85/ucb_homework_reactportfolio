import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Wrapper>
      <Footer />
    </Router>
  );
}

export default App;

// <div>
//         <Navbar />
//         <Wrapper>
//         <Route exact path="/" component={About} />
//           <Route exact path="/about" component={About} />
//           <Route exact path="/portfolio" component={Portfolio} />
//           <Route exact path="/contact" component={Contact} />
//         </Wrapper>
//         <Footer />
//       </div>
