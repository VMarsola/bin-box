import { FC } from "react";
import { HeaderContainer } from "./styles";
import LogoSVG from "../../assets/logo.svg";
const Header: FC = () => {
  return (
    <HeaderContainer>
      <img src={LogoSVG} alt="logo" />
    </HeaderContainer>
  );
};

export default Header;
