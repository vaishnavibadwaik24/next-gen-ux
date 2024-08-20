import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import SignIn from "./SignIn";
import CreateAccount from "./CreateAccount";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import reportWebVitals from "./reportWebVitals";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/SignIn" &&
        location.pathname !== "/CreateAccount" && <Header />}
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {location.pathname !== "/SignIn" &&
        location.pathname !== "/CreateAccount" && <Footer />}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();