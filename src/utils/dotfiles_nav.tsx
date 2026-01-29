import {Link, useLocation} from "react-router-dom" ;
import {useEffect, useState} from "react" ;
import "./navbar.css" ;

export function ScrollToHeader() {
    const { hash } = useLocation() ;

    useEffect(() => {
        if(hash) {
            const elem = document.querySelector(hash) ;
            if(elem) elem.scrollIntoView({behavior: "smooth"}) ;
        }
    }, [hash]) ;
    return null ;
}

function Navbar() {
    const [isOpen, setIsOpen] = useState(false) ;
    return (
        <nav className="navigation">
            <div className="nav-container">
                <ul className={`nav-links ${isOpen ? "active" : ""}`}>
                    <li><p>Navigation:</p></li>
                    <li><Link to="/" onClick={() => setIsOpen(!isOpen)}>Home</Link></li>
                    <li id="aq"><Link to="/dotfiles#aqua" onClick={() => setIsOpen(!isOpen)}>Aqua</Link></li>
                    <li id="ju"><Link to="/dotfiles#juno" onClick={() => setIsOpen(!isOpen)}>Juno</Link></li>
                    <li id="yo"><Link to="/dotfiles#yotsuba" onClick={() => setIsOpen(!isOpen)}>Yotsuba</Link></li>
                    <li><Link to="/homelab" onClick={() => setIsOpen(!isOpen)}>Homelab</Link></li>
                    <li><Link to="/open-source" onClick={() => setIsOpen(!isOpen)}>Open Source</Link></li>
                    
                </ul>
            </div>
        </nav>
    ) ;
}

export default Navbar ;