const initialState = {
    isFetching: false,
    user: {}
}

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        // Log In Actions
        case 'LOGIN_USER_SUCCESS': 
        return {
            ...state,
            isFetching: false,
        }

        case 'LOGIN_USER_FAILURE': 
        return {
            ...state,
            isFetching: false,
        }

        // Fetch User Actions
        case 'FETCH_USER_START': 
        return {
            isFetching: true,
            user: action.payload
        }

        case 'FETCH_USER_SUCCESS': 
        return {
            user: action.payload,
            isFetching: false
        }

        case 'FETCH_USER_FAILURE': 
        return {
            isFetching: false,
            error: action.payload
        }
        default:
        return state;
    }
}