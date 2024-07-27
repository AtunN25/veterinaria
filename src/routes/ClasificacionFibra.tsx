import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function ClasificacionFibra() {
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
      densidad: formData.get("densidad"),
      definicion: formData.get("definicion"),
      calce: formData.get("calce"),
      uniformidad: formData.get("uniformidad"),
      tuco: formData.get("tuco"),
      color: formData.get("color"),
      clase: formData.get("clase"),
      LONmecha: formData.get("LONmecha"),
      referenciaRizos: formData.get("referenciaRizos"),
      diametro: formData.get("diametro"),
      observacion: formData.get("observacion"),
      arete: parsedAnimalData.arete,
    };

    try {
      const response = await fetch(
        "https://veterinaria-production-b14c.up.railway.app/api/v1/form/vellon",
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
        Calificación de Fibra{" "}
        {parsedAnimalData
          ? `- Arete: ${
              parsedAnimalData.arete + "sexo:" + parsedAnimalData.sexo
            }`
          : ""}
      </h2>

      <form onSubmit={handleSubmit}>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Densidad
        </label>
        <select
          name="densidad"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value="Baja">baja</option>
          <option value="Media">media</option>
          <option value="Bueno">bueno</option>
          <option value="Alto">alto</option>
        </select>

        <label className="block text-sm font-medium leading-6 text-gray-900">
          Definición
        </label>
        <select
          name="definicion"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value="Baja">baja</option>
          <option value="Media">media</option>
          <option value="Alto">alto</option>
        </select>

        <label className="block text-sm font-medium leading-6 text-gray-900">
          Calce
        </label>
        <select
          name="calce"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value="Baja">baja</option>
          <option value="Media">media</option>
          <option value="Alto">alto</option>
        </select>

        <label className="block text-sm font-medium leading-6 text-gray-900">
          Uniformidad
        </label>

        <select
          name="uniformidad"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value="0">si</option>
          <option value="1">no</option>
        </select>

        <label className="block text-sm font-medium leading-6 text-gray-900">
          Tuco
        </label>
        <select
          name="tuco"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value="0">si</option>
          <option value="1">no</option>
        </select>

        <label className="block text-sm font-medium leading-6 text-gray-900">
          Color
        </label>
        <select
        name="color"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        style={{ WebkitAppearance: "none", appearance: "none" }}
      >
        <option value="">Selecciona Color</option>
         <option className="bg-stone-100 text-black" value="blanco">Blanco</option>
        <option className="bg-orange-300 text-black" value="crema-claro">Crema claro</option>
        <option className="bg-orange-400 text-black" value="crema-medio">Crema medio</option>
        <option className="bg-orange-600 text-white" value="crema-oscuro">Crema oscuro</option>
        <option className="bg-amber-700 text-black" value="cafe-claro">Café claro</option>
        <option className="bg-amber-900 text-white" value="cafe-medio">Café medio</option>
        <option className="bg-amber-950 text-white" value="cafe-oscuro">Café oscuro</option>
        {/* <option className="bg-yellow-900 text-white" value="marron">Marrón</option> */}
        {/* <option className="bg-yellow-500 text-black" value="api">Api</option> */}
        <option className="bg-gray-400 text-black" value="gris-claro">Gris claro</option>
        <option className="bg-gray-500 text-black" value="gris-indefinido">Gris indefinido</option>
        <option className="bg-gray-700 text-white" value="gris-oscuro">Gris oscuro</option>
        <option className="bg-gray-900 text-white" value="negro">Negro</option>
      </select>

        <label className="block text-sm font-medium leading-6 text-gray-900">
          Clase
        </label>
        <select
          name="clase"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>

        <h2 className="text-xl font-medium leading-7 text-gray-900">Vellón</h2>

        <label className="block text-sm font-medium leading-6 text-gray-900">
          Largo mecha
        </label>
        <input
          type="decimal"
          name="LONmecha"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="ej: 6.5"
        />

        <label className="block text-sm font-medium leading-6 text-gray-900">
          Referencia Rizos
        </label>
        <input
          type="text"
          name="referenciaRizos"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="ej: No,leve,si"
        />

        <label className="block text-sm font-medium leading-6 text-gray-900">
          Diámetro
        </label>
        <input
          type="decimal"
          name="diametro"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="ej: 19.94"
        />

        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Observaciones
          </label>
          <textarea
            name="observacion"
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
        <div className="mt-4">
          <button
            type="button"
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

export default ClasificacionFibra;
