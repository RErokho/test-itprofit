import { FunctionComponent } from "react";

export type TTextAreaProps = {
  label: string;

  onChange: (value: string | null) => void;
  value: string | null;
};

export type TTextArea = FunctionComponent<TTextAreaProps>;
