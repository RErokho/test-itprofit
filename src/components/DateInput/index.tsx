import React, { memo, useCallback, useEffect, useRef, useState } from "react";

import { DATE_ERROR_MESSAGE } from "../../constants";
import { TInputChangeHandler } from "../../shared/types";

import InputWrapper from "../InputWrapper";

import { TDateInput } from "./types";
import styles from "./styles.module.scss";

const DateInput: TDateInput = (props) => {
  const { value = null, onChange, label } = props;

  const [date, setDate] = useState<Date | null>(
    value === null ? null : new Date(value)
  );
  const [isCorrect, setIsCorrect] = useState<boolean>(true);
  const ref = useRef<HTMLInputElement>(null);

  const changeHandler: TInputChangeHandler = useCallback(
    (event) => {
      const { value } = event.target;

      const date = value.length === 0 ? null : new Date(event.target.value);

      setDate(date);

      const isCorrectDate = date === null ? false : date <= new Date();

      setIsCorrect(isCorrectDate);

      // @ts-ignore
      onChange(isCorrectDate ? date.valueOf() : null);
    },
    [onChange, setDate, setIsCorrect]
  );

  const onCLick = useCallback(() => {
    const current = ref.current;

    // @ts-ignore
    if (current !== null && typeof current.showPicker === "function") {
      // @ts-ignore
      current.showPicker();
    }
  }, [ref]);

  useEffect(() => {
    setDate(value === null ? null : new Date(value));
  }, [value]);

  return (
    <InputWrapper
      errorMessage={isCorrect ? "" : DATE_ERROR_MESSAGE}
      label={label}
      render={(inputClasses) => (
        <>
          <input
            type={"text"}
            className={inputClasses}
            value={date === null ? "" : date.toLocaleDateString()}
            placeholder={"MM/DD/YYYY"}
            onClick={onCLick}
            onChange={changeHandler}
          />
          <div className={styles.dateInputContainer}>
            <input
              type={"date"}
              ref={ref}
              className={styles.hidden}
              onChange={changeHandler}
            />
          </div>
        </>
      )}
    />
  );
};

export default memo(DateInput);
