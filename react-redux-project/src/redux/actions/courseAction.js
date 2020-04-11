import * as types from "./actionType";
export const createAction = course => {
  return {
    type: types.CREATE_COURSE,
    course: course
  };
};
// since the right and left are match we can only use one name
// this is call object shorthand
