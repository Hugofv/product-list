import api from '../../../services/api';

export const getGiftList = filter => dispatch => {
  dispatch({
    type: '@giftList/FETCH_GIFT_LIST_REQUEST',
  });

  api.get('/giftList').then(({ data }) => {
    dispatch({
      type: '@giftList/FETCH_GIFT_LIST_SUCCESS',
      response: data,
    });
  });
};
