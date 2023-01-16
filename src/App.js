import "./App.css";
import "./SliderSections.css";
import ContactPage from "./componenets/pages/contact/ContactPage";
import HomePage from "./componenets/pages/home/HomePage";
import MusiciansPage from "./componenets/pages/musicians/MusiciansPage";
import QuotePage from "./componenets/pages/quote/QuotePage";
import Footer from "./componenets/other/footer/Footer";
import Learning2 from "./learning/Learning2";
import Learning3 from "./learning/Learning3";
import Learning4 from "./learning/Learning4";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Learning5 from "./learning/Learning5";
import Learning6 from "./learning/Learning6";
import Learning7 from "./learning/Learning7";
import Learning8 from "./learning/Learning8";
import Learning9 from "./learning/Learning9";
import { AudioLearning } from "./learning/AudioLearning";
import AudioApp from "./learning/audio/AudioApp";
import AudioApp2 from "./learning/audio2/AudioApp2";
import AudioApp3 from "./learning/audio3/AudioApp3";
import Audio4 from "./learning/audio3/Audio4";

const learning = true;

function App() {
  if (!learning) {
    // return <AudioApp2 />;
    // return <AudioApp />;
    // return <AudioApp3 />;
    return <Audio4 />;
  } else {
    return <Windows />;
  }
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
