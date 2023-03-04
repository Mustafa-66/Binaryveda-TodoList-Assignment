import * as TYPES from "../../constants/actionTypes";

const initialState = {
  tasks: [],
};

const EditorReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.ADD_TASK:
      return {
        ...state,
        tasks: action.payload,
      };

    default:
      return state;
  }
};
export default EditorReducer;
