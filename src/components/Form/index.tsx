import React, { memo, useCallback, useEffect, useState } from "react";
import classNames from "classnames";

import { REQUEST_ERROR, Status } from "../../constants";

import NameInput from "../NameInput";
import MailInput from "../EMailInput";
import PhoneInput from "../PhoneInput";
import DateInput from "../DateInput";
import TextArea from "../TextArea";
import Spinner from "../Spinner";

import usePost from "./hooks";
import { getEmptyData } from "./utils";
import { TForm, TState } from "./types";
import styles from "./styles.module.scss";

const Form: TForm = () => {
  const [state, setState] = useState<TState>(getEmptyData());

  const { post, status, setStatus } = usePost();

  const onChange = useCallback(
    (field: keyof TState, value: TState[keyof TState]) => {
      if (status !== Status.pending) {
        setStatus(Status.pending);
      }

      setState((oldState) => {
        return { ...oldState, [field]: value };
      });
    },
    [setState, status]
  );

  const submit = useCallback(async () => {
    post(state);
  }, [state, post]);

  useEffect(() => {
    if (status === Status.success) {
      setState(getEmptyData());
    }
  }, [status]);

  const { email, name, text, phone, birthday } = state;

  const isDisabled =
    name === null ||
    email === null ||
    phone === null ||
    birthday === null ||
    text === null ||
    status === Status.loading;

  const btnClasses = classNames(styles.btn, isDisabled && styles.btn__disabled);
  const messageClasses = classNames(
    styles.message,
    status === Status.error && styles.message__error,
    status === Status.success && styles.message__success
  );

  const needMessage: boolean =
    status !== Status.pending && status !== Status.loading;

  return status === Status.loading ? (
    <Spinner />
  ) : (
    <div className={styles.container}>
      {needMessage && (
        <div className={messageClasses}>{REQUEST_ERROR[status]}</div>
      )}
      <div className={styles.title}>Registration</div>
      <NameInput
        value={name}
        onChange={(value) => onChange("name", value)}
        label={"Name & Surname"}
      />
      <MailInput
        value={email}
        onChange={(value) => onChange("email", value)}
        label={"Email"}
      />
      <PhoneInput
        value={phone}
        onChange={(value) => onChange("phone", value)}
        label={"Phone"}
      />
      <DateInput
        value={birthday}
        onChange={(value) => onChange("birthday", value)}
        label={"Birthday"}
      />
      <TextArea
        value={text}
        onChange={(value) => onChange("text", value)}
        label={"Message"}
      />
      <div className={styles.btnContainer}>
        <button disabled={isDisabled} className={btnClasses} onClick={submit}>
          Send
        </button>
      </div>
    </div>
  );
};

export default memo(Form);
