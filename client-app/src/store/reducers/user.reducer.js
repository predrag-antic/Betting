import {LOGIN_SUCCESS, LOGIN_UNSUCCESS,GET_USER_SUCCESS_AUTH ,UPDATE_USER_TICKETS,PAY_FOR_TICKET, UPDATE_USER_CREDIT} from '../actions/user.actions';

const initialState={
    _id:'',
    username:'',
    email:'',
    age:'',
    credit:'',
    is_admin:null,
    my_tickets:[]
}


export function userReducer(state=initialState,action){
    switch(action.type){
        case GET_USER_SUCCESS_AUTH:
            var cur_user =(action.user)
            return cur_user
        case LOGIN_SUCCESS:
            var user =(action.user)
            return user
        case LOGIN_UNSUCCESS:
            return state
        case UPDATE_USER_TICKETS:
            var updated_user = (action.updated_user);
            return {...updated_user}
        case PAY_FOR_TICKET:
            var payment = (action.payment);
            var cur_credit=state.credit.$numberDecimal
            var new_credit=cur_credit-payment
            state.credit.$numberDecimal=new_credit
            return state
        case UPDATE_USER_CREDIT:
            var user = (action.user);
            return {...user}
        default:
            return state;
    }
}