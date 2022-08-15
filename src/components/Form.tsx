import { Input } from "./Input";
import { FormProps } from "../types";
import { SubmittedForm } from "./SubmittedForm";
import { FormEvent, useState } from "react";

export const Form = ({ dispatch }: FormProps) => {
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    setSubmitted(true);
  };

  return (
    <>
      {submitted ? (
        <SubmittedForm dispatch={dispatch} setSubmitted={setSubmitted} />
      ) : (
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <Input
            name="CARD NUMBER"
            className="big-input"
            dispatch={dispatch}
            pattern="[0-9 ]*"
            maxLength={19}
            minLength={19}
            placeholder="e.g 1234 5678 9123 0000"
            type="CARD_NUM"
          />

          <Input
            className="big-input"
            dispatch={dispatch}
            pattern="[a-zA-Z ]*"
            id="name"
            placeholder="e.g Jane Appleseed"
            name="CARDHOLDER NAME"
            type="CARD_NAME"
          />
          <div className="exp-date-cvc-cont">
            <div>
              <Input
                className="exp-date-input"
                dispatch={dispatch}
                id="exp-date"
                maxLength={2}
                minLength={2}
                placeholder="MM"
                name="EXP. DATE (MM/YY)"
                type="CARD_MM"
              />
              <Input
                className="exp-date-input"
                dispatch={dispatch}
                id="exp-date"
                maxLength={2}
                minLength={2}
                placeholder="YY"
                type="CARD_YY"
              />
            </div>
            <div>
              <Input
                name="CVC"
                className="cvc-input"
                dispatch={dispatch}
                id="exp-date"
                maxLength={3}
                minLength={3}
                placeholder="e.g 123"
                type="CARD_CVC"
              />
            </div>
          </div>
          <button>Confirm</button>
        </form>
      )}
    </>
  );
};
