import {selector} from "recoil";
import axios from "axios";

export const balanceAtom = selector({
    key: "balanceAtom",
    get: async () => {
        if(window.localStorage.getItem("authorization")){
            const config = {
                headers:{
                    authorization: window.localStorage.getItem("authorization")
                }
            };
            try{
                const response = await axios.get("http://localhost:3000/api/v1/account/balance", config);
                return response.data.balance;
            }catch(e){
                return e.response.data.balance;
            }
        }
        else return 0;
    }
})
