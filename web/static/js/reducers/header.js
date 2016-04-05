/**
 * Created by azhar on 04/04/16.
 */

import Constants  from '../constants';

const initialState = {
  showBoards: false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case Constants.HEADER_SHOW_BOARDS:
      return { ...state, showBoards: action.show };

    default:
      return state;
  }
}