import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<h1 className="text-white">En el browse de la izquierda elige si ver
				personajes, vehículos o planetas
			</h1>
			
		</div>
	);
}; 