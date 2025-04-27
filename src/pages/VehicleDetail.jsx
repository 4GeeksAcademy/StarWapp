import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export const VehicleDetail = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://swapi.py4e.com/api/vehicles/${id}/`)
      .then(res => res.json())
      .then(data => {
        setVehicle(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (!vehicle)  return <p>Personaje no encontrado</p>;

  return (
    <div className="container my-4 text-white">
      <Link to="/vehicles" className="btn btn-secondary mb-3">
        ← Volver
      </Link>
      <h2 className="text-warning">{vehicle.name}</h2>
      <p><strong>Fabricante:</strong> {vehicle.manufacturer}</p>
      <p><strong>Modelo:</strong> {vehicle.model}</p>
      <p><strong>Clase del vehículo:</strong> {vehicle.vehicle_class}</p>
      <p><strong>Tamaño de largo:</strong> {vehicle.length}</p>
      <p><strong>Coste en créditos:</strong> {vehicle.cost_in_credits}</p>
      <p><strong>Personal necesario para conducirlo:</strong> {vehicle.crew}</p>
      <p><strong>Pasajeros:</strong> {vehicle.passengers}</p>
      <p><strong>Capacidad de carga:</strong> {vehicle.cargo_capacity}</p>
      <p><strong>Películas en la que aparece:</strong> {vehicle.films}</p>
    </div>
  );
};