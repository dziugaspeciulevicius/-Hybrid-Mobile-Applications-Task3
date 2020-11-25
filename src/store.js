import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { adReducer } from "./reducers/adReducers";

const reducer = combineReducers({
    adList: adReducer
});

const initialState = {
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;

// to persist store we can do this:
// import { persistStore } from "redux-persist";
// export const persistor = persistStore(store);
// export default { store, persistor };