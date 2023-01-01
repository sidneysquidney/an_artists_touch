import "./Button.css";
import { Link } from "react-router-dom";

export default function Button(props) {
  return (
    <Link to={props.page}>
      <button type="button" className="button">
        {props.value}
      </button>
    </Link>
  );
}
