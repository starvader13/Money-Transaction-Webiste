import {selector} from "recoil";

export const signedInAtom = selector({
    key: "signedInAtom",
    get: ()=>{
         return !!window.localStorage.getItem("authorization")
    }
})
