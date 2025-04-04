import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dotfiles from "./pages/dotfiles" ;
import Home from "./pages/home" ;
import Test from "./pages/test" ;

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dotfiles" element={<Dotfiles/>} />
                <Route path="/test" element={<Test />} />
            </Routes>
        </Router>
    ) ;
}

export default AppRoutes ;