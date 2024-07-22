import { useNavigate } from "react-router-dom";

const today = new Date();
today.setDate(today.getDate() - 1); // Restar un día
const formattedDate = today.toISOString().split("T")[0];

function ClasificacionFibra() {
  const navigate = useNavigate();
  const handleButtonClick = (path: string) => {
    navigate(path); // Redirige a la ruta del dashboard
  };
  return (
    <div>
      <div className="p-4 rounded-sm">
        <h2 className="text-xl font-bold leading-7 text-gray-900">
          Calificacion de Fibra
        </h2>

        <form>
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Fecha de Registro
          </label>
          <div className="relative max-w-sm">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <input
              type="date"
              name="date"
              defaultValue={formattedDate}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Select date"
            ></input>
          </div>

          <label className="block text-sm font-medium leading-6 text-gray-900">
            Densidad
          </label>
          <select
            id="animalType"
            name="animalType"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="baja">baja</option>
            <option value="media">media</option>
            <option value="buena">buena</option>
            <option value="alta">alta</option>
          </select>

          <label className="block text-sm font-medium leading-6 text-gray-900">
            Definicion
          </label>
          <select
            id="animalType"
            name="animalType"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="baja">baja</option>
            <option value="media">media</option>
            <option value="buena">buena</option>
            <option value="alta">alta</option>
          </select>

          <label className="block text-sm font-medium leading-6 text-gray-900">
            Calce
          </label>
          <select
            id="animalType"
            name="animalType"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="baja">baja</option>
            <option value="media">media</option>
            <option value="buena">buena</option>
            <option value="alta">alta</option>
          </select>

          <label className="block text-sm font-medium leading-6 text-gray-900">
            Uniformidad
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="ej: vellon no uniforme"
          />

          <label className="block text-sm font-medium leading-6 text-gray-900">
            Tuco
          </label>
          <select
            id="animalType"
            name="animalType"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="baja">baja</option>
            <option value="media">media</option>
            <option value="no">no</option>
          </select>

          <label className="block text-sm font-medium leading-6 text-gray-900">
            Color
          </label>
          <select
            id="animalType"
            name="animalType"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="cafe">cafe</option>
            <option value="blanco lechoso">blanco lechoso</option>
            <option value="blanco con mancha">blanco con mancha</option>
          </select>

          <label className="block text-sm font-medium leading-6 text-gray-900">
            Clase
          </label>
          <select
            id="animalType"
            name="animalType"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>

          <h2 className="text-xl font-medium leading-7 text-gray-900">
            Vellon
          </h2>

          <label className="block text-sm font-medium leading-6 text-gray-900">
            Largo mecha
          </label>
          <input
            type="decimal"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="ej: 6.5"
          />

          <label className="block text-sm font-medium leading-6 text-gray-900">
            Referencia Rizos
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="ej: No,leve,si"
          />

          <label className="block text-sm font-medium leading-6 text-gray-900">
            Diametro
          </label>
          <input
            type="decimal"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="ej: 19.94"
          />
          
          <div className="mt-2">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Observaciones
            </label>
            <textarea
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Ingrese observaciones"
            />
          </div>
          <div className="mt-4">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border rounded"
              onClick={() => handleButtonClick("/dashboard")}
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ClasificacionFibra;
