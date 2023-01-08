import Line from "../../other/line/Line";
import About from "./about/About";
import FounderQuotes from "./founder-quotes/FounderQuotes";
import Header from "./header/Header";
import HowItWorks from "./how-it-works/HowItWorks";
import JoinUs from "./join-us/JoinUs";
import QuoteSection from "./quote/QuoteSection";
import Reviews from "./reviews/Reviews";
import Services from "./services/Services";

export default function HomePage() {
  return (
    <div>
      {console.log(window.location.pathname)}
      <Header />
      <Line />
      <FounderQuotes />
      <Line />
      <About />
      <Line />
      <HowItWorks />
      <Reviews />
      <Services />
      <JoinUs />
      <QuoteSection />
    </div>
  );
}
