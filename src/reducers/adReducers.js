import {
    AD_POST_ITEM,
    AD_UPDATE_ITEM,
    AD_DELETE_ITEM,
    AD_SHOW_ITEM,
    ADS_FETCH
  } from "../constants/adConstants";
  
  export const adReducer = (state = { adList: [] }, action) => {
    const item = action.payload;
    switch (action.type) {
      case ADS_FETCH:
        return {
          ...state,
          adList: action.payload 
        }
  //     case AD_POST_ITEM:
  //       const newAd = {
  //         ID: action.payload.id,
  //         Title: action.payload.title,
  //         Details: action.payload.details,
  //         Price: action.payload.price,
  //       };
  //       return {
  //         adList: state.adList.concat(newPost),
  //       };
  //     case AD_UPDATE_ITEM:
  //       return state;
  //     case AD_DELETE_ITEM:
  //         const index = state.ads.findIndex((ad) => ad.id === action.payload.id);
  //         return {
  //             adList: [...state.adList.slice(0, index), ...state.adList.slice(index + 1)],
  //         };
  //     case AD_SHOW_ITEM:
  //         const ads = [];
  //       for (let i = 0; i < action.payload.length; ++i) {
  //         ads.push(action.payload.item(i));
  //         console.log(action.payload.item(i));
  //       }
  //       return {
  //           adList: [...state.adList, ads]
  //       };
      default:
        return state;
    }
  };