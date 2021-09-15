// import moment from "moment";

// import { useSelector } from "react-redux";

// const date = moment().format("DD");
// const currentDate = date - 1;

// function GetDaysArrayByMonth() {
//   const monthNumber = useSelector((state) => state.schedule.currentMonth);

//   var daysInMonth = moment().subtract(monthNumber, "month").daysInMonth();
//   const arrDays = [];

//   for (let i = 0; i < daysInMonth; i++) {
//     const current = moment()
//       .subtract(monthNumber, "month")
//       .date(i + 1);
//     arrDays.push({
//       id: i,
//       day: current.format("DD"),
//       weekDay: current.format("dddd"),
//       active: i === currentDate,
//       month: current.format("MMMM"),
//       year: current.format("YYYY"),
//     });
//   }

//   const firstDayOfMonth = arrDays[0];
//   const firstWeekDay = firstDayOfMonth.weekDay;

//   const lastItem = arrDays[arrDays.length - 1];
//   const lastWeekDay = lastItem.weekDay;

//   //To add number in the beginig of array and put order en the correct place to each day
//   if (firstWeekDay === "Tuesday") {
//     arrDays.unshift({ day: 0, weekDay: "Monday", active: false });
//   }
//   if (firstWeekDay === "Wednesday") {
//     arrDays.unshift(
//       { day: 0, weekDay: "Monday", active: false },
//       { day: 0, weekDay: "Tuesday", active: false }
//     );
//   }
//   if (firstWeekDay === "Thursday") {
//     arrDays.unshift(
//       { day: 0, weekDay: "Monday", active: false },
//       { day: 0, weekDay: "Tuesday", active: false },
//       { day: 0, weekDay: "Wednesday", active: false }
//     );
//   }
//   if (firstWeekDay === "Friday") {
//     arrDays.unshift(
//       { day: 0, weekDay: "Monday", active: false },
//       { day: 0, weekDay: "Tuesday", active: false },
//       { day: 0, weekDay: "Wednesday", active: false },
//       { day: 0, weekDay: "Thursday", active: false }
//     );
//   }
//   if (firstWeekDay === "Saturday") {
//     arrDays.unshift(
//       { day: 0, weekDay: "Monday", active: false },
//       { day: 0, weekDay: "Tuesday", active: false },
//       { day: 0, weekDay: "Wednesday", active: false },
//       { day: 0, weekDay: "Thursday", active: false },
//       { day: 0, weekDay: "Friday", active: false }
//     );
//   }
//   if (firstWeekDay === "Sunday") {
//     arrDays.unshift(
//       { day: 0, weekDay: "Monday", active: false },
//       { day: 0, weekDay: "Tuesday", active: false },
//       { day: 0, weekDay: "Wednesday", active: false },
//       { day: 0, weekDay: "Thursday", active: false },
//       { day: 0, weekDay: "Friday", active: false },
//       { day: 0, weekDay: "Saturday", active: false }
//     );
//   }
//   //To add number in the ending of array and put order en the correct place to each day
//   if (lastWeekDay === "Monday") {
//     arrDays.push(
//       { day: 0, weekDay: "Tuesday", active: false },
//       { day: 0, weekDay: "Wednesday", active: false },
//       { day: 0, weekDay: "Thursday", active: false },
//       { day: 0, weekDay: "Friday", active: false },
//       { day: 0, weekDay: "Saturday", active: false },
//       { day: 0, weekDay: "Sunday", active: false }
//     );
//   }
//   if (lastWeekDay === "Tuesday") {
//     arrDays.push(
//       { day: 0, weekDay: "Wednesday", active: false },
//       { day: 0, weekDay: "Thursday", active: false },
//       { day: 0, weekDay: "Friday", active: false },
//       { day: 0, weekDay: "Saturday", active: false },
//       { day: 0, weekDay: "Sunday", active: false }
//     );
//   }
//   if (lastWeekDay === "Wednesday") {
//     arrDays.push(
//       { day: 0, weekDay: "Thursday", active: false },
//       { day: 0, weekDay: "Friday", active: false },
//       { day: 0, weekDay: "Saturday", active: false },
//       { day: 0, weekDay: "Sunday", active: false }
//     );
//   }
//   if (lastWeekDay === "Thursday") {
//     arrDays.push(
//       { day: 0, weekDay: "Friday", active: false },
//       { day: 0, weekDay: "Saturday", active: false },
//       { day: 0, weekDay: "Sunday", active: false }
//     );
//   }

//   if (lastWeekDay === "Friday") {
//     arrDays.push(
//       { day: 0, weekDay: "Saturday", active: false },
//       { day: 0, weekDay: "Sunday", active: false }
//     );
//   }
//   if (lastWeekDay === "Saturday") {
//     arrDays.push({ day: 0, weekDay: "Sunday", active: false });
//   }
//   return arrDays;
// }
// export default GetDaysArrayByMonth;
