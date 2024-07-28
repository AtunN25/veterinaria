import { useNavigate } from "react-router-dom";
import React from "react";
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

  const handleSubmit = async (event: React.FormEvent) => {
    const animalData = localStorage.getItem("animalData");
    const parsedAnimalData = animalData ? JSON.parse(animalData) : null;
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const data = {
      producto: formData.get("numproducto"),
      obs: formData.get("obs"),
      arete: parsedAnimalData.arete
    };

    try {
      const response = await fetch("https://veterinaria-production-b14c.up.railway.app/api/v1/form/dosificacion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        await Swal.fire({
          icon: "success",
          title: "¡Se registró con éxito!",
        });
        navigate("/dashboard"); // Redirige a la ruta del dashboard
      } else {
        await Swal.fire({
          icon: "error",
          title: "¡ERROR!",
          text: "Error en el registro.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="p-4 rounded-sm">
      <h2 className="text-xl font-bold leading-7 text-gray-900">
         Dosificacion
      </h2>

      <form onSubmit={handleSubmit}>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Ingrese el nombre del produco
        </label>
        <select
          name="numproducto"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value="1">vitamina</option>
          <option value="2">antiparasitario</option>
        </select>

        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Observaciones
          </label>
          <textarea
            name="obs"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/3 p-2.5"
            placeholder="Ingrese observaciones"
          />
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border rounded"
          >
            Enviar
          </button>
        </div>
        <div className="mt-4">
          <button
            className="bg-slate-800 hover:bg-green-700 text-white font-bold py-2 px-4 border rounded"
            onClick={() => handleButtonClick("/dashboard")}
          >
            Regresar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Muestras;
