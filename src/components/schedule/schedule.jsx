import React, { useState } from "react";
import moment from "moment";

import styles from "./schedule.module.css";
import Modal from "../modal";
import ModalEventsOfTheDay from "../modal/modal-events-of-the-day";

const Schedule = () => {
  const [modalState, setModalState] = useState(false);
  const [modalCurrentDateInfo, setmodalCurrentDateInfo] = useState({
    numberDay: "",
    month: "",
    weekDay: "",
    year: "",
  });

  const [monthNumber, setMonthNumber] = useState(0);
  const monthDays = getDaysArrayByMonth(monthNumber);
  const day = monthDays[10];
  const currentMonth = day.month;
  const currentYear = day.year;

  function getDaysArrayByMonth(monthNumber) {
    const date = moment().format("DD");
    const currentDate = date - 1;

    var daysInMonth = moment().subtract(monthNumber, "month").daysInMonth();
    const arrDays = [];

    for (let i = 0; i < daysInMonth; i++) {
      const current = moment()
        .subtract(monthNumber, "month")
        .date(i + 1);
      arrDays.push({
        id: i,
        day: current.format("DD"),
        weekDay: current.format("dddd"),
        active: i === currentDate,
        month: current.format("MMMM"),
        year: current.format("YYYY"),
      });
    }

    const firstDayOfMonth = arrDays[0];
    const firstWeekDay = firstDayOfMonth.weekDay;

    const lastItem = arrDays[arrDays.length - 1];
    const lastWeekDay = lastItem.weekDay;

    //To add number in the beginig of array and put order en the correct place to each day
    if (firstWeekDay === "Tuesday") {
      arrDays.unshift({ day: 0, weekDay: "Monday", active: false });
    }
    if (firstWeekDay === "Wednesday") {
      arrDays.unshift(
        { day: "", weekDay: "Monday", active: false },
        { day: "", weekDay: "Tuesday", active: false }
      );
    }
    if (firstWeekDay === "Thursday") {
      arrDays.unshift(
        { day: "", weekDay: "Monday", active: false },
        { day: "", weekDay: "Tuesday", active: false },
        { day: "", weekDay: "Wednesday", active: false }
      );
    }
    if (firstWeekDay === "Friday") {
      arrDays.unshift(
        { day: "", weekDay: "Monday", active: false },
        { day: "", weekDay: "Tuesday", active: false },
        { day: "", weekDay: "Wednesday", active: false },
        { day: "", weekDay: "Thursday", active: false }
      );
    }
    if (firstWeekDay === "Saturday") {
      arrDays.unshift(
        { day: "", weekDay: "Monday", active: false },
        { day: "", weekDay: "Tuesday", active: false },
        { day: "", weekDay: "Wednesday", active: false },
        { day: "", weekDay: "Thursday", active: false },
        { day: "", weekDay: "Friday", active: false }
      );
    }
    if (firstWeekDay === "Sunday") {
      arrDays.unshift(
        { day: "", weekDay: "Monday", active: false },
        { day: "", weekDay: "Tuesday", active: false },
        { day: "", weekDay: "Wednesday", active: false },
        { day: "", weekDay: "Thursday", active: false },
        { day: "", weekDay: "Friday", active: false },
        { day: "", weekDay: "Saturday", active: false }
      );
    }
    //To add number in the ending of array and put order en the correct place to each day
    if (lastWeekDay === "Monday") {
      arrDays.push(
        { day: "", weekDay: "Tuesday", active: false },
        { day: "", weekDay: "Wednesday", active: false },
        { day: "", weekDay: "Thursday", active: false },
        { day: "", weekDay: "Friday", active: false },
        { day: "", weekDay: "Saturday", active: false },
        { day: "", weekDay: "Sunday", active: false }
      );
    }
    if (lastWeekDay === "Tuesday") {
      arrDays.push(
        { day: "", weekDay: "Wednesday", active: false },
        { day: "", weekDay: "Thursday", active: false },
        { day: "", weekDay: "Friday", active: false },
        { day: "", weekDay: "Saturday", active: false },
        { day: "", weekDay: "Sunday", active: false }
      );
    }
    if (lastWeekDay === "Wednesday") {
      arrDays.push(
        { day: "", weekDay: "Thursday", active: false },
        { day: "", weekDay: "Friday", active: false },
        { day: "", weekDay: "Saturday", active: false },
        { day: "", weekDay: "Sunday", active: false }
      );
    }
    if (lastWeekDay === "Thursday") {
      arrDays.push(
        { day: "", weekDay: "Friday", active: false },
        { day: "", weekDay: "Saturday", active: false },
        { day: "", weekDay: "Sunday", active: false }
      );
    }

    if (lastWeekDay === "Friday") {
      arrDays.push(
        { day: "", weekDay: "Saturday", active: false },
        { day: "", weekDay: "Sunday", active: false }
      );
    }
    if (lastWeekDay === "Saturday") {
      arrDays.push({ day: "", weekDay: "Sunday", active: false });
    }
    return arrDays;
  }

  const prevMonth = () => {
    setMonthNumber(monthNumber + 1);
  };
  const nextMonth = () => {
    setMonthNumber(monthNumber - 1);
  };
  const openModal = (numberDay, month, weekDay, year) => {
    const date = {
      numberDay,
      month,
      weekDay,
      year,
    };
    setmodalCurrentDateInfo(date);
    setModalState(true);
  };

  return (
    <React.Fragment>
      <div>
        <div className={styles.wrapperMonthYear}>
          <div className={styles.wrapperMonthSwitch}>
            <button onClick={prevMonth}>-</button>
            <div className={styles.month}>{currentMonth}</div>
            <button onClick={nextMonth}>+</button>
          </div>
          <div className={styles.year}>{currentYear}</div>
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
            const numberDay = item.day;
            const month = item.month;
            const weekDay = item.weekDay;
            const year = item.year;

            return numberDay === "" ? (
              <div key={index} className={styles.day}></div>
            ) : (
              <button
                key={index}
                className={styles.day}
                onClick={() => openModal(numberDay, month, weekDay, year)}
              >
                {item.day}
              </button>
            );
          })}
        </div>
      </div>
      <Modal
        open={modalState}
        close={() => setModalState(false)}
        footer={false}
        header={false}
      >
        <ModalEventsOfTheDay
          date={modalCurrentDateInfo}
          close={() => setModalState(false)}
        />
      </Modal>
    </React.Fragment>
  );
};

export default Schedule;
