import React from 'react';
import { useState, useEffect } from 'react';
import { FavoriteContext } from "../hooks/FavoriteContext"
import { useContext } from "react";
import { Link } from "react-router-dom";

export const Planets = () => {

    const [planets, setPlanets] = useState([])
    const [favorite, setFavorite] = useContext(FavoriteContext)
  
    const getPlanets = async () => {
      const response = await fetch("https://swapi.py4e.com/api/planets")
      const data = await response.json()
      setPlanets(data.results)
    }
  
    const addToFavorites = (planet) => {
      if (!favorite.some((fav) => fav.name === planet.name)) {
        setFavorite([...favorite, planet]);
      }
    }
  
    useEffect(() => {
      getPlanets()
    }, [])

    const getIdFromUrl = (url) => {
		const segments = url.split('/').filter(Boolean);
		return segments[segments.length - 1];
	  };

    return (
		<div className="container">
		  <div className="row text-center">
			<h1 className="text-white">Planetas</h1>
			{planets.map((planet) => {
          	    const isFavorite = favorite.some((fav) => fav.name === planet.name);
                const id = getIdFromUrl(planet.url);
		  return (
            <div className="col-6 mb-4" key={planet.name}>
              <div className="card mx-auto shadow-lg">
                <div className="row g-0">
                  <div className="col-md-4 bg-dark">
                    <div className="dropright bg-dark">
                      <img
                        src="https://th.bing.com/th/id/R.f329daf52dfde443f4279d7cfdc8b512?rik=iCevQfSKpakMTA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fstar-wars-png-black-and-white-droid-helmet-soldier-star-starwars-wars-icon-512.png&ehk=bdZelv8FSHBfjE31NKq6i9QuPxZSY8lU%2f%2bf3UtCo5Uo%3d&risl=&pid=ImgRaw&r=0"
                        className="img-fluid mt-2"
                        alt={planet.name}
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      />
                      <div className="dropdown-menu p-3 bg-dark text-light text-start">
                        <h2 className="text-warning">{planet.name}</h2>
                        <h4><strong>Información</strong></h4>
                        <p><strong>Diámetro:</strong> {planet.diameter}</p>
                        <p><strong>Aguas superficiales:</strong> {planet.surface_water}</p>
                        <p><strong>Periodo orbital:</strong> {planet.orbital_period}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8 bg-dark">
                    <div className="card-body text-white">
                      <h3 className="card-title text-warning">{planet.name}</h3>
                      <p className="card-text">
                        <strong>Clima:</strong> {planet.climate}<br />
                        <strong>Terreno:</strong> {planet.terrain}<br />
                        <strong>Población:</strong> {planet.population}
                      </p>
                      <div>
                            <Link to={`/planet/${id}`}>
                                <button className="btn btn-outline-warning p-2 px-4 m-2">
                                    Leer más
                                </button>
                            </Link>
                            <button
                                className="btn btn-outline-danger"
                                onClick={() => addToFavorites(planet)}
                                disabled={isFavorite}   // se desactiva al añadir a fav
                            >
                                <i className="fas fa-heart mx-1"></i>
                                {isFavorite ? "Guardado" : "Guardar en favoritos"}
                            </button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};