import { FC, useContext } from "react";
import { Trash } from "@phosphor-icons/react";

import StepContext from "../../contexts/StepContext";
import { Text, Col, SubTitle, ButtonSecondary } from "../../styles/app";
import { DisplayItemRow } from "./styles";
import { IUniqueItem } from "../../types/stepContextTypes";

type ItemRowProps = {
  e: IUniqueItem;
  i: number;
};

const ItemRow: FC<ItemRowProps> = ({ e, i }) => {
  const { removeItem } = useContext(StepContext);
  return (
    <DisplayItemRow key={e.uniqueiD}>
      <SubTitle>Item {i + 1}</SubTitle>
      <Col>
        <Text>
          Width
          <br />
          <br />
          {e.width}
        </Text>
      </Col>
      <Col>
        <Text>
          Height
          <br />
          <br />
          {e.height}
        </Text>
      </Col>
      <Col>
        <Text>
          Length
          <br />
          <br />
          {e.length}
        </Text>
      </Col>

      <Col>
        <Text>
          Quantity
          <br />
          <br />
          {e.quantity}
        </Text>
      </Col>
      <Col>
        <ButtonSecondary onClick={() => removeItem(e.uniqueiD)}>
          <Trash size={16} />
        </ButtonSecondary>
      </Col>
    </DisplayItemRow>
  );
};

export default ItemRow;
