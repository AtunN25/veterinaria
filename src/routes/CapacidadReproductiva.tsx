import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


function CapacidadReproductiva() {
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

    const toSeconds = (hours: string, minutes: string, seconds: string) => {
      const h = parseInt(hours) || 0;
      const m = parseInt(minutes) || 0;
      const s = parseInt(seconds) || 0;
      return h * 3600 + m * 60 + s;
    };

    const impetuTotalSegundos = toSeconds(
      formData.get("impetuHoras")?.toString() || "0",
      formData.get("impetuMinutos")?.toString() || "0",
      formData.get("impetuSegundos")?.toString() || "0"
    );

    const derriboTotalSegundos = toSeconds(
      formData.get("derriboHoras")?.toString() || "0",
      formData.get("derriboMinutos")?.toString() || "0",
      formData.get("derriboSegundos")?.toString() || "0"
    );

    const tCopulaTotalSegundos = toSeconds(
      formData.get("tCopulaHoras")?.toString() || "0",
      formData.get("tCopulaMinutos")?.toString() || "0",
      formData.get("tCopulaSegundos")?.toString() || "0"
    );

    /*const tPenetracionTotalSegundos = toSeconds(
      formData.get("tPenetracionHoras")?.toString() || "0",
      formData.get("tPenetracionMinutos")?.toString() || "0",
      formData.get("tPenetracionSegundos")?.toString() || "0"
    );*/

    const data = {
      snd_gutural: formData.get("snd_gutural")?.toString(),
      impetu: impetuTotalSegundos,
      derribo: derriboTotalSegundos,
      t_copula: tCopulaTotalSegundos,
      //t_penetracion: tPenetracionTotalSegundos,
      obs: formData.get("obs")?.toString(),
      macho: parsedAnimalData?.arete,
      n_derribo: parseInt(formData.get("n_derribo")?.toString() || "0"),
      hembra: formData.get("hembra")?.toString(),
    };

    try {
      const response = await fetch("https://veterinaria-production-b14c.up.railway.app/api/v1/form/reproduccion", {
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
        localStorage.removeItem("animalData");
        handleButtonClick("/dashboard");
      } else {
        await Swal.fire({
          icon: "error",
          title: "¡ERROR!",
          text: "Error en el registro,error al momento de ingresar el arete de la hembra",
        });
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  return (
    <div className="p-4 rounded-sm">
      <h2 className="text-xl font-bold leading-7 text-gray-900">
        Capacidad Reproductiva {parsedAnimalData ? `- Arete: ${parsedAnimalData.arete}` : ""}
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Sonidos guturales
          </label>
          <select
            name="snd_gutural"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/3 p-2.5"
          >
            <option value="Bajo">bajo</option>
            <option value="Medio">medio</option>
            <option value="Alto">alto</option>
          </select>

          <label className="block text-sm font-medium leading-6 text-gray-900 mt-4">
            Ímpetu en horas, minutos y segundos
          </label>
          <div className="mt-2 flex space-x-4">
            <input
              type="number"
              name="impetuHoras"
              placeholder="Horas"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/12 p-2.5"
            />
            <input
              type="number"
              name="impetuMinutos"
              placeholder="Minutos"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/12 p-2.5"
            />
            <input
              type="number"
              name="impetuSegundos"
              placeholder="Segundos"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/12 p-2.5"
            />
          </div>

          <label className="block text-sm font-medium leading-6 text-gray-900 mt-4">
            Derribo en horas, minutos y segundos
          </label>
          <div className="mt-2 flex space-x-4">
            <input
              type="number"
              name="derriboHoras"
              placeholder="Horas"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/12 p-2.5"
            />
            <input
              type="number"
              name="derriboMinutos"
              placeholder="Minutos"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/12 p-2.5"
            />
            <input
              type="number"
              name="derriboSegundos"
              placeholder="Segundos"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/12 p-2.5"
            />
          </div>

          <label className="block text-sm font-medium leading-6 text-gray-900 mt-4">
            Tiempo de cópula en horas, minutos y segundos
          </label>
          <div className="mt-2 flex space-x-4">
            <input
              type="number"
              name="tCopulaHoras"
              placeholder="Horas"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/12 p-2.5"
            />
            <input
              type="number"
              name="tCopulaMinutos"
              placeholder="Minutos"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/12 p-2.5"
            />
            <input
              type="number"
              name="tCopulaSegundos"
              placeholder="Segundos"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/12 p-2.5"
            />
          </div>

          {/*<label className="block text-sm font-medium leading-6 text-gray-900 mt-4">
            Tiempo hasta la penetración en horas, minutos y segundos
          </label>
          <div className="mt-2 flex space-x-4">
            <input
              type="number"
              name="tPenetracionHoras"
              placeholder="Horas"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/12 p-2.5"
            />
            <input
              type="number"
              name="tPenetracionMinutos"
              placeholder="Minutos"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/12 p-2.5"
            />
            <input
              type="number"
              name="tPenetracionSegundos"
              placeholder="Segundos"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/12 p-2.5"
            />
          </div>*/}

          <label className="block text-sm font-medium leading-6 text-gray-900 mt-4">
            Número de derribo
          </label>
          <input
            type="number"
            name="n_derribo"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/3 p-2.5"
            placeholder="Ej: 1"
          />

          <label className="block text-sm font-medium leading-6 text-gray-900 mt-4">
            Hembra
          </label>
          <input
            type="text"
            name="hembra"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/3 p-2.5"
          />
        </div>

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

export default CapacidadReproductiva;
