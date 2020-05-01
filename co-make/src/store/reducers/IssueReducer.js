const initialState = {
    isFetching: false,
    issues: []
}

export const IssueReducer = (state = initialState, action) => {
    switch(action.type){
        // Fetch issues Actions
        case 'FETCH_POSTS_START': 
        return {
            isFetching: true,
        }

        case 'FETCH_POSTS_SUCCESS': 
        return {
            issues: action.payload,
            isFetching: false
        }

        case 'FETCH_POSTS_FAILURE': 
        return {
            isFetching: false,
        }

        // Delete cases
        case 'DELETE_POST_START': 
        return {
            isFetching: true,
        }
        case 'DELETE_POST_SUCCESS': 
        return {
            issues: [ ...state.issues.filter(item => item.id != action.payload)],
            isFetching: true,
        }
        case 'DELETE_POST_FAILURE': 
        return {
            isFetching: true,
        }

        // addPost Actions
        case 'ADD_POSTS_SUCCESS': 
        return {
            issues: [ ...state.issues, action.payload],
            isFetching: false
        }
        default:
        return state;
    }
}