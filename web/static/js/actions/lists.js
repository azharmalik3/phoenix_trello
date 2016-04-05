/**
 * Created by azhar on 04/04/16.
 */

import Constants from '../constants';

const Actions = {
  save: (channel, data) => {
    return dispatch => {
      channel.push('lists:create', { list: data });
    };
  },

  createCard: (channel, data) => {
    return dispatch => {
      channel.push('cards:create', { card: data });
    };
  },
};

export default Actions;