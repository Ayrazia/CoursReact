import './Header.css'
import { Link } from 'react-router-dom'
import { useLuminosity } from '../LuminosityContext'

function Header() {
    const { luminosity, toggleLuminosity } = useLuminosity()

    return (
        <>
        <header className="header">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/films" >Films</Link>
                    </li>
                    <li>
                        <Link to="/personnages" >Personnages</Link>
                    </li>
                    <li>
                        <Link to="/planetes">Planetes</Link>
                    </li>
                </ul>
                <button type="button" className="theme-toggle" onClick={toggleLuminosity}>
                    {luminosity ? 'Mode clair' : 'Mode sombre'}
                </button>
            </nav>
        </header>
        </>
    )
}

export default Header