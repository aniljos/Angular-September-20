export interface AuthState{
    userName: string,
    accessToken: string,
    refreshToken: string,
    isAuthenticated: boolean
}
export interface CartState{
    cart: Array<any>
}

const initAuthState: AuthState = {
    userName: "", accessToken: "", isAuthenticated: false, refreshToken: ""
}
const initCartState: CartState = {
    cart: []
}

export const authReducer = (currentState=initAuthState, action: any) => {
    //return the new/updated state
    if(action.type === "SET_AUTH"){

        return {
            userName: action.payload.userName,
            isAuthenticated: action.payload.isAuthenticated,
            accessToken: action.payload.accessToken,
            refreshToken: action.payload.refreshToken
        };
    }
    if(action.type === "UPDATE_ACCESS_TOKEN"){
        return {
            ...currentState,
            accessToken: action.token
        }
    }

    return currentState;
}
export const cartReducer = (currentState=initCartState, action: any) => {
     //return the new/updated state
     return currentState;
}

