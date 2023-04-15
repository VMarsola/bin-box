import { FC } from "react";
import ReactDOM from "react-dom";

import { SpinnerContainer, SpinnerConent, InputTitle, Spinner } from "./styles";

const Loader: FC = () => {
  return ReactDOM.createPortal(
    <SpinnerContainer>
      <SpinnerConent>
        <InputTitle>Calculating</InputTitle>
        <Spinner size={50} color={"#fff"} />
      </SpinnerConent>
    </SpinnerContainer>,
    document.body
  );
};

export default Loader;
