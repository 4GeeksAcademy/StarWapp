import { Link } from "react-router-dom";

export const BrowseSideBar = () => {
    return (
      <div className="col-2 bg-dark text-white p-4 min-vh-100">
        <h2 className="h4 fw-bold mb-4">Browse</h2>
        <ul className="nav flex-column">
            <li className="nav-item">
                <Link to="/characters" className="nav-link text-light active" aria-current="page">
                    Personajes
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/Vehicles" className="nav-link text-light active" aria-current="page">
                    Vehículos
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/planets" className="nav-link text-light active" aria-current="page">
                    Planetas
                </Link>
            </li>
        </ul>
      </div>
    );
  };
  