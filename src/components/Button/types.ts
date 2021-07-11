export enum ButtonVariantEnum {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  BORDERLESS = "borderless",
}

export interface ButtonProps extends ChildrenProps {
  variant?: ButtonVariantEnum;
  disabled?: boolean;
  onClick(): void;
}
