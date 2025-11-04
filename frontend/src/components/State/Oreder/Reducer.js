import * as actionTypes from './ActionTypes'; // ✅ if your constants are in a separate file

const initialState = {
  loading: false,
  orders: [],
  error: null,
  notifications: [],
};

export const orderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_USER_ORDER_REQUEST:
      return { ...state, loading: true, error: null };

    case actionTypes.GET_USER_ORDER_SUCCESS:
      return { ...state, loading: false, error: null, orders: payload };

    case actionTypes.GET_USER_NOTIFICATION_SUCCESS:
      return { ...state, loading: false, error: null, notifications: payload };

    case actionTypes.GET_USER_ORDER_FAILURE:
    case actionTypes.GET_USER_NOTIFICATION_FAILURE:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
