import * as user from '../types/user-type';
let defaultState = {
    userName:'guest',
    loginType:0,
};
export const UserData = (state=defaultState,action = {})=>{
    switch(action.type){
        case user.LOGOUT:
            return {...state,...{name:action.newName}};
        default:
            return state;
    }
}