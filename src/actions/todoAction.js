import { ADD_TODO } from "../utils/types";

export const addTodo = (note) => async (dispatch) => {
  dispatch({
    type: ADD_TODO,
    payload: note,
  });
};
