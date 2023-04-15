import { FC, useContext } from "react";

import StepContext from "../../../contexts/StepContext";
import InsertItem from "../../InsertItem";
import ItemRow from "../../ItemRow";
import { Container, InputTitle } from "./styles";

const InputData: FC = () => {
  const { state } = useContext(StepContext);

  return (
    <Container>
      <InputTitle>
        Calculate the Exact Number of Containers Needed with Our Calculator!
      </InputTitle>
      {state.data.map((e, i) => {
        return <ItemRow e={e} i={i} />;
      })}
      <InsertItem />
    </Container>
  );
};

export default InputData;
