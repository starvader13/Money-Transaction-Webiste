import axios from "axios";

const signup = async (firstname, lastname, username, password) => {
    try {
        const body = {
            firstname,
            lastname,
            username,
            password
        };
        const response = await axios.post("http://localhost:3000/api/v1/user/signup", body);
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

export default signup;
