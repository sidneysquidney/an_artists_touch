import Button from "../../../other/button/Button";

import "./JoinUs.css";

import { FaSmile } from "react-icons/fa";

export default function JoinUs() {
  return (
    <div className="join-us-container join-us-section">
      <FaSmile />
      <h2 className="text-center">Join the Family</h2>
      <div className="join-paragraph">
        <p>
          Are you an aspiring Artist? Do you want to fund your dreams? Get in
          touch to start your window cleaning journey with “An Artist’s Touch”.
        </p>
      </div>

      <Button value="Contact us" page="/contact" />
    </div>
  );
}
