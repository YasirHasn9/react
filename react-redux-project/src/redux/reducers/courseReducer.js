export default function courseReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_COURSE":
      return [...state, { ...action.course }];

    default:
      return state;

    //   so if the reducer recievs unrelated actions it should return the
    // unchanged state
  }
}
