import {NavLink} from "react-router-dom"
import "../styles/Navbar.css"
function Navbar(){
    return (
    <>
    <div className="navv">
        <div className="logo">
            <h2>Conscious <span>Consumption</span></h2>
        </div>
        <div className="page">
            <ul>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/myJournals"}>My Journals</NavLink></li>
            </ul>
        </div>
    </div>
    </>
    )
}

export default Navbar