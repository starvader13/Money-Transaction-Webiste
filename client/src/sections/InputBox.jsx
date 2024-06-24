
const InputBox = ({label, placeholder, onChange}) => {
    return <div className={"flex flex-col justify-start items-start w-full px-4 pb-4 gap-2"}>
        <label htmlFor={"input-box"} className={"text-lg font-medium"}>{label}</label>
        <input type={"text"} placeholder={placeholder} id={"input-box"} onChange={onChange} className={"border-2 border-gray-200 w-full p-2 rounded-md"}/>
    </div>
};

export default InputBox;
