import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export const CharacterDetail = () => {
  const { id } = useParams();
  const [char, setChar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://swapi.py4e.com/api/people/${id}/`)
      .then(res => res.json())
      .then(data => {
        setChar(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (!char)  return <p>Personaje no encontrado</p>;

  return (
    <div className="container my-4 text-white">
      <Link to="/characters" className="btn btn-secondary mb-3">
        ← Volver
      </Link>
      <h2 className="text-warning">{char.name}</h2>
      <p><strong>Altura:</strong> {char.height}</p>
      <p><strong>Peso:</strong> {char.mass}</p>
      <p><strong>Color de ojos:</strong> {char.eye_color}</p>
      <p><strong>Color de pelo:</strong> {char.hair_color}</p>
      <p><strong>Color de piel:</strong> {char.skin_color}</p>
      <p><strong>Especie:</strong> {char.species}</p>
      <p><strong>Año de nacimiento:</strong> {char.birth_year}</p>
      <p><strong>Género:</strong> {char.gender}</p>
      <p><strong>Mundo de origen:</strong> {char.homeworld}</p>
    </div>
  );
};