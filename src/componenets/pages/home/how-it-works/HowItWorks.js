import Button from "../../../other/button/Button";
import Line from "../../../other/line/Line";

import "./HowItWorks.css";
import { Step, step_list } from "./Step";

export default function HowItWorks() {
  const steps = step_list;
  return (
    <div className="how-it-works-container section-container">
      <h2 className="alternate-section-title">How It Works</h2>
      {steps.map((step, index) => {
        console.log(step);
        return (
          <div className="step-container">
            <Step
              index={index + 1}
              title={step.title}
              text={step.text}
              icon={step.icon}
            />

            <Line />
          </div>
        );
      })}
      <div className="how-button">
        <Button value="Get in touch" page="/contact" />
      </div>
    </div>
  );
}
