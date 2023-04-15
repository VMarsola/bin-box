import { useContext } from "react";
import StepContext from "../../contexts/StepContext";
import InputData from "./InputData";
import Result from "./Result";
const StepController = () => {
  const { state } = useContext(StepContext);
  const hadleStepController = [<InputData />, <Result />];

  return hadleStepController[state.stepIndex];
};

export default StepController;
