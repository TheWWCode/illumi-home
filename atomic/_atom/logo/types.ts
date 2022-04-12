interface LogoSize {
  height: number;
  width: number;
}

export const LOGO_SIZE = {
  DEFAULT: { height: 40, width: 40 },
  MEDIUM: { height: 50, width: 50 },
};

export interface Props {
  size?: LogoSize;
}
