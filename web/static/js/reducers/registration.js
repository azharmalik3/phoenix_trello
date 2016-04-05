/**
 * Created by azhar on 31/03/16.
 */

import Constants from '../constants';

const initialState = {
  errors: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case Constants.REGISTRATIONS_ERROR:
      return { ...state, errors: action.errors };

    default:
      return state;
  }
}