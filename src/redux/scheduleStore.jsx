const initialData = {
  currentMonth: 0,
  daysCurrentMonth: [],
  currentYear: "",
  currentMonthName: "",
};

const PREV_MONTH = "PREV_MONTH";
const GET_DATA_CURRENT_MONTH = "GET_DATA_CURRENT_MONTH";

export default function scheduleReducer(state = initialData, action) {
  switch (action.type) {
    case GET_DATA_CURRENT_MONTH: {
      const day = action.payload[10];
      const monthName = day.month;
      console.log(`monthName`, monthName);
      return {
        ...state,
        daysCurrentMonth: [...action.payload],
        currentMonthName: monthName,
      };
    }
    case PREV_MONTH: {
      console.log(`action.payload`, action.payload);
      return {
        ...state,
        currentMonth: state.currentMonth + 1,
      };
    }
    default:
      return state;
  }
}

export const prevMonthAction = () => async (dispatch) => {
  dispatch({
    type: PREV_MONTH,
    // payload: month,
  });
};
export const getDataCurrentMonth = (data) => async (dispatch) => {
  console.log(`data`, data);
  dispatch({
    type: GET_DATA_CURRENT_MONTH,
    payload: data,
  });
};
