import { userState } from "../atoms/user";
import { selector } from "recoil";

export const emailSelector = selector({
    key : "emialSelector" ,
    get : ({get}) =>
    {
        const state = get(userState);

        return state.userEmail;
    }
})