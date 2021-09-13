import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./schedule.module.css";
import {
  getDataCurrentMonth,
  prevMonthAction,
} from "../../redux/scheduleStore";
import GetDaysArrayByMonth from "./schedule-data";

const Schedule = () => {
  const monthDays = GetDaysArrayByMonth();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.schedule.daysCurrentMonth);
  const monthName = useSelector((state) => state.schedule.currentMonthName);

  console.log(`monthDays`, monthDays);

  useEffect(() => {
    dispatch(getDataCurrentMonth(monthDays));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const prevMonth = () => {
    dispatch(prevMonthAction());
  };
  const nextMonth = () => {
    // dispatch(nextMonthAction());
  };
  return (
    <div className={styles.containerSchedule}>
      <div className={styles.wrapperMonthYear}>
        <div className={styles.wrapperMonthSwitch}>
          <button onClick={prevMonth}>-</button>
          <div className={styles.month}>{monthName}</div>
          <button onClick={nextMonth}>+</button>
        </div>
        <div className={styles.year}>Year</div>
      </div>
      <div className={styles.weekDays}>
        <div className={styles.weekDay}>MON</div>
        <div className={styles.weekDay}>TUE</div>
        <div className={styles.weekDay}>WEN</div>
        <div className={styles.weekDay}>THU</div>
        <div className={styles.weekDay}>FRI</div>
        <div className={styles.weekDay}>SAT</div>
        <div className={styles.weekDay}>SUN</div>
      </div>
      <div className={styles.containerDaysOfMonth}>
        {data.map((item, index) => {
          return (
            <div key={index} className={styles.day}>
              {item.day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Schedule;

//finish to add days in the beginig of the array
//add false day in the end of the array
