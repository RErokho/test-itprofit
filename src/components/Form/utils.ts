import { TGetEmptyData } from "./types";

export const getEmptyData: TGetEmptyData = () => {
  return {
    name: null,
    birthday: null,
    email: null,
    phone: null,
    text: null,
  };
};
