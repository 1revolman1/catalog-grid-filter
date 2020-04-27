import {
  GET_GOODS_REQUEST,
  GET_GOODS_SUCCESS,
  GET_GOODS_AMMOUNT,
  GET_GOODS_PAGE,
  SET_GOODS_STORE,
  SET_GOODS_NEW,
} from "../actions/BlockComponentActions";
const initialState = {
  products: [],
  // goodsStore: [],
  pageToShow: 1,
  ammount: 0,
  isFetching: false,
};
export function pageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GOODS_REQUEST:
      return { ...state, isFetching: true };
    case GET_GOODS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        isFetching: false,
      };
    // case SET_GOODS_STORE:
    //   return { ...state, goodsStore: action.payload };
    // case SET_GOODS_NEW:
    //   return { ...state, goodsStore: action.payload };
    case GET_GOODS_AMMOUNT:
      return { ...state, ammount: action.payload };
    case GET_GOODS_PAGE:
      return { ...state, pageToShow: action.payload };
    default:
      return state;
  }
}
