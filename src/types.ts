export type state = {
  cardNum: string;
  cardName: string;
  cardMM: string;
  cardYY: string;
  cardCVC: string;
};

export type Action =
  | {
      type: "CARD_NUM";
      action: string;
    }
  | {
      type: "CARD_NAME";
      action: string;
    }
  | {
      type: "CARD_MM";
      action: string;
    }
  | {
      type: "CARD_YY";
      action: string;
    }
  | {
      type: "CARD_CVC";
      action: string;
    };

export type FormProps = {
  dispatch: React.Dispatch<Action>;
};

export type SubmittedFormProps = {
  dispatch: React.Dispatch<Action>;
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
};

export type InputProps = {
  dispatch: React.Dispatch<Action>;
  name?: string;
  pattern?: string;
  type: "CARD_NUM" | "CARD_NAME" | "CARD_MM" | "CARD_YY" | "CARD_CVC";
  placeholder: string;
  className?: string;
  id?: string;
  minLength?: number;
  maxLength?: number;
};
