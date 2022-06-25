import { useCallback, useState } from "react";
import axios from "axios";

import { Status } from "../../constants";

import { TPost, TUsePost } from "./types";

const usePost: TUsePost = () => {
  const [status, setStatus] = useState<Status>(Status.pending);

  const post: TPost = useCallback(
    async (state) => {
      const { email, name, text, phone, birthday } = state;

      if (
        name === null ||
        email === null ||
        phone === null ||
        birthday === null ||
        text === null
      ) {
        return;
      }

      setStatus(Status.loading);

      await axios
        .post("http://localhost:9090/api/registration", {
          name,
          email,
          phone,
          birthday: birthday.valueOf(),
          text,
        })
        .then(() => setStatus(Status.success))
        .catch(() => setStatus(Status.error));
    },
    [setStatus]
  );

  return {
    status,
    setStatus,
    post,
  };
};

export default usePost;
