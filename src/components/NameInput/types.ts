import { FunctionComponent } from "react";

export type TNameInputProps = {
  label: string;

  onChange: (value: string | null) => void;
  value: string | null;
};

export type TNameInput = FunctionComponent<TNameInputProps>;

export type TValue = {
  name: string;
  surname: string;
};

export type TGetData = (str: string) => TValue;

export type TResult = {
  nameMinLength: boolean;
  surnameMinLength: boolean;
  nameMaxLength: boolean;
  surnameMaxLength: boolean;
};

export type TValidate = (value: TValue) => TResult;

export type TUpdateValue = (data: string) => void;

export type TUseValidate = () => {
  error: string | null;
  updateValue: TUpdateValue;
};
