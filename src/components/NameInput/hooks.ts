import { useCallback, useMemo, useState } from "react";

import {
  TGetData,
  TUpdateValue,
  TUseValidate,
  TValidate,
  TValue,
} from "./types";

const MIN_LENGTH: number = 3;
const MAX_LENGTH: number = 30;

const validateData: TValidate = (value) => {
  const { name, surname } = value;

  const nameLength = name.length;
  const surnameLength = surname.length;

  return {
    nameMinLength: nameLength >= MIN_LENGTH,
    surnameMinLength: surnameLength >= MIN_LENGTH,
    nameMaxLength: nameLength <= MAX_LENGTH,
    surnameMaxLength: surnameLength <= MAX_LENGTH,
  };
};

const getData: TGetData = (str: string) => {
  const data = str.split(" ");

  return {
    name: data[0] ? data[0] : "",
    surname: data[1] ? data[1] : "",
  };
};

export const useValidate: TUseValidate = () => {
  const [value, setValue] = useState<TValue | null>(null);

  const updateValue: TUpdateValue = useCallback(
    (str: string) => {
      setValue(getData(str));
    },
    [setValue]
  );

  const error: string | null = useMemo(() => {
    if (value === null) {
      return null;
    }

    const validation = validateData(value);

    return !validation.nameMinLength
      ? "Min name Length is 3"
      : !validation.nameMaxLength
      ? "Max name Length is 30"
      : !validation.surnameMinLength
      ? "Min surname Length is 3"
      : !validation.surnameMaxLength
      ? "Max surname Length is 30"
      : null;
  }, [value]);

  return {
    error,
    updateValue,
  };
};
