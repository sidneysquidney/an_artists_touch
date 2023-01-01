import QuoteGenerator from "../../other/quote-generator/QuoteGenerator";

export default function QuotePageSection() {
  return (
    <div className="bg-light-blue">
      <h2 className="alternate-section-title">Quote Generator</h2>
      <small className="quote-small">
        Get in touch for a full booking and a more detailed quote
      </small>
      <QuoteGenerator />
      <small className="quote-disclaimer">
        Please note, this is not a fixed price. One of our employees will give
        you a final quote upon booking.
      </small>
    </div>
  );
}
