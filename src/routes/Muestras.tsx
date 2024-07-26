import React from "react";
import { useNavigate } from "react-router-dom";



function Muestras() {
  const navigate = useNavigate();

  const handleButtonClick = (path: string) => {
    localStorage.removeItem("animalData");
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
      obs: formData.get("obs"),
      arete: parsedAnimalData ? parsedAnimalData.arete : null,
      maniqui: formData.get("maniqui"),
    };

    try {
      const response = await fetch("https://veterinaria-production-b14c.up.railway.app/api/v1/form/muestra", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(JSON.stringify(data))

      if (response.ok) {
        alert("Registrado con exito!!")
        localStorage.removeItem("animalData");
        handleButtonClick("/dashboard");
      } else {
        console.error("Error al enviar los datos:", response.statusText);
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  return (
    <div className="p-4 rounded-sm">
      <h2 className="text-xl font-bold leading-7 text-gray-900">
        Muestras de semen {parsedAnimalData ? `- Arete: ${parsedAnimalData.arete}` : ""}
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
          <input
            type="text"
            name="color"
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
