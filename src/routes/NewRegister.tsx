import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewRegister() {
  const navigate = useNavigate();

  const handleButtonClick = (path:string) => {
    alert("No se envio ningun registro!");
    navigate(path); // Redirige a la ruta del dashboard
  };

  // Estado para el tipo de animal seleccionado
  const [animalType, setAnimalType] = useState("");
  const [birthType, setBirthType] = useState("comprada");

  const today = new Date();
  today.setDate(today.getDate() - 1); // Restar un día
  const formattedDate = today.toISOString().split("T")[0];

  const handleAnimalTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAnimalType(event.target.value);
  };

  const handleBirthTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBirthType(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    const formData = new FormData(event.currentTarget);
    const data = {
      arete: formData.get('arete') || null,
      sexo: formData.get('sexo'),
      especie: formData.get('especie'),
      raza: formData.get('raza'),
      padre: formData.get('padre') || null,
      madre: formData.get('madre') || null,
      tipo_ingreso: formData.get('tipo_ingreso'),
      fecha_ingreso: formData.get('fecha_ingreso'),
      edad: formData.get('edad') || 0.0
    };

    try {
      const response = await fetch("https://veterinaria-production-b14c.up.railway.app/api/v1/form/animals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log(JSON.stringify(data));

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log(response);

      const result = await response.json();
      console.log("Response:", result);

      if (result.message === "Data saved") {
        alert("¡Se registró con éxito!");
        navigate("/dashboard"); // Redirige a la ruta del dashboard
      } else {
        alert("Error en el registro.");
      }
    } catch (error) {
      console.error("Error durante el registro:", error);
      alert("Error durante el registro. Por favor, intenta de nuevo.");
    }
  };

  return (
    <div className="p-4 rounded-sm">
      <h2 className="text-xl font-bold leading-7 text-gray-900">Nuevo Registro</h2>
      <form onSubmit={handleSubmit}>
        <div className="col-span-3">
          <label className="block text-sm font-medium leading-6 text-gray-900">Arete</label>
          <div className="mt-2">
            <input
              type="text"
              name="arete"
              id="arete"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></input>
          </div>

          <div className="mt-2">
            <label className="block text-sm font-medium leading-6 text-gray-900">Tipo de Animal</label>
            <select
              id="especie"
              onChange={handleAnimalTypeChange}
              name="especie"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="1">Llama</option>
              <option value="2">Alpaca</option>
            </select>
          </div>
        </div>

        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">Tipo de Ingreso</label>
          <select
            id="tipo_ingreso"
            onChange={handleBirthTypeChange}
            name="tipo_ingreso"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="comprada">Trazlado</option>
            <option value="nacida">Nacimiento</option>
          </select>
        </div>

        <div className="sm:col-span-3">
          <div className="mt-2">
            <label className="block text-sm font-medium leading-6 text-gray-900">Sexo</label>
            <select
              id="sexo"
              name="sexo"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="Macho">hembra</option>
              <option value="Hembra">macho</option>
            </select>
          </div>
{/*
          <label className="block text-sm font-medium leading-6 text-gray-900">Peso</label>
          <div className="mt-2">
            <input
              type="number"
              name="peso"
              id="peso"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></input>
          </div>*/}

          <div className="mt-2">
            <label className="block text-sm font-medium leading-6 text-gray-900">Raza</label>
            {animalType === "llama" ? (
              <select
                id="raza"
                name="raza"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="1">R1llama</option>
                <option value="2">R2llama</option>
              </select>
            ) : (
              <select
                id="raza"
                name="raza"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="1">suri</option>
                <option value="2">huacaya</option>
              </select>
            )}
          </div>
        </div>

        <div className="mt-2">
          {birthType === "comprada" ? (
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">Edad</label>
              <div className="mt-2">
                <input
                  type="number"
                  name="edad"
                  id="edad"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                ></input>
              </div>
              <label className="block text-sm font-medium leading-6 text-gray-900">Fecha de Ingreso</label>
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
                  name="fecha_ingreso"
                  defaultValue={formattedDate}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Select date"
                ></input>
              </div>
            </div>
          ) : (
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">Arete del Padre</label>
              <div className="mt-2">
                <input
                  type="text"
                  name="padre"
                  id="padre"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                ></input>
              </div>
              <label className="block text-sm font-medium leading-6 text-gray-900">Arete de la Madre</label>
              <div className="mt-2">
                <input
                  type="text"
                  name="madre"
                  id="madre"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                ></input>

               {/*<label className="block text-sm font-medium leading-6 text-gray-900">Fecha de Nacimiento</label>
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
                    name="fecha_ingreso"
                    defaultValue={formattedDate}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date"
                  ></input>
                </div>*/}
              </div>
            </div>
          )}
        </div>

        <br />
        <button
          className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border rounded"
          type="submit"
        >
          Enviar
        </button>
        
      </form>
      <button
          className="bg-slate-800  hover:bg-blue-700 text-white font-bold py-2 px-4 border  rounded"
          onClick={() => handleButtonClick("/dashboard")}
        >
          Regresar
        </button> 
    </div>
  );
}

export default NewRegister;


/*<button
          className="bg-green-500  hover:bg-blue-700 text-white font-bold py-2 px-4 border  rounded"
          onClick={() => handleButtonClick("/dashboard")}
        >
          Enviar
        </button> */