import { FunctionComponent } from "react";
import { Status } from "../../constants";

export type TFormProps = {};

export type TForm = FunctionComponent<TFormProps>;

export type TState = {
  name: string | null;
  email: string | null;
  phone: string | null;
  birthday: number | null;
  text: string | null;
};

export type TUsePost = () => {
  status: Status;
  setStatus: (newStatus: Status) => void;
  post: TPost;
};
export type TPost = (state: TState) => void;

export type TGetEmptyData = () => TState;
