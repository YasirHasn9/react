import { createStore, applyMiddleware , compose } from "redux";
import rootReducers from "./reducers/index";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export default function configureStore(initialState) {
  // this is will ass support for the redux dev tools 
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  
  return createStore(
    rootReducers,
    initialState,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
  );
}


// reduxImmutableStateInvariant this a middle that will warn 
// us every time if we accidentally mutate redux state 