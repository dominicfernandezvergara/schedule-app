import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./add-new-event.module.css";

function AddNewEvent({ month }) {
  const history = useHistory();
  const onClickBack = () => {
    history.push("/home");
  };
  return (
    <div className={styles.containerAddNewEvent}>
      <div className={styles.header}>
        <button
          type="button"
          className={styles.backButton}
          onClick={onClickBack}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default AddNewEvent;
