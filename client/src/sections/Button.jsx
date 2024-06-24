
const Button = ({content, onClick}) => {
    return <button onClick={onClick}  className={"border-none rounded-xl bg-black text-white font-bold text-lg w-fit p-3 px-36 my-2 hover:ring hover:ring-black cursor-pointer"}>{content}</button>
};

export default Button;
