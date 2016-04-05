/**
 * Created by azhar on 31/03/16.
 */

import { pushPath }  from 'react-router-redux';
import Constants     from '../constants';
import { httpPost }  from '../utils';
import {setCurrentUser}   from './sessions';

const Actions = {};

Actions.signUp = (data) => {
  return dispatch => {
    httpPost('/api/v1/registrations', {user: data})
      .then((data) => {
        localStorage.setItem('phoenixAuthToken', data.jwt);

        setCurrentUser(dispatch, data.user);

        dispatch(pushPath('/'));
      })
      .catch((error) => {
        error.response.json()
          .then((errorJSON) => {
            dispatch({
              type: Constants.REGISTRATIONS_ERROR,
              errors: errorJSON.errors,
            });
          });
      });
  };
};

export default Actions;

