import React from 'react';
import { useState, useEffect } from 'react';
import { FavoriteContext } from "../hooks/FavoriteContext"
import { useContext } from "react";
export const Planets = () => {

    const [planets, setPlanets] = useState([])
    const [favorite, setFavorite] = useContext(FavoriteContext)
  
    const getPlanets = async () => {
      const response = await fetch("https://swapi.dev/api/planets")
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

    return (
        <div className="text-center">
            <h1>Planetas</h1>
        </div>
    );
};