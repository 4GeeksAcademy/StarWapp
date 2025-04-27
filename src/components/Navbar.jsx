import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavoriteContext } from "../hooks/FavoriteContext"

export const Navbar = () => {

	const [favorite, setFavorite] = useContext(FavoriteContext)

	const removeFavorite = (chosenone) => {
		const updatedFavorites = favorite.filter((fav) => fav.name !== chosenone.name)
		setFavorite(updatedFavorites)
	  }
	
	return (
		<nav className="navbar mb-2 sticky-top bg-dark">
			<div className="container-fluid">
				<Link to="/">
					<a className="navbar-brand mr-3 text-white">Blog Star Wars</a>
				</Link>
				<div className="ml-auto">
				<div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" 
			data-bs-toggle="dropdown" aria-expanded="false">
              Favorites ({favorite.length})
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
              {favorite.length === 0 ? (
                <li><span className="dropdown-item">Tus favoritos aparecerán aquí</span></li>
              ) : (
                favorite.map((chosenone, index) => (
                  <li key={index}>
                    <span className="dropdown-item">
                      {chosenone.name}
                      <button className="btn btn-sm btn-danger ms-2"onClick={() => removeFavorite(chosenone)}>
                        <i className="fas fa-trash"></i>
                      </button>
                    </span>
                  </li>
                ))
              )}
            </ul>
          </div>
				</div>
			</div>
		</nav>
	);
};