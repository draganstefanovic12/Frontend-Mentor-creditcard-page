import "./App.css";
import { Form } from "./components/Form";
import { Action } from "./types";
import { useReducer } from "react";
import leftBg from "./assets/bg-main-desktop.png";
import cardLogo from "./assets/card-logo.svg";

export const initialState = {
  cardNum: "",
  cardName: "",
  cardMM: "",
  cardYY: "",
  cardCVC: "",
};

export const cardReducer = (state: any, action: Action) => {
  switch (action.type) {
    case "CARD_NUM":
      return { ...state, cardNum: action.action };
    case "CARD_NAME":
      return { ...state, cardName: action.action };
    case "CARD_MM":
      return { ...state, cardMM: action.action };
    case "CARD_YY":
      return { ...state, cardYY: action.action };
    case "CARD_CVC":
      return { ...state, cardCVC: action.action };
    default:
      return { state };
  }
};

const App = () => {
  const [state, dispatch] = useReducer(cardReducer, initialState);

  return (
    <>
      <img className="main-bg" src={leftBg} />
      <div className="main-container">
        <div className="cards">
          <div className="front-card">
            <img className="card-logo" src={cardLogo} />
            <div>
              <p className="card-number-text">
                {state.cardNum ? state.cardNum : "0000 0000 0000 0000"}
              </p>
              <div className="name-month-cont">
                <p placeholder="JANE APPLESEED">
                  {state.cardName
                    ? state.cardName.toUpperCase()
                    : "JANE APPLESEED"}
                </p>
                <p>
                  {state.cardMM ? state.cardMM : "00"}/
                  {state.cardYY ? state.cardYY : "00"}
                </p>
              </div>
            </div>
          </div>
          <div className="back-card">
            <p>{state.cardCVC ? state.cardCVC : "000"}</p>
          </div>
        </div>
        <Form dispatch={dispatch} />
      </div>
    </>
  );
};

export default App;
