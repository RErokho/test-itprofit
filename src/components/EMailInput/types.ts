import { FunctionComponent } from "react";

export type TEMailInputProps = {
  label: string;

  onChange: (value: string | null) => void;
  value: string | null;
};

export type TEMailInput = FunctionComponent<TEMailInputProps>;
