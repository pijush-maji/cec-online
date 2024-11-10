import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
    const [query,setQuery] = useState("");
    const navigate = useNavigate();

    const handleQueryChange = (e) =>{
        setQuery(e.target.value)
    }
    const handleSearch = () =>{
        navigate(`search/${query}`);
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">ChinyaEyeCare</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/home" style={{textDecoration:"none",color:"black"}}>Home</NavLink>
                        </li>
                        <li className="nav-item ms-4">
                            <NavLink className="nav-link" to="/printprsc" style={{textDecoration:"none",color:"black"}}>Print</NavLink>
                        </li>
                    </ul>
                    <form className="d-flex" onSubmit={handleSearch}>
                        <input className="form-control me-2" type="search" name="query"
                         onChange={handleQueryChange} placeholder="Search by Id or Name" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Header;