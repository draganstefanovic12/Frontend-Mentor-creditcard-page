import iconSubmitted from "../assets/icon-complete.svg";
import { SubmittedFormProps } from "../types";

export const SubmittedForm = ({
  dispatch,
  setSubmitted,
}: SubmittedFormProps) => {
  const handleState = () => {
    setSubmitted(false);
    dispatch({ type: "CARD_NAME", action: "" });
    dispatch({ type: "CARD_NUM", action: "" });
    dispatch({ type: "CARD_MM", action: "" });
    dispatch({ type: "CARD_YY", action: "" });
    dispatch({ type: "CARD_CVC", action: "" });
  };

  return (
    <div className="submitted">
      <img className="submitted-logo" src={iconSubmitted} />
      <h1>THANK YOU!</h1>
      <p>We've added you card details.</p>
      <button onClick={handleState}>Continue</button>
    </div>
  );
};
