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

    case '@giftList/FETCH_LIST_GIFT_LIST_SUCCESS':
      return { ...state, loading: false, categories: action.response };

    default:
      return state;
  }
}
