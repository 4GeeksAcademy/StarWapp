import React from 'react';
import { useState, useEffect } from 'react';
import { FavoriteContext } from "../hooks/FavoriteContext"
import { useContext } from "react";

export const Vehicles = () => {

    const [vehicles, setVehicles] = useState([])
    const [favorite, setFavorite] = useContext(FavoriteContext)
  
    const getVehicles = async () => {
      const response = await fetch("https://swapi.py4e.com/api/vehicles")
      const data = await response.json()
      setVehicles(data.results)
    }
  
    const addToFavorites = (vehicle) => {
      if (!favorite.some((fav) => fav.name === vehicle.name)) {
        setFavorite([...favorite, vehicle]);
      }
    }
  
    useEffect(() => {
      getVehicles()
    }, [])

    return (
		<div className="container">
		  <div className="row text-center">
			<h1 className="text-white">Vehículos</h1>
			{vehicles.map((vehicle) => {
          	const isFavorite = favorite.some((fav) => fav.name === vehicle.name);

		  return (
            <div className="col-6 mb-4" key={vehicle.name}>
              <div className="card mx-auto shadow-lg">
                <div className="row g-0">
                  <div className="col-md-4 bg-dark">
                    <div className="dropright bg-dark">
                      <img
                        src="https://th.bing.com/th/id/R.f329daf52dfde443f4279d7cfdc8b512?rik=iCevQfSKpakMTA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fstar-wars-png-black-and-white-droid-helmet-soldier-star-starwars-wars-icon-512.png&ehk=bdZelv8FSHBfjE31NKq6i9QuPxZSY8lU%2f%2bf3UtCo5Uo%3d&risl=&pid=ImgRaw&r=0"
                        className="img-fluid mt-2"
                        alt={vehicle.name}
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      />
                      <div className="dropdown-menu p-3 bg-dark text-light text-start">
                        <h2 className="text-warning">{vehicle.name}</h2>
                        <h4><strong>Información</strong></h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8 bg-dark">
                    <div className="card-body text-white">
                      <h3 className="card-title text-warning">{vehicle.name}</h3>
                      <p className="card-text">
                        <strong>Modelo:</strong> {vehicle.model}<br />
                        <strong>Fabricante:</strong> {vehicle.manufacturer}<br />
                        <strong>Costo:</strong> {vehicle.cost_in_credits}
                      </p>
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => addToFavorites(vehicle)}
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
          );
        })}
      </div>
    </div>
  );
};