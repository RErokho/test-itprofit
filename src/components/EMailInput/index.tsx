import React, { memo, useCallback, useEffect, useState } from "react";

import { TInputChangeHandler } from "../../shared/types";
import { EMAIL_ERROR_MESSAGE, EMAIL_REG } from "../../constants";

import InputWrapper from "../InputWrapper";

import { TEMailInput } from "./types";

const EmailInput: TEMailInput = (props) => {
  const { value, onChange, label } = props;

  const [email, setEmail] = useState<string>(value || "");
  const [isCorrect, setIsCorrect] = useState<boolean>(true);

  const changeHandler: TInputChangeHandler = useCallback(
    (event) => {
      const { value } = event.target;

      const isCorrect = EMAIL_REG.test(value);

      setIsCorrect(isCorrect);
      setEmail(value);

      onChange(isCorrect ? value.replace(/\s/g, "") : null);
    },
    [onChange, setIsCorrect]
  );

  useEffect(() => {
    setEmail(value || "");
  }, [value]);

  return (
    <InputWrapper
      errorMessage={isCorrect ? "" : EMAIL_ERROR_MESSAGE}
      label={label}
      render={(inputClasses) => (
        <input
          className={inputClasses}
          placeholder={"my-mail@box.region"}
          value={email}
          onChange={changeHandler}
        />
      )}
    />
  );
};

export default memo(EmailInput);
