import * as types from '../constant/actionType';

const initialState = {
  isLogin: false
}
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ISLOGIN :
      return {isLogin: true};
    default :
      return state;
  }
}
export default myReducer;