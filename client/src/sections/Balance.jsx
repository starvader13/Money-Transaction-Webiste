import {useRecoilValueLoadable} from "recoil";
import {balanceAtom} from "../store/balanceAtom.js";

const Balance = () => {
    const balance = useRecoilValueLoadable(balanceAtom);

    return <div className={"border-none pt-10 flex justify-start items-center gap-2 text-3xl font-semibold pl-4"}>
        <div className={"pl-2"}>
            Your Balance:
        </div>
        <div className={"flex justify-start items-center gap-1"}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
            </svg> {balance.state === 'hasValue'? balance.contents : 0}
        </div>
    </div>
};

export default Balance;
