import {combineReducers} from "redux"

import courses from "./coureseReducer"

const rootReducers = combineReducers(courses)

export default rootReducers