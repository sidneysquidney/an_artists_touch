import QuoteGenerator from "../../../other/quote-generator/QuoteGenerator";

export default function QuoteSection() {
  return (
    <div className="bg-aqua-blue">
      <h2>Get your first quote for your windows today.</h2>
      <small className="quote-small">
        Get in touch for a full booking and a more detailed quote
      </small>
      <QuoteGenerator />
    </div>
  );
}
