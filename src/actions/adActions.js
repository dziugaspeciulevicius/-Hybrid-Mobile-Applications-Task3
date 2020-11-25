
import firebase from "../firebase.utils";
import { ADS_FETCH } from "../constants/adConstants";

export const getAds = () => {
  return (dispatch) => {
    firebase.database().ref("/ads").on("value", (snapshot) => {
      dispatch({
        type: ADS_FETCH,
        payload: snapshot.val(),
      });
    });
  };
};

export const postAd = (title, details, price) => {
  return (dispatch) => {
    firebase.database().ref('/ads').push({title, details, price})
  }
}


export const deleteAd = (key) => {
  return (dispatch) => {
    firebase.database().ref(`/ads/${key}`).remove()
  }
}