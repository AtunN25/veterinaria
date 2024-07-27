import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Muestras() {
  const navigate = useNavigate();

  const handleButtonClick = (path: string) => {
    localStorage.removeItem("animalData");
    Swal.fire({
      icon: "info",
      text: "No se envio ningun registro!",
    });
    navigate(path); // Redirige a la ruta del dashboard
  };

  const animalData = localStorage.getItem("animalData");
  const parsedAnimalData = animalData ? JSON.parse(animalData) : null;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const data = {
      h_inicio: formData.get("h_inicio"),
      h_fin: formData.get("h_fin"),
      t_inicio: formData.get("t_inicio"),
      t_fin: formData.get("t_fin"),
      volumen: formData.get("volumen"),
      color: formData.get("color"),
      filancia: formData.get("filancia"),
      pH: formData.get("ph"),
      obs: formData.get("obs"),
      arete: parsedAnimalData ? parsedAnimalData.arete : null,
      maniqui: formData.get("maniqui"),
    };

    try {
      const response = await fetch(
        "https://veterinaria-production-b14c.up.railway.app/api/v1/form/muestra",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      console.log(JSON.stringify(data));

      if (response.ok) {
        await Swal.fire({
          icon: "success",
          title: "¡Se registró con éxito!",
        });
        localStorage.removeItem("animalData");
        navigate("/dashboard");
      } else {
        await Swal.fire({
          icon: "error",
          title: "¡ERROR!",
          text: "Error en el registro.",
        });
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  return (
    <div className="p-4 rounded-sm">
      <h2 className="text-xl font-bold leading-7 text-gray-900">
        Muestras de semen{" "}
        {parsedAnimalData ? `- Arete: ${parsedAnimalData.arete}` : ""}
      </h2>

      <form onSubmit={handleSubmit}>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Numero de maniqui
        </label>
        <input
          type="number"
          name="maniqui"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder=""
        />

        <label className="block text-base font-medium leading-6 text-gray-900">
          Tiempo de coleccion
        </label>

        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Hora de Inicio
          </label>
          <input
            type="time"
            name="h_inicio"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>

        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Hora de Fin
          </label>
          <input
            type="time"
            name="h_fin"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>

        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Tiempo de Inicio
          </label>
          <input
            type="number"
            name="t_inicio"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>

        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Tiempo de Fin
          </label>
          <input
            type="number"
            name="t_fin"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>

        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Volumen
          </label>
          <input
            type="number"
            name="volumen"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>

        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Color
          </label>
          <select
            id="color"
            name="color"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/3 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black "
          >
            <option value="Blanco traslucido">Blanco traslucido</option>
            <option value="Blanco Lechoso">Blanco Lechoso</option>
            <option value="Blanco Cristalino">Blanco Cristalino</option>
          </select>
        </div>

        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            ph
          </label>
          <input
            type="number"
            name="ph"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>

        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Filancia
          </label>
          <input
            type="text"
            name="filancia"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>

        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Observaciones
          </label>
          <input
            type="text"
            name="obs"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border rounded"
        >
          Enviar
        </button>
        <button
          type="button"
          className="bg-slate-800 hover:bg-green-700 text-white font-bold py-2 px-4 border rounded"
          onClick={() => handleButtonClick("/dashboard")}
        >
          Regresar
        </button>
      </form>
    </div>
  );
}

export default Muestras;
