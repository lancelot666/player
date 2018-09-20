import * as app from '../types/app-type';
let defaultState = {
    appName:'测试网站',
};
export const AppData = (state=defaultState,action = {})=>{
    switch(action.type){
        case app.GETNAME:
            return {...state,...{appName:action.appName}};
        default:
            return state;
    }
}