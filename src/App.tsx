import { HashRouter as Router, Routes, Route } from "react-router-dom";
import {lazy, Suspense} from "react" ;
const Home = lazy(() => import("./pages/home")) ;
const Dotfiles = lazy(() => import("./pages/dotfiles")) ;
const Test = lazy(() => import("./pages/test")) ;

function App() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
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