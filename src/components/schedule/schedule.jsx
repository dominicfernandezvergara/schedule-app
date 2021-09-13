import React from "react";
import moment from "moment";

import styles from "./schedule.module.css";

const Schedule = () => {
  const date = moment().format("DD");
  const currentDate = date - 1;
  const monthDays = getDaysArrayByMonth();

  function getDaysArrayByMonth() {
    var daysInMonth = moment().daysInMonth();
    console.log(`daysInMonth`, daysInMonth);
    const arrDays = [];

    for (let i = 0; i < daysInMonth; i++) {
      const current = moment().date(i + 1);
      arrDays.push({
        id: i,
        day: current.format("DD"),
        weekDay: current.format("dddd"),
        active: i === currentDate,
      });
    }
    console.log(`arrDays`, arrDays);
    const firstDayOfMonth = arrDays[0];
    const firstWeekDay = firstDayOfMonth.weekDay;
    console.log(`firstWeekDay`, firstWeekDay);
    if (firstWeekDay === "Wednesday") {
      arrDays.unshift(
        { day: 0, weekDay: "Monday", active: false },
        { day: 0, weekDay: "Tuesday", active: false }
      );
    }

    return arrDays;
  }

  return (
    <div className={styles.containerSchedule}>
      <div className={styles.wrapperMonthYear}>
        <div className={styles.wrapperMonthSwitch}>
          <button>+</button>
          <div className={styles.month}>Month</div>
          <button>-</button>
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
        {monthDays.map((item, index) => {
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
