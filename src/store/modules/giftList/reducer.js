const InitialState = {
  collection: [],
  filter: '',
};

export default function giftList(state = InitialState, action) {
  switch (action.type) {
    case '@giftList/FETCH_GIFT_LIST_REQUEST':
      return { ...state, loading: true };

    case '@giftList/FETCH_GIFT_LIST_SUCCESS':
      return { ...state, loading: false, collection: action.response };
    default:
      return state;
  }
}
