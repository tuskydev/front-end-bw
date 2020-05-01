import { combineReducers } from 'redux'
import { userReducer as user} from './userReducer'
import { IssueReducer as issues } from './IssueReducer'

export default combineReducers({
    user,
    issues
})