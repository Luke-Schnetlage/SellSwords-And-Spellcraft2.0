import { Link, useMatch, useResolvedPath } from "react-router-dom"
export default function Navbar(){
    return(
        <nav>
            <Link to="/" className="SaS">Sellswords and Spellcrafts</Link>
            <ul>
                <li>
                    <Link to="game">Play</Link>
                </li>
                <li>
                    <Link to="rules">Rules</Link>
                </li>
                <li>
                    <Link to="login">Log in</Link>
                </li>
            </ul>
        </nav>
    )
}