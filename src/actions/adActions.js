import firebase from "../firebase.utils";
import { ADS_FETCH } from "../constants/adConstants";

export const getAds = () => {
  return (dispatch) => {
    firebase
      .database()
      .ref("/ads")
      .on("value", (snapshot) => {
        dispatch({
          type: ADS_FETCH,
          payload: snapshot.val(),
        });
      });
  };
};

export const postAd = (title, details, price) => {
  return () => {
    firebase.database().ref("/ads").push({ title, details, price });
  };
};

export const deleteAd = (key) => {
  return () => {
    firebase.database().ref(`/ads/${key}`).remove();
    // firebase.database().ref(`/ads`).child(key).remove()
  };
};

export const editAd = (key, adtitle, addetails, adprice) => {
  return () => {
    firebase.database().ref(`/ads/${key}`).update({
      title: adtitle,
      details: addetails,
      price: adprice,
    });
  };
};
