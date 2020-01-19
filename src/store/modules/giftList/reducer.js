const InitialState = {
  collection: [],
  categories: [],
  item: {},
};

export default function giftList(state = InitialState, action) {
  switch (action.type) {
    case '@giftList/FETCH_GIFT_LIST_REQUEST':
      return { ...state, loading: true };

    case '@giftList/FETCH_GIFT_LIST_SUCCESS':
      return { ...state, loading: false, item: action.response };

    case '@giftList/FETCH_CATEGORIES_SUCCESS':
      return { ...state, loading: false, categories: action.response };

    case '@giftList/FETCH_LIST_GIFT_LIST_SUCCESS':
      return { ...state, loading: false, collection: action.response };

    case '@giftList/SAVE_GIFT_LIST_REQUEST':
      return { ...state, loading: true, success: false };

    case '@giftList/SAVE_GIFT_LIST_SUCCESS':
      return { ...state, loading: false, success: true, item: action.response };

    default:
      return state;
  }
}
