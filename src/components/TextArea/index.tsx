import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import classNames from "classnames";

import { TTextAreaChangeHandler } from "../../shared/types";
import {
  TEXT_MAX_ERROR_MESSAGE,
  TEXT_MAX_LENGTH,
  TEXT_MIN_ERROR_MESSAGE,
  TEXT_MIN_LENGTH,
} from "../../constants";

import InputWrapper from "../InputWrapper";

import { TTextArea } from "./types";
import styles from "./styles.module.scss";

const PADDING = 8;

const TextArea: TTextArea = (props) => {
  const { value, onChange, label } = props;

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState<string>(value || "");
  const [isCorrect, setIsCorrect] = useState<boolean>(true);

  const changeHandler: TTextAreaChangeHandler = useCallback(
    (event) => {
      const { value } = event.target;

      const isCorrected =
        value.length >= TEXT_MIN_LENGTH && value.length <= TEXT_MAX_LENGTH;

      setIsCorrect(isCorrected);
      setText(value);

      onChange(isCorrected ? value : null);
    },
    [onChange, setIsCorrect, setText]
  );

  useEffect(() => {
    if (textareaRef.current === null) {
      return;
    }

    textareaRef.current.style.height = "0px";
    textareaRef.current.style.height =
      textareaRef.current.scrollHeight - PADDING * 2 + "px";
  }, [text, textareaRef]);

  useEffect(() => {
    setText(value || "");
  }, [value]);

  const errorMessage = isCorrect
    ? ""
    : text.length <= TEXT_MAX_LENGTH
    ? TEXT_MIN_ERROR_MESSAGE
    : TEXT_MAX_ERROR_MESSAGE;

  return (
    <InputWrapper
      errorMessage={errorMessage}
      label={label}
      render={(classes) => (
        <textarea
          ref={textareaRef}
          className={classNames(classes, styles.textarea)}
          placeholder={"Message"}
          value={text}
          onChange={changeHandler}
        />
      )}
    />
  );
};

export default memo(TextArea);
