export const createAction = course => {
  return {
    type: "CREATE_COURSE",
    course: course
  };
};
// since the right and left are match we can only use one name
// this is call object shorthand
