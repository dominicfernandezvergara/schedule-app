const initialData = {
  currentMonth: 0,
  daysCurrentMonth: [],
  currentYear: "",
  currentMonthName: "",
};

const PREV_MONTH = "PREV_MONTH";
const NEXT_MONTH = "NEXT_MONTH";
const GET_DATA_CURRENT_MONTH = "GET_DATA_CURRENT_MONTH";

export default function scheduleReducer(state = initialData, action) {
  switch (action.type) {
    case GET_DATA_CURRENT_MONTH: {
      console.log(`action.payload`, action.payload);
      const day = action.payload[10];
      const monthName = day.month;
      const yearNumber = day.year;
      console.log(`day`, day);
      console.log(`monthName`, monthName);

      return {
        ...state,
        daysCurrentMonth: [...action.payload],
        currentYear: yearNumber,
        currentMonthName: monthName,
      };
    }
    case PREV_MONTH: {
      return {
        ...state,
        currentMonth: state.currentMonth + 1,
      };
    }
    case NEXT_MONTH: {
      return {
        ...state,
        currentMonth: state.currentMonth - 1,
      };
    }
    default:
      return state;
  }
}

export const prevMonthAction = () => async (dispatch) => {
  dispatch({
    type: PREV_MONTH,
  });
};
export const nextMonthAction = () => async (dispatch) => {
  dispatch({
    type: NEXT_MONTH,
  });
};
export const getDataCurrentMonth = (monthDays) => async (dispatch) => {
  dispatch({
    type: GET_DATA_CURRENT_MONTH,
    payload: monthDays,
  });
};
