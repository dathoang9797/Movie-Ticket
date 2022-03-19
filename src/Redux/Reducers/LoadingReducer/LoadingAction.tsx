import {
  SET_REQUEST_SPINNER_ENDED,
  SET_REQUEST_SPINNER_STARTED,
} from '@Redux/Reducers/LoadingReducer/LoadingConstant';
export const setRequestSpinnerEnded = () => {
  return {
    type: SET_REQUEST_SPINNER_ENDED,
  } as const;
};

export const setRequestSpinnerStarted = () => {
  return {
    type: SET_REQUEST_SPINNER_STARTED,
  } as const;
};

export type ActionLoadingType =
  | ReturnType<typeof setRequestSpinnerEnded>
  | ReturnType<typeof setRequestSpinnerStarted>;
