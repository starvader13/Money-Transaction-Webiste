import {Link} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {signedInAtom} from "../store/signAtom.js";

const Appbar = ({heading}) => {
    const userSignedIn = useRecoilValue(signedInAtom);

    return (
        <div className={"flex justify-between items-center bg-white text-xl font-medium border-t-4 border-black border-b-2 border-b-gray-200 px-2 py-2"}>
            <Link to={"/dashboard"} className={"pl-4 text-3xl font-semibold"}>{heading}</Link>
            <div className={"flex justify-evenly items-center gap-8 p-4 pr-4"}>
                {
                    userSignedIn ? <>
                        <div>Hello User</div>
                        <div className={"rounded-full border-2 h-12 w-12 flex justify-center items-center"}>
                            SG
                        </div>
                    </> : <>
                        <Link to={"/signin"} className={"px-4 text-2xl"}>SignIn</Link>
                        <Link to={"/signup"} className={"text-2xl"}>SignUp</Link>
                    </>
                }
            </div>
        </div>
    );
};

export default Appbar;
