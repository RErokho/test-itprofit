import React, { memo, useCallback, useEffect, useState } from "react";

import { TInputChangeHandler } from "../../shared/types";
import { NAME_REG, NAME_REQUIRED_REG } from "../../constants";

import InputWrapper from "../InputWrapper";

import { TNameInput } from "./types";
import { useValidate } from "./hooks";

const NameInput: TNameInput = (props) => {
  const { value, onChange, label } = props;

  const [name, setName] = useState<string>("");
  const { error, updateValue } = useValidate();

  const changeHandler: TInputChangeHandler = useCallback(
    (event) => {
      const { value } = event.target;

      const upperText = value.toUpperCase();

      const isCorrect = NAME_REG.test(upperText);
      if (!isCorrect) {
        return;
      }

      setName(upperText);
      updateValue(upperText);

      onChange(NAME_REQUIRED_REG.test(upperText) ? upperText : null);
    },
    [setName, updateValue, onChange]
  );

  useEffect(() => {
    setName(value || "");
  }, [value]);

  return (
    <InputWrapper
      errorMessage={error || ""}
      label={label}
      render={(inputClasses) => (
        <input
          className={inputClasses}
          placeholder={"IVAN PETROV"}
          value={name}
          onChange={changeHandler}
        />
      )}
    />
  );
};

export default memo(NameInput);
