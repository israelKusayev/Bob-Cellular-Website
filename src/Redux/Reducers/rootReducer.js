import {
  FETCH_CUSTOMER_BEGIN,
  FETCH_CUSTOMER_SUCCESS,
  FETCH_CUSTOMER_FAILURE
} from '../Actions/customernActions';

const initialState = {
  customer: {},
  loading: false,
  error: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CUSTOMER_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_CUSTOMER_SUCCESS:
      return {
        ...state,
        loading: false,
        customer: action.payload.customer
      };
    case FETCH_CUSTOMER_FAILURE:
      debugger;
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        Customer: {}
      };
    default:
      return state;
  }
};

export default rootReducer;
