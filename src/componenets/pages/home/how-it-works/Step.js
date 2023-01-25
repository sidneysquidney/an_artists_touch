import { FaRedoAlt } from "react-icons/fa";
import { FaSmile } from "react-icons/fa";
import { FaSoap } from "react-icons/fa";
import { FaDoorOpen } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

function Step(props) {
  return (
    <div className="step-row">
      <div className="step-number-container">
        <h3 className="step-number">{props.index}</h3>
      </div>
      <div className="step-title-container">
        {props.icon}
        <h4>{props.title}</h4>
      </div>
      <div className="step-text-container">
        <p>{props.text}</p>
      </div>
    </div>
  );
}

const step1 = {
  title: "Get a quote",
  icon: <FaQuoteRight />,
  text: "Use our quote generator to get a rough estimate of your window clean price.",
};
const step2 = {
  title: "Schedule us",
  icon: <FaCalendarCheck />,
  text: "Give us a call or email to arrange a suitable time and day for your clean",
};
const step3 = {
  title: "Let us in",
  icon: <FaDoorOpen />,
  text: "Provide entry instructions, and we’ll be there!",
};
const step4 = {
  title: "We clean windows",
  icon: <FaSoap />,
  text: "All of our cleaners are trained professionals, who will leave your windos with “An Artist’s Touch” finish!",
};
const step5 = {
  title: "Give feedback",
  icon: <FaSmile />,
  text: "How did we do? Answer our one question survey (or if you like, provide more detail).",
};
const step6 = {
  title: "Rinse & repeat",
  icon: <FaRedoAlt />,
  text: "Schedule recurring visits to keep your windows always healthy, clean, and fresh.",
};

const step_list = [step1, step2, step3, step4, step5, step6];

export { Step, step_list };
