import {combineReducers} from "redux";
import {userReducer} from './user.reducer'
import {loadingIndicatorReducer} from './loading-indicator.reducer'
import {footballReducer} from './football.reducer'
import {basketballReducer} from './basketball.reducer'
import {teamReducer} from './team.reducer'


 const rootReducer = combineReducers({
    current_user:userReducer,
    loading_indicator:loadingIndicatorReducer,
    football_matches:footballReducer,
    basketball_matches:basketballReducer,
    team: teamReducer
})

export default rootReducer;