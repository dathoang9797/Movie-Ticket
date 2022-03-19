import { ActionLoadingType } from '@Redux/Reducers/LoadingReducer/LoadingAction';
import {
  SET_REQUEST_SPINNER_ENDED,
  SET_REQUEST_SPINNER_STARTED,
} from '@Redux/Reducers/LoadingReducer/LoadingConstant';

type LoadingReducerInitialState = {
  isLoading: boolean;
  count: number;
};

const initialState = {
  isLoading: false,
  count: 0,
} as LoadingReducerInitialState;

const loadingReducer = (state = initialState, action: ActionLoadingType) => {
  switch (action.type) {
    case SET_REQUEST_SPINNER_STARTED: {
      return { ...state, isLoading: true, count: state.count + 1 };
    }
    case SET_REQUEST_SPINNER_ENDED: {
      if (state.count <= 0) {
        return { ...state, isLoading: false };
      }
      return { ...state, count: state.count - 1 };
    }
    default: {
      return state;
    }
  }
};

export default loadingReducer;
