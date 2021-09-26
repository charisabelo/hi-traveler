import "./NumberMade.scss";
import { FiPhoneOutgoing } from "react-icons/fi";

const NumberMade = (props) => {
  return (
    <div className="made">
      <div className="made__icon-container">
        <FiPhoneOutgoing className="made__icon" />
      </div>
      <div className="made__number">456</div>
      <h3 className="made__title">Calls Made This Quarter</h3>
      <p className="made__paragraph">Number represents this quarter</p>
    </div>
  );
};

export default NumberMade;
