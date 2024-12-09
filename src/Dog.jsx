/* Se importa el custom hook y los status */
import { statusList, useFetch } from "./UseFetch"
import withErrorBoundary from "./utils/withErrorBoundary";

function Dog({ breed }) {

  /* Utilizamos el custom Hook para acceder a la API con la siguiente URL(endpoint) */
  const { data, status } = useFetch(`https://dog.ceo/api/breed/${breed}/images/random`
  );

  /* Según el status de conexión con la API, se muestra la información al usuario */
  if (status === statusList.LOADING) {
    return <p>Cargando...</p>;
  }
  if (status === statusList.SUCCESS) {
    //SUGERENCIA: se debería ejecutar algo aquí...
  }
  if (status === statusList.ERROR) {
    return <p>Error al buscar una imagen para la raza: {breed}</p>;
  }

  return (
    <div>
      <h2>Has buscado por raza: {breed}</h2>
      <img src={data.message} />
    </div>
  );
}
const DogWithBoundary = withErrorBoundary(Dog);

//export default Dog;
export default DogWithBoundary;