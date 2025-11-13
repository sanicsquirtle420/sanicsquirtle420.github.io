import { HashRouter as Router, Routes, Route } from "react-router-dom";
import {lazy, Suspense} from "react" ;
import {ScrollToHeader} from "./utils/dotfiles_nav" ;
const Home = lazy(() => import("./pages/home")) ;
const Dotfiles = lazy(() => import("./pages/dotfiles")) ;
const Test = lazy(() => import("./pages/test")) ;

function App() {
    return (
        <Router>
            <ScrollToHeader />
            <Suspense fallback={<div><h2 className="center" style={{color: "#ffffff"}}>Loading...</h2></div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dotfiles" element={<Dotfiles/>} />
                    <Route path="/test" element={<Test />} />
                </Routes>
            </Suspense>
        </Router>
    ) ;
}

export default App ;