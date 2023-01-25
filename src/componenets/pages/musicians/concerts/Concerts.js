import { FaGuitar } from "react-icons/fa";
import "./Concerts.css";

export default function Concerts() {
  return (
    <div className="bg-turquoise concerts-container">
      <FaGuitar />
      <h2 className="text-white">Upcoming Concerts</h2>
      <ul className="concerts-list">
        <li>5th January - Danger Goat at Siddhartha's Birthday Party</li>
        <li>1st February - Harold Gordon-Smith at the Barbican</li>
        <li>21 March - Insolace at the pub</li>
      </ul>
    </div>
  );
}
