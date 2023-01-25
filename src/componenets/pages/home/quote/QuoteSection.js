import QuoteBar from "../../../other/quote-generator/QuoteBar";
import QuoteGenerator from "../../../other/quote-generator/QuoteGenerator";

import { FaMusic, FaSoap, FaSmile, FaQuestionCircle } from "react-icons/fa";

import "./QuoteSection.css";

export default function QuoteSection() {
  return (
    <div className="bg-aqua-blue home-quote-container">
      <div className="quote-top-icons">
        <FaSoap />
        <FaMusic />
        <FaSmile />
      </div>
      <h2 className="quote-title">
        Get your first quote for your windows today.
      </h2>
      <div>
        <FaQuestionCircle className="question-small" />
        <small className="quote-small">
          Get in touch for a full booking and a more detailed quote
        </small>

        <QuoteBar background={"blue"} />
      </div>
    </div>
  );
}
