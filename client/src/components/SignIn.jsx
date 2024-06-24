import Heading from "../sections/Heading.jsx";
import SubHeading from "../sections/SubHeading.jsx";
import InputBox from "../sections/InputBox.jsx";
import Button from "../sections/Button.jsx";
import NavigateMessage from "../sections/NavigateMessage.jsx";
import {useCallback, useState} from "react";
import {useNavigate} from "react-router-dom";
import signin from "../utils/signin.js";

const SignIn = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const onClick = useCallback(async()=>{
        const {token, status} = await signin(username, password);
        if(status==="success"){
            window.localStorage.setItem("authorization", token);
            navigate("/dashboard");
            window.location.reload()
        }
    }, [username, password])

    return <div className={"border-none flex flex-col justify-center bg-gradient-to-r from-slate-300 to-slate-200 items-center h-screen"}>
        <div className={"flex flex-col border-2 border-gray-300 bg-white justify-center items-center tracking-wide rounded-xl pt-4 pb-4 px-2 gap-2"}>
            <Heading label={"Sign In"} />
            <SubHeading content={"Enter your credentials to access your account"} />
            <InputBox onChange={e=>setUsername(e.target.value)} label={"Email / Username"} placeholder={"ashutoshgupta1311@gmail.com"} />
            <InputBox onChange={e=>setPassword(e.target.value)} label={"Password"} placeholder={"123456"} />
            <Button onClick={onClick} content={"Sign In"} />
            <NavigateMessage message={"Don't have an account"} action={"Sign Up"} navigateTo={"signup"}/>
        </div>
    </div>
};

export default SignIn;
