import { FC, useContext } from "react";
import { Package } from "@phosphor-icons/react";

import { Row, Title } from "../../../styles/app";
import { Grid, Wrapper } from "./styles";
import StepContext from "../../../contexts/StepContext";

const InputData: FC = () => {
  const { reset, state } = useContext(StepContext);

  const PackageSize = (key: string) => {
    let size = 0;
    switch (key) {
      case "Large":
        size = 60;
        break;
      case "Medium":
        size = 50;
        break;
      case "Small":
        size = 40;
        break;
      default:
        size = 40;
        break;
    }

    return size;
  };

  const pElements = Object.keys(state.response).map((key, i) => {
    const objKey = state.response[key];
    if (objKey)
      return (
        <Title key={key}>
          <Package size={PackageSize(key)} />
          {objKey}
          {objKey > 1 ? " Containers" : " Container"} of {key} size
        </Title>
      );
  });

  return (
    <Wrapper>
      <Title style={{ margin: "4rem 0 6rem 0" }}>You will need:</Title>
      <Row>
        <Grid>{pElements}</Grid>
      </Row>
      <button type="submit" onClick={reset}>
        Recalculate
      </button>
    </Wrapper>
  );
};

export default InputData;
