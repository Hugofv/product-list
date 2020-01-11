import { combineReducers } from 'redux';

import product from './product/reducer';
import giftList from './giftList/reducer';

export default combineReducers({
  product,
  giftList,
});
