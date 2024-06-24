import Heading from "../sections/Heading.jsx";
import SubHeading from "../sections/SubHeading.jsx";
import InputBox from "../sections/InputBox.jsx";
import Button from "../sections/Button.jsx";
import NavigateMessage from "../sections/NavigateMessage.jsx";
import {useCallback, useState} from "react";
import signup from "../utils/signup.js";
import {useNavigate} from "react-router-dom";

const SignUp = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const onClick = useCallback(async()=>{
        const {token, status} = await signup(firstname, lastname, username, password);
        if(status==="success"){
            window.localStorage.setItem("authorization", token);
            navigate("/dashboard");
            window.location.reload();
        }
    }, [firstname, lastname, username, password])

    return <div className={"border-none flex flex-col justify-center bg-gradient-to-r from-slate-300 to-slate-200 items-center h-screen"}>
        <div className={"flex flex-col border-2 border-gray-300 bg-white justify-center items-center tracking-wide rounded-xl pt-4 pb-2 gap-2"}>
            <Heading label={"Sign Up"} />
            <SubHeading content={"Enter your information to create an account"} />
            <InputBox onChange={e=>setFirstname(e.target.value)} label={"First Name"} placeholder={"Ashutosh"} />
            <InputBox onChange={e=>setLastname(e.target.value)} label={"Last Name"} placeholder={"Gupta"} />
            <InputBox onChange={e=>setUsername(e.target.value)} label={"Email / Username"} placeholder={"ashutoshgupta1311@gmail.com"} />
            <InputBox onChange={e=>setPassword(e.target.value)} label={"Password"} placeholder={"123456"} />
            <Button onClick={onClick} content={"Sign Up"} />
            <NavigateMessage message={"Already have an account"} action={"Sign In"} navigateTo={"signin"}/>
        </div>
    </div>
};

export default SignUp;
