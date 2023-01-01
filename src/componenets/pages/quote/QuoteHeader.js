import Button from "../../other/button/Button";
import Navbar from "../../other/navbar/Navbar";

export default function QuoteHeader() {
  return (
    <div>
      <Navbar />
      <h1>Our quote system</h1>
      <p>
        Get an initial quote to help you understand how much your window
        cleaning will cost. This will be subject to change on viewing of the
        property by the cleaner, or on a more thorough quote made upon bookings.
        Each quote starts at a minimum charge of £30, then works it way up
        depending on a number of factors - number of windows, size of windows,
        and hard to reach places etc. We also offer conservatory cleaning and
        gutter cleaning so every box can be ticked in a single trip.
      </p>
      <Button value="Contact us" page="/contact" />
    </div>
  );
}
