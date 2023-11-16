import { atom } from "recoil";

export const lodge = atom<{Spopup : boolean}>
({
    key : "lodge" ,
    default : {
        Spopup : false
    } ,
})