import api from '../../helpers/ApiClient';
import config from '../../config/app';
import { AsyncStorage } from 'react-native';
import { Actions as NavActions } from 'react-native-router-flux';


const LOGIN = 'LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';

const CLEAR_PROFILE = 'CLEAR_PROFILE';

const initialState = {
  user: undefined,
  isLoading: false
};

export default function reducer(state = initialState, action = {}){
  switch(action.type){
    case LOGIN: {
      return { ...state, isLoading: true };
    }
    case LOGIN_SUCCESS: {
      return { ...state, user: action.result, isLoading: false };
    }
    case LOGIN_FAIL: {
      return { ...state, isLoading: false }
    }
    case CLEAR_PROFILE: {
      return { ...state, user:undefined }
    }

    default:
      return state;
  }
}

export function login(data) {
  return (dispatch, getState) => new Promise((resolve, reject) => {
    dispatch({ type: LOGIN });
    api
      .post('/api/login', data)
      .then((res) => {
        dispatch({ type: LOGIN_SUCCESS, result: res });
        AsyncStorage.setItem('userCredentials', JSON.stringify(data));
        resolve(res);
      })
      .catch((ex) => {
        dispatch({ type: LOGIN_FAIL });
        reject(ex);
      });
  });
}



export function logout() {
  return (dispatch, getState) => new Promise((resolve, reject) => {
    api
      .get('/api/logout')
      .then((res) => {
        dispatch({type: CLEAR_PROFILE });
        NavActions.login();
        resolve();
      })
      .catch((ex) => {
        NavActions.login();
        reject();
      });
  });
}
