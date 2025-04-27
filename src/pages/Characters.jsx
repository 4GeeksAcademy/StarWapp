import React from 'react';
import { useState, useEffect } from 'react';
import { FavoriteContext } from "../hooks/FavoriteContext"
import { useContext } from "react";

export const Characters = () => {

	const [characters, setCharacters] = useState([])
  	const [favorite, setFavorite] = useContext(FavoriteContext)

	const getCharacters = async () => {
		const response = await fetch("https://swapi.py4e.com/api/people");
		const data = await response.json()
		setCharacters(data.results)
	  }
	
	  const addToFavorites = (characters) => {
		if (!favorite.some((fav) => fav.name === characters.name)) { 
		  setFavorite([...favorite, characters]);
		}
	  }
	
	  useEffect(() => {
		getCharacters()
	  }, [])

	  return (
		<div className="container">
		  <div className="row text-center">
			<h1>Personajes</h1>
			{characters.map((character, index) => (
			  <div className="col-6" key={index}>
				<div className="card mx-auto mb-3 shadow-lg">
				  <div className="row g-0">
					<div className="col-md-4">
					 <div className="dropright bg-dark">
					  <img src="https://th.bing.com/th/id/R.f329daf52dfde443f4279d7cfdc8b512?rik=iCevQfSKpakMTA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fstar-wars-png-black-and-white-droid-helmet-soldier-star-starwars-wars-icon-512.png&ehk=bdZelv8FSHBfjE31NKq6i9QuPxZSY8lU%2f%2bf3UtCo5Uo%3d&risl=&pid=ImgRaw&r=0" 
					  	className="img-fluid mt-2" alt={characters.name} role="button" data-bs-toggle="dropdown" aria-expanded="false" />
					  <div className="dropdown-menu p-3 bg-dark text-light">
							<h2 className="text-warning">{character.name}</h2>
							<h4><strong>Información</strong></h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</div>
						</div>
					  </div>
					<div className="col-md-8 bg-dark">
					  <div className="card-body text-white">
						<h3 className="card-title text-warning">{character.name}</h3>
						<p className="card-text">
						  <strong>Altura:</strong> {character.height}<br />
						  <strong>Peso:</strong> {character.mass}<br />
						  <strong>Año de nacimiento:</strong> {character.birth_year}
						</p>
						<button className="btn btn-outline-danger" onClick={() => addToFavorites(character)}>
						  <i className="fas fa-heart mx-1"></i>Guardar en favoritos
						</button>
					  </div>
					</div>
				  </div>
				</div>
			  </div>
			))}
		  </div>
		</div>
	  );
	}