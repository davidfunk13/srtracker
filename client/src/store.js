import { createStore, compose, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./reducers/rootReducer";

import { persistStore, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/es/storage";

const loggerMiddleware = createLogger({
  collapsed: false,
  duration: true,
  diff: true
});
const middleware = [thunk, loggerMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = composeEnhancers(applyMiddleware(...middleware))(
  createStore
);

const config = {
  key: "root",
  storage
};
const combinedReducer = persistCombineReducers(config, rootReducer);
const createAppStore = () => {
  let store = configureStore(combinedReducer);
  let persistor = persistStore(store);

  return { persistor, store };
};

export default createAppStore;
// export default function configureStore(initialState) {
//   const middleware = [
//     createLogger({
//       collapsed: false,
//       duration: true,
//       diff: true
//     }),
//     thunk
//   ];

//   const store = createStore(
//     rootReducer,
//     initialState,
//     compose(
//       applyMiddleware(...middleware),
//       window.devToolsExtension ? window.devToolsExtension() : format => format // add support for Redux dev tools),
//     )
//   );

//   return store;
// }
