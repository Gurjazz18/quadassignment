import { USER_LOGIN_SUCCESS, USER_LOGIN_REQUEST, USER_LOGIN_ERROR,LOGOUT } from "./actionType";

const initailState = {
    isAuth: false,
    token: "",
    isAuthLoading: false,
    isAuthError: false
}

const reducer = (oldState = initailState, action) => {

    const { type, payload } = action
   
    switch (type) {

        case USER_LOGIN_REQUEST:
            return {
                ...oldState,
                isAuthLoading: true,


            }

        case USER_LOGIN_SUCCESS:
            return {
                ...oldState,
                isAuthLoading: false,
                token: payload,
                isAuth: true
            }



        case USER_LOGIN_ERROR:
            return {
                ...oldState,
                isAuthLoading: false,
                isAuthError: true


            }

            case LOGOUT:
                return {
                  ...oldState,
                  isAuth: false,
                };


        default:
            return oldState;

    }


}

export { reducer }