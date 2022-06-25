import React, { memo } from "react";
import classNames from "classnames";

import { TInputWrapper } from "./types";
import styles from "./styles.module.scss";

const InputWrapper: TInputWrapper = (props) => {
  const { errorMessage = "", label, render } = props;

  const hasError = !!errorMessage;

  const containerClasses = classNames(styles.container);
  const labelClasses = classNames(
    styles.label,
    hasError && styles.label__error
  );
  const inputClasses = classNames(
    styles.input,
    hasError && styles.input__error
  );

  return (
    <div className={containerClasses}>
      <div className={labelClasses}>{label}</div>

      {render(inputClasses)}

      {hasError && <div className={styles.errorMessage}>{errorMessage}</div>}
    </div>
  );
};

export default memo(InputWrapper);
