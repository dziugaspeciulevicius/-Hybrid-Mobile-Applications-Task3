import { ADS_FETCH, AD_SAVE_INFO } from "../constants/adConstants";

export const adReducer = (state = { adLists: [], editAd: {} }, action) => {
  const item = action.payload;
  switch (action.type) {
    case ADS_FETCH:
      return {
        ...state,
        adLists: action.payload,
      };
    case AD_SAVE_INFO:
      return {
        ...state,
        editAd: action.payload,
      };
    default:
      return state;
  }
};
