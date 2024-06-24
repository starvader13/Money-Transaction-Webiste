import {Link} from "react-router-dom";

const ListUser = ({user}) => {

    return <div className={"flex justify-between items-center p-2 py-3 border-none"}>
        <div className={"flex justify-center items-center gap-1 text-xl font-medium"}>
            <div className={"rounded-full bg-slate-400 w-12 h-12 flex justify-center items-center"}>
                {user.firstname[0]}{user.lastname[0]}
            </div>
            <div className={"pl-2"}> {user.firstname} </div>
            <div> {user.lastname} </div>
        </div>
        <div>
            <Link to={"/send?id=" + user._id + "&firstname=" + user.firstname + "&lastname=" + user.lastname} className={"border-2 border-black bg-black text-white p-3 rounded-xl"}>Send Money</Link>
        </div>
    </div>
};

export default ListUser;
