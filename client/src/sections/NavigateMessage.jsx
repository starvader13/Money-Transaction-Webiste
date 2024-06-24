import {useNavigate} from "react-router-dom";

const NavigateMessage = ({message, action, navigateTo}) => {
    const navigate = useNavigate()

    return <div className={"pt-2 pb-6 text-md"}>
        {message}? <span onClick={()=>(navigate(`/${navigateTo}`))} className={"underline font-medium cursor-pointer"}>{action}</span>
    </div>
};

export default NavigateMessage;
