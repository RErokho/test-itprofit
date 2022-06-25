import { FunctionComponent } from "react";

export type TDateInputProps = {
  label: string;

  onChange: (date: number | null) => void;
  value: number | null;
};

export type TDateInput = FunctionComponent<TDateInputProps>;
