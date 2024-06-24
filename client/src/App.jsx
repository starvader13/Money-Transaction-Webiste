import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUp from "./components/SignUp.jsx";
import SignIn from "./components/SignIn.jsx";
import Dashboard from "./components/Dashboard.jsx";
import SendMoney from "./components/SendMoney.jsx";
import {RecoilRoot} from "recoil";

function App() {
    return <div>
        <RecoilRoot>
            <BrowserRouter>
                <Routes>
                    <Route path={"/signup"} element={<SignUp />} />
                    <Route path={"/signin"} element={<SignIn />} />
                    <Route path={"/dashboard"} element={<Dashboard />} />
                    <Route path={"/send"} element={<SendMoney />} />
                </Routes>
            </BrowserRouter>
        </RecoilRoot>
    </div>
}

export default App
