import {Link} from "react-router-dom" ;
import {useState} from "react" ;
import "./navbar.css" ;

function Navbar() {
    const [isOpen, setIsOpen] = useState(false) ;
    return (
        <nav className="navigation">
            <div className="nav-container">
                <ul className={`nav-links ${isOpen ? "active" : ""}`}>
                    <li><p>Navigation:</p></li>
                    <li><Link to="/" onClick={() => setIsOpen(!isOpen)}>Home</Link></li>
                    <li><Link to="/dotfiles" onClick={() => setIsOpen(!isOpen)}>Dotfiles</Link></li>
                    <li><Link to="/test" onClick={() => setIsOpen(!isOpen)}>Test</Link></li>
                </ul>
            </div>
        </nav>
    ) ;
}

export default Navbar ;