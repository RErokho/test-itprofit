import React, { memo } from "react";

import Form from "../Form";

import styles from "./styles.module.scss";

const App = () => {
  return (
    <div className={styles.container}>
      <Form />
    </div>
  );
};

export default memo(App);
