import { atom } from "recoil";

export const userState = atom<{isLoading : boolean , userEmail : string | null}>
({
    key : "userState" ,
    default : {
        isLoading : true ,
        userEmail : null
    } ,
});