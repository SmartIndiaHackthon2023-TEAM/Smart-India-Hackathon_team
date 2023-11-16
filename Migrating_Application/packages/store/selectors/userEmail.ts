import { selector } from "recoil";
import { userState } from "../atoms/User";

export const emailSelector = selector({
    key : "emailSelector" ,
    get : ({get}) =>
    {
        const state = get(userState)
        return state.userEmail    
    }
})