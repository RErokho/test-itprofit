import { FunctionComponent } from "react";

export type TInputWrapperProps = {
  label: string;
  errorMessage: string;

  render: (classes: string) => JSX.Element;
};

export type TInputWrapper = FunctionComponent<TInputWrapperProps>;
