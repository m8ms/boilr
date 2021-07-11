import { FC } from "react";
import { ButtonProps, ButtonVariantEnum } from "./types";
import StyledButton from "./styled/StyledButton";

const Button: FC<ButtonProps> = ({
  children,
  variant = ButtonVariantEnum.PRIMARY,
  onClick,
}) => {
  return (
    <StyledButton onClick={onClick} variant={variant}>
      {children}
    </StyledButton>
  );
};

export default Button;

export { ButtonVariantEnum };
