import { AUTH_USER, UNAUTH_USER, CHECK_TOKEN_RESPONSE, NEW_PASSWORD_RESPONSE } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true };
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    case CHECK_TOKEN_RESPONSE:
      return { ...state, resetTokenResp: action.payload.msg, resetToken: action.payload.token };
    case NEW_PASSWORD_RESPONSE:
      return { ...state, passwordResponse: action.payload };
    default:
      return state;
  }
}
