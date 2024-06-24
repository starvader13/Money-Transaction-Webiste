import Appbar from "../sections/Appbar.jsx";
import Balance from "../sections/Balance.jsx";
import SearchBar from "../sections/SearchBar.jsx";

const Dashboard = () => {

   return <div className={""}>
        <Appbar heading={"Money-Transaction-Website"}/>
        <Balance />
        <SearchBar />
   </div>
};

export default Dashboard;
