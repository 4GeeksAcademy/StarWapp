import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export const PlanetDetail = () => {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://swapi.py4e.com/api/planets/${id}/`)
      .then(res => res.json())
      .then(data => {
        setPlanet(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-white">Cargando...</p>;
  if (!planet)  return <p>Personaje no encontrado</p>;

  return (
    <div className="container my-4 text-white">
      <Link to="/planets" className="btn btn-secondary mb-3">
        ← Volver
      </Link>
      <h2 className="text-warning">{planet.name}</h2>
      <p><strong>Clima:</strong> {planet.climate}</p>
      <p><strong>Terreno:</strong> {planet.terrain}</p>
      <p><strong>Gravedad:</strong> {planet.gravity}</p>
      <p><strong>Diámetro:</strong> {planet.diameter}</p>
      <p><strong>Población:</strong> {planet.population}</p>
      <p><strong>Aguas superficiales:</strong> {planet.surface_water}</p>
      <p><strong>Periodo orbital:</strong> {planet.orbital_period}</p>
      <p><strong>Película en la que aparece:</strong> {planet.films}</p>
    </div>
  );
};