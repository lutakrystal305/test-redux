import * as types from '../constant/actionType';

const initialState = {
  isLogged: false,
  user: {}
}
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGGED :
      return {...state, isLogged: true, user: action.dataUser};
    default :
      return state;
  }
}
export default myReducer;