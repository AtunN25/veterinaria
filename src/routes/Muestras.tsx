
import { useNavigate } from "react-router-dom";

const today = new Date();
today.setDate(today.getDate() - 1); // Restar un día
const formattedDate = today.toISOString().split("T")[0];

function Muestras() {
    const navigate = useNavigate();
    const handleButtonClick = (path:string) => {
      navigate(path); // Redirige a la ruta del dashboard
    };
  return (
    <div className="p-4 rounded-sm">
      <h2 className="text-xl font-bold leading-7 text-gray-900">
        Muestras de semen 
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
          Numero de maniqui
        </label>
        <input
          type="number"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder=""
        />

        <label className="block text-base font-medium leading-6 text-gray-900">Tiempo de coleccion</label>

        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Hora de Inicio
          </label>
          <div className="mt-2">
            <input
              type="time"
              name="startTime"
              id="startTime"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue="00:00"
            />
          </div>
        </div>

        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Hora de Final
          </label>
          <div className="mt-2">
            <input
              type="time"
              name="endTime"
              id="endTime"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue="00:00"
            />
          </div>
        </div> 

        <label className="block text-base font-medium leading-6 text-gray-900">Temperatura en C - vagina artificial</label>

        {/* Input de Número de Inicio */}
        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Inicio
          </label>
          <div className="mt-2">
            <input
              type="number"
              name="startNumber"
              id="startNumber"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue="0"
            />
          </div>
        </div>

        {/* Input de Número de Final */}
        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Final
          </label>
          <div className="mt-2">
            <input
              type="number"
              name="endNumber"
              id="endNumber"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue="0"
            />
          </div>
        </div>

        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Volumen
          </label>
          <div className="mt-2">
            <input
              type="decimal"
              name="endNumber"
              id="endNumber"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue="0"
            />
          </div>
        </div>

        {/* Select de Color */}
        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Selecciona un Color
          </label>
          <div className="mt-2">
            <select
              name="colorSelect"
              id="colorSelect"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="blanco-traslucido">Blanco Traslúcido</option>
              <option value="blanco-lechoso">Blanco Lechoso</option>
              <option value="blanco-cristalino">Blanco Cristalino</option>
            </select>
          </div>
        </div>

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
  );
}

export default Muestras;
