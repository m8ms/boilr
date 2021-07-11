declare interface ChildrenProps {
  children?: React.ReactNode | React.ReactNode[];
}

declare interface MandatoryChildrenProps {
  children: React.ReactNode | React.ReactNode[];
}

declare type ValueOf<T> = T[keyof T];
