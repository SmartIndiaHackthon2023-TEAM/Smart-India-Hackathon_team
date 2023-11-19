import { atom } from "recoil";

export const LogInPop = atom<{Lpopup : boolean}>
({
    key : "LogInPop" ,
    default : {
        Lpopup : true
    } ,
})