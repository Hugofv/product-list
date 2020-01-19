import api from '../../../services/api';

export const getGiftListById = id => dispatch => {
  dispatch({
    type: '@giftList/FETCH_GIFT_LIST_REQUEST',
  });

  api.get(`/giftList/${id}`).then(({ data }) => {
    dispatch({
      type: '@giftList/FETCH_GIFT_LIST_SUCCESS',
      response: data,
    });
  });
};

export const saveGiftList = giftList => dispatch => {
  dispatch({
    type: '@giftList/SAVE_GIFT_LIST_REQUEST',
  });

  api.post('/giftList', giftList).then(() => {
    dispatch({
      type: '@giftList/SAVE_GIFT_LIST_SUCCESS',
      response: giftList,
    });
  });
};

export const getGiftListByCategory = categoryId => dispatch => {
  dispatch({
    type: '@giftList/FETCH_GIFT_LIST_REQUEST',
  });

  api.get(`/giftList?categoryId=${categoryId}`).then(({ data }) => {
    dispatch({
      type: '@giftList/FETCH_LIST_GIFT_LIST_SUCCESS',
      response: data,
    });
  });
};

export const getCategories = () => dispatch => {
  dispatch({
    type: '@giftList/FETCH_GIFT_LIST_REQUEST',
  });

  api.get('/categories').then(({ data }) => {
    dispatch({
      type: '@giftList/FETCH_CATEGORIES_SUCCESS',
      response: data,
    });
  });
};
