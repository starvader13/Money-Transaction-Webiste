import axios from "axios";

const transfer = async (id, amount)=>{
    try{
        const res = await axios.post("http://localhost:3000/api/v1/account/transfer",{
            amount: amount,
            to: id
        }, {
            headers: {
                Authorization: localStorage.getItem("authorization")
            }
        })

        return res.data.message;
    }catch(error){
        return error.response.data.message;
    }
}

export default transfer;
