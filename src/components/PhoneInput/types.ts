import { FunctionComponent } from "react";

export type TPhoneInputProps = {
  label: string;

  onChange: (value: string | null) => void;
  value: string | null;
};

export type TPhoneInput = FunctionComponent<TPhoneInputProps>;
