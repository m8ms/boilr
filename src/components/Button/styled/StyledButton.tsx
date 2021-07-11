import styled from "styled-components";
import { Theme } from "theme/types";
import { ButtonProps, ButtonVariantEnum } from "../types";

interface StyledButtonProps extends ButtonProps {
  theme: Theme;
}

const getBorderColor = ({
  theme: { color },
  variant,
}: StyledButtonProps): string => {
  switch (variant) {
    case ButtonVariantEnum.SECONDARY:
      return color.secondary;
    case ButtonVariantEnum.BORDERLESS:
      return "transparent";
    default:
      return color.primary;
  }
};

const getTextColor = ({ theme, variant }: StyledButtonProps): string => {
  switch (variant) {
    case ButtonVariantEnum.SECONDARY:
      return theme.color.onSecondary;
    case ButtonVariantEnum.BORDERLESS:
    case ButtonVariantEnum.PRIMARY:
    default:
      return theme.color.onPrimary;
  }
};

const getBackgroundColor = ({
  theme,
  variant = ButtonVariantEnum.PRIMARY,
}: StyledButtonProps): string => {
  switch (variant) {
    case ButtonVariantEnum.BORDERLESS:
      return "transparent";
    default:
      return theme.color[variant];
  }
};

const getDisabledOpacity = ({ disabled }: StyledButtonProps): string =>
  disabled ? ".7" : "1";

const StyledButton = styled.button<StyledButtonProps>`
  background: ${getBackgroundColor};
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 500;
  padding: 8px 16px;
  box-sizing: border-box;
  border-radius: 4px;
  min-height: 48px;
  width: 100%;
  border: 1px solid ${getBorderColor};
  color: ${getTextColor};
  opacity: ${getDisabledOpacity};
`;

export default StyledButton;
