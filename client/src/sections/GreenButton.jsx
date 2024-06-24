
const GreenButton = ({content, onClick}) => {
    return <button onClick={onClick} className={"border-none rounded-xl bg-green-500 text-white font-bold text-x hover:ring hover:ring-green-500 cursor-pointer p-3 px-48"}>{content}</button>
};

export default GreenButton;
