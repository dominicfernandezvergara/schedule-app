import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./modal-events-of-the-day.module.css";

function ModalEventsOfTheDay({ date, close }) {
  const history = useHistory();

  const addNewTask = () => {
    history.push("/add-new-task");
  };
  return (
    <React.Fragment>
      <div className={styles.containerModalEventsOfTheDay}>
        <div className={styles.header}>
          <div className={styles.weekDay}>{date.weekDay}, </div>
          <div className={styles.numberDay}>{date.numberDay}.</div>
          <div className={styles.month}>{date.month}</div>
          <div className={styles.year}>{date.year}</div>
          <button
            type="button"
            className={styles.addNewTask}
            onClick={addNewTask}
          >
            +
          </button>
          <button
            type="button"
            className={styles.closeModalButton}
            onClick={close}
          >
            X
          </button>
        </div>
        <div className={styles.containerTask}>
          <div className={styles.icon}>icon</div>
          <div className={styles.taskName}>task name</div>
          <button className={styles.checkup}>checkup</button>
          <button className={styles.edit}>edit</button>
          <button className={styles.delete}>delete</button>
        </div>
      </div>
    </React.Fragment>
  );
}
ModalEventsOfTheDay.propTypes = {
  date: PropTypes.object.isRequired,
  close: PropTypes.func.isRequired,
};
export default ModalEventsOfTheDay;
