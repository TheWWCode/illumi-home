import { LogoTag } from "./styled";
import LogoWordLight from "../../_static/images/logo.png";
import { Props, LOGO_SIZE } from "./types";

const Logo = ({ size = LOGO_SIZE.DEFAULT }: Props) => (
  <LogoTag
    src={LogoWordLight}
    alt="Talent Protocol Logo"
    size={size}
  />
);

export default Logo;
