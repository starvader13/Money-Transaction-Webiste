import axios from "axios";

const signin = async (username, password) => {
    try {
        const body = {
            username,
            password
        };
        const response = await axios.post("http://localhost:3000/api/v1/user/signin", body);
        return {
            message: response.data.message,
            token: response.data.token,
            status: "success"
        }
    }catch(error){
        console.log(error.response.data.message)
        return {
            status: "failed"
        }
    }
}

export default signin;
