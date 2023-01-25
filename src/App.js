import "./App.css";
import "./SliderSections.css";
import ContactPage from "./componenets/pages/contact/ContactPage";
import HomePage from "./componenets/pages/home/HomePage";
import MusiciansPage from "./componenets/pages/musicians/MusiciansPage";
import QuotePage from "./componenets/pages/quote/QuotePage";
import Footer from "./componenets/other/footer/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const learning = true;

function App() {
  return <Windows />;
}

function Windows() {
  let component;
  switch (window.location.pathname) {
    case "/home":
      component = <HomePage />;
      break;
    case "/musicians":
      component = <MusiciansPage />;
      break;
    case "/contact":
      component = <ContactPage />;
      break;
    case "/quote":
      component = <QuotePage />;
      break;
  }
  if (!component) {
    component = <HomePage />;
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="" element={<HomePage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/musicians" element={<MusiciansPage />}></Route>
          <Route path="/quote" element={<QuotePage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
        </Routes>
        {/* other way of linking pages */}
        {/* {component} */}
        {/* <ContactPage /> */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
