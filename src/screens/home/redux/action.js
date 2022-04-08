import {navigate} from '../../../helpers/navigate';
import axios from 'axios';
import {BOOK_URL} from '../../../helpers/apiAccessToken';
import {SetLoading, SetRefreshing} from '../../../store/actionGlobal';
import {store} from '../../../store/index';

const token = store.getState().login.token;

export const SetRecommendeds = data => {
  return {
    type: 'SET_RECOMMENDED',
    payload: data,
  };
};

export const getRecommended = () => async dispatch => {
  try {
    dispatch(SetLoading(true));
    const res = await axios.get(`${BOOK_URL}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }, //${token}
    });
    dispatch(SetRefreshing(true));
    dispatch(SetRecommendeds(res.data.results));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(SetRefreshing(false));
    dispatch(SetLoading(false));
  }
};

// action by id
export const getDetailBookById = id => async dispatch => {
  try {
    dispatch(SetLoading(true));
    const res = await axios.get(`${BOOK_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }, //${token}
    });
    console.log(res);
    dispatch(SetRefreshing(true));
    dispatch(setDetailBookReducer(res.data));
    navigate('BookDetail');
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(SetRefreshing(false));
    dispatch(SetLoading(false));
  }
};

const setDetailBookReducer = detailBook => {
  return {
    type: 'DETAIL_BOOK',
    payload: detailBook,
  };
};
