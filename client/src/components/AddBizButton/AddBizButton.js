import "./AddBizButton.scss";
import { FiPlus } from "react-icons/fi";

const AddBizButton = () => {
  return (
    <button className="add-biz">
      <FiPlus className="add-biz__plus" />{" "}
      <span className="add-biz__span">Add Business</span>
    </button>
  );
};

export default AddBizButton;
