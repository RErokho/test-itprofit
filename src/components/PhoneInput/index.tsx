import React, { memo, useCallback, useEffect, useState } from "react";

import { TInputChangeHandler } from "../../shared/types";
import {
  PHONE_ERROR_MESSAGE,
  PHONE_MAX_LENGTH,
  PHONE_REG,
} from "../../constants";

import InputWrapper from "../InputWrapper";

import { TPhoneInput } from "./types";

const PhoneInput: TPhoneInput = (props) => {
  const { value, onChange, label } = props;

  const [phone, setPhone] = useState<string>(value || "");
  const [isCorrect, setIsCorrect] = useState<boolean>(true);

  const changeHandler: TInputChangeHandler = useCallback(
    (event) => {
      const { value } = event.target;

      const replaced = value.replace(/\s/g, "");

      if (
        (replaced !== "" && !+replaced) ||
        replaced.length > PHONE_MAX_LENGTH
      ) {
        return;
      }
      setPhone(replaced);

      const isCorrect = PHONE_REG.test(replaced);
      setIsCorrect(isCorrect);

      onChange(isCorrect ? replaced : null);
    },
    [onChange, setIsCorrect]
  );

  useEffect(() => {
      setPhone(value || "");
  }, [value]);

  return (
    <InputWrapper
      errorMessage={isCorrect ? "" : PHONE_ERROR_MESSAGE}
      label={label}
      render={(inputClasses) => (
        <input
          className={inputClasses}
          placeholder={"7xxxxxxxxxx"}
          value={phone}
          onChange={changeHandler}
        />
      )}
    />
  );
};

export default memo(PhoneInput);
