import ListUser from "./ListUser.jsx";
import {useEffect, useRef, useState} from "react";
import findUser from "../utils/findUser.js";

const SearchBar = () => {
    const [filter, setFilter] = useState("");
    const [users, setUsers] = useState([]);

    let timeout = useRef(null);

    // Debouncing
    useEffect( () => {
        timeout.current = setTimeout(()=>{
            findUser(filter).then(res=>setUsers(res));
        }, 200)

        return () => {
            clearTimeout(timeout.current);
        };
    }, [filter]);

    return <div className={"border-none pt-10 flex flex-col justify-start items-start gap-6 text-xl px-6"}>
        <div className={"text-3xl font-semibold"}>Users</div>
        <input type="text" className={"border-2 border-grey-500 w-full p-2 px-4 rounded-xl"} placeholder={"Search Users"} onChange={e=>setFilter(e.target.value)}/>
        <div className={"w-full"}>
            {
                users.length>0 ? users.map(user=>(<ListUser key={user._id} user={user}/>)) : null
            }
        </div>
    </div>
};

export default SearchBar;
