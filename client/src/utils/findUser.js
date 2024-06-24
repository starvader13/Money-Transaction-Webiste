import axios from "axios";

const findUser = async (filter)=>{
    try{
        const response = await axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`,{
            headers: {
                "authorization": window.localStorage.getItem("authorization")
            }
        });
        return response.data.users;
    }catch(e){
        return [];
    }
}

export default findUser
