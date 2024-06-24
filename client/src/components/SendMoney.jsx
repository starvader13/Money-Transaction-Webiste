import Heading from "../sections/Heading.jsx";
import InputBox from "../sections/InputBox.jsx";
import GreenButton from "../sections/GreenButton.jsx";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useState} from "react";
import transfer from "../utils/transfer.js";

const SendMoney = () => {

    const [searchParams] = useSearchParams();
    const [amount, setAmount] = useState(0);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const id=searchParams.get("id");
    const firstname=searchParams.get("firstname");
    const lastname=searchParams.get("lastname");

    const onClick = async ()=>{
        const res  = await transfer(id, amount);
        setMessage(res);

        setTimeout(()=>{
            setMessage("");
            navigate("/dashboard");
            window.location.reload()
        }, 2000)
    }

    return <div className={"h-screen bg-gray-100 flex justify-center items-center w-screen flex-col gap-4"}>
        {message ? <div className={"rounded-2xl shadow-md shadow-green-800 mb-2 px-4 py-2 bg-gradient-to-tr from-emerald-600 to-red-400 text-lg text-white font-mono font-medium tracking-tighter"}>
            {message}
        </div> : null}
        <div className={"p-8 bg-white w-fit flex flex-col justify-center items-start rounded-xl"}>
            <div className={"flex justify-center items-center w-full"}>
            <Heading label={"Send Money"} />
            </div>

            <div className={"flex gap-1 font-medium justify-start items-center pt-16 pb-2 text-2xl"}>
                <div className={"rounded-full bg-green-500 text-white w-16 h-16 flex justify-center items-center"}>
                    {firstname[0]}{lastname[0]}
                </div>
                <div className={"pl-2"}> {firstname} </div>
                <div> {lastname} </div>
            </div>

            <InputBox label={"Amount (in Rs)"} placeholder={"Enter Amount"} onChange={e=>setAmount(e.target.value)}/>

            <div className={"flex justify-center items-center w-fit m-4"}>
                <GreenButton onClick={onClick} content={"Initiate Transfer"}/>
            </div>
        </div>

    </div>
};

export default SendMoney;
