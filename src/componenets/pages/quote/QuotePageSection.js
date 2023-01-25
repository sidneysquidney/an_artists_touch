import QuoteBar from "../../other/quote-generator/QuoteBar";

import QuoteGenerator from "../../other/quote-generator/QuoteGenerator";

import { FaQuestionCircle } from "react-icons/fa";

export default function QuotePageSection() {
  return (
    <div className="bg-light-blue quote-page-section-container">
      <h2 className="alternate-section-title">Quote Generator</h2>
      <div>
        <FaQuestionCircle className="question-small" />
        <small className="quote-small">
          Get in touch for a full booking and a more detailed quote
        </small>
        <QuoteBar />
        <div className="quote-disc">
          <small className="quote-disclaimer">
            Please note, this is not a fixed price. One of our employees will
            give you a final quote upon booking.
          </small>
        </div>
      </div>
    </div>
  );
}
