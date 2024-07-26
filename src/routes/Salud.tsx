import { useNavigate } from "react-router-dom";
import React from "react";

function Muestras() {
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const data = {
      maniqui: formData.get("maniqui"),
      Hinicio: formData.get("Hinicio"),
      Hfin: formData.get("Hfin"),
      Tinicio: formData.get("Tinicio"),
      Tfin: formData.get("Tfin"),
      volumen: formData.get("volumen"),
      color: formData.get("color"),
      obs: formData.get("obs"),
      arete: formData.get("arete")
    };

    try {
      const response = await fetch("/api/your-endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Data sent successfully");
        navigate("/dashboard"); // Redirige a la ruta del dashboard
      } else {
        console.error("Failed to send data:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="p-4 rounded-sm">
      <h2 className="text-xl font-bold leading-7 text-gray-900">
        Muestras de semen
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
          <div className="mt-2">
            <input
              type="time"
              name="Hinicio"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
              name="Hfin"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              defaultValue="00:00"
            />
          </div>
        </div>



        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Final
          </label>
          <div className="mt-2">
            <input
              type="number"
              name="Tfin"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
              type="number"
              name="volumen"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              defaultValue="0"
            />
          </div>
        </div>

        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Selecciona un Color
          </label>
          <div className="mt-2">
            <select
              name="color"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
            name="obs"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
        
      </form>
    </div>
  );
}

export default Muestras;
