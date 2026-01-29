import { HashRouter as Router, Routes, Route } from "react-router-dom";
import {lazy, Suspense} from "react" ;
import {ScrollToHeader} from "./utils/dotfiles_nav" ;
const Home = lazy(() => import("./pages/home")) ;
const Dotfiles = lazy(() => import("./pages/dotfiles")) ;
const Homelab = lazy(() => import("./pages/homelab")) ;
const OpenSource = lazy(() => import("./pages/open-source")) ;

function App() {
    return (
        <Router>
            <ScrollToHeader />
            <Suspense fallback={<div>
                <center>
                <h2 style={{color: "#ffffff"}}>Loading...</h2>
                <table style={{clear: "both"}}>
                    <tr>
                        <td>
                            <img className="loading-gif" src="https://media1.tenor.com/m/WhpJvJkWSMcAAAAd/kiriko-kiriko-wave.gif" alt="Kiriko Overwatch waving gif"/>
                        </td>
                        <td>
                            <img className="loading-gif" src="https://media1.tenor.com/m/M5IQwflJz0UAAAAd/juno-overwatch.gif" alt="Juno Overwatch waving gif"/>
                        </td>
                    </tr>
                </table>
                </center>
                </div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dotfiles" element={<Dotfiles/>} />
                    <Route path="/homelab" element={<Homelab/>} />
                    <Route path="/open-source" element={<OpenSource />} />
                </Routes>
            </Suspense>
        </Router>
    ) ;
}

export default App ;