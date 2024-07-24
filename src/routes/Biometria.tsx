import React from "react";
import { useNavigate } from "react-router-dom";

/*const today = new Date();
today.setDate(today.getDate() - 1); // Restar un día
const formattedDate = today.toISOString().split("T")[0];*/

function Biometria() {
  const navigate = useNavigate();

  const handleButtonClick = (path: string) => {
    navigate(path); // Redirige a la ruta del dashboard
  };

  type Sexo = "macho" | "hembra";

  const [sexo] = React.useState<Sexo>("macho"); // Puedes inicializar con "macho" o "hembra"

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Recolecta los datos del formulario
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const data = {
      peso:formData.get("peso"),
      arete: formData.get("arete"),
      CNdiente: formData.get("CNdiente") ,
      canino: formData.get("canino") ,
      Ccorporal: formData.get("Ccorporal") ,
      Lcabeza: formData.get("Lcabeza") ,
      Acabeza: formData.get("Acabeza") ,
      Loreja: formData.get("Loreja") ,
      Lcuello: formData.get("Lcuello") ,
      Lcuerpo: formData.get("Lcuerpo") ,
      ALcruz: formData.get("ALcruz") ,
      ANgrupa: formData.get("ANgrupa") ,
      ALgrupa: formData.get("ALgrupa") ,
      AMpecho: formData.get("AMpecho") ,
      APanterior: formData.get("APanterior") ,
      APposterior: formData.get("APposterior") ,
      CIcuerpo: formData.get("CIcuerpo") ,
      isquiones: formData.get("isquiones") ,
      TDEancho: formData.get("TDEancho") || null,
      TDElargo: formData.get("TDElargo") || null,
      TIZancho: formData.get("TIZancho") || null,
      TIZlargo: formData.get("TIZlargo") || null,
      COvulvar: formData.get("COvulvar") || null,
    };

    try {
      // Aquí deberías hacer la llamada a tu API para enviar los datos
      const response = await fetch("/api/biometria", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
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
      <h2 className="text-xl font-bold leading-7 text-gray-900">Biometria</h2>

      <form onSubmit={handleSubmit}>
        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Arete
          </label>
          <input
            name="arete"
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Ingrese ancho de grupa"
          />
        </div>

        <label className="block text-sm font-medium leading-6 text-gray-900">
          CI cuerpo
        </label>
        <input
          name="CIcuerpo"
          type="number"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Ingrese ancho de grupa"
        />

        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            C. Dentaria de boca
          </label>
          <input
            type="text"
            name="CNdiente"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="ej: llena"
          />
        </div>

        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Caninos
          </label>
          <input
            name="canino"
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="ej: 2 caninos(1arriba 1 abajo)"
          />
        </div>

        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Peso
          </label>
          <input
            type="number"
            step="0.1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder=""
          />
        </div>

        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Condición Corporal
          </label>
          <input
            type="number"
            step="0.1"
            name="Ccorporal"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Ingrese altura de grupa"
          />
        </div>

        {/* Altura de Grupa */}
        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Largo de Cabeza
          </label>
          <input
            name="Lcabeza"
            type="number"
            step="0.1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Ingrese altura de grupa"
          />
        </div>

        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Ancho de Cabeza
          </label>
          <input
            name="Acabeza"
            type="number"
            step="0.1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Ingrese altura de grupa"
          />
        </div>

        {/* Orejas */}
        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Largo de oreja
          </label>
          <input
            name="Loreja"
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Ingrese orejas"
          />
        </div>

        {/* Orejas */}
        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Largo de cuello
          </label>
          <input
            name="Lcuello"
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Ingrese orejas"
          />
        </div>
        {/* Longitud del Cuerpo */}
        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Largo de cuerpo
          </label>
          <input
            name="Lcuerpo"
            type="number"
            step="0.1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Ingrese longitud del cuerpo"
          />
        </div>

        {/* Altura de Cruz */}
        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Altura de Cruz
          </label>
          <input
            name="ALcruz"
            type="number"
            step="0.1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Ingrese altura de cruz"
          />
        </div>

        {/* Ancho de Grupa */}
        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Ancho de Grupa
          </label>
          <input
            name="ANgrupa"
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Ingrese ancho de grupa"
          />
        </div>

        {/* Longitud del Cuerpo */}
        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Altura de grupa
          </label>
          <input
            name="ALgrupa"
            type="number"
            step="0.1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Ingrese longitud del cuerpo"
          />
        </div>

        {/* Longitud del Cuerpo */}
        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Amplitud del pecho
          </label>
          <input
            name="AMpecho"
            type="number"
            step="0.1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Ingrese longitud del cuerpo"
          />
        </div>

        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Aplomo Anterior
          </label>
          <div className="mt-2">
            <select
              name="APanterior"
              id="colorSelect"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="normal">Normal</option>
              <option value="cerrado">Cerrado</option>
            </select>
          </div>
        </div>

        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Aplomo Posterior
          </label>
          <div className="mt-2">
            <select
              name="APposterior"
              id="colorSelect"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="normal">Normal</option>
              <option value="cerrado">Patizambo</option>
            </select>
          </div>
        </div>

        <div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Isquiones
          </label>
          <input
            name="isquiones"
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="ej: 2.1"
          />
        </div>

        {/*<div className="mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Observaciones
          </label>
          <textarea
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Ingrese observaciones"
          />
        </div>*/}

        {sexo === "hembra" ? (
          <div className="mt-2">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Comisura vulvar
            </label>
            <input
              name="COvulvar"
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="ej: 2.5"
            />
          </div>
        ) : (
          <div>
            <h2 className="text-lg font-bold leading-7 text-gray-900">
              Medicion testicular
            </h2>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Testiculo derecho - Ancho
            </label>
            <input
              name="TDEancho"
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="ej:2.6 "
            />

            <label className="block text-sm font-medium leading-6 text-gray-900">
              Testiculo derecho - Largo
            </label>
            <input
              name="TDElargo"
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="ej:2.6 "
            />

            <label className="block text-sm font-medium leading-6 text-gray-900">
              Testiculo izquierdo - Ancho
            </label>
            <input
              name="TIZancho"
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="ej:2.6"
            />
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Testiculo izquierdo - Largo
            </label>
            <input
              name="TIZlargo"
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="ej:2.6"
            />
          </div>
        )}

        <div className="mt-4">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border rounded"
            type="submit"
          >
            Enviar
          </button>
        </div>
        <div className="mt-4">
          <button
            className="bg-slate-800 hover:bg-green-700 text-white font-bold py-2 px-4 border rounded"
            onClick={() => handleButtonClick("/dashboard")}
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Biometria;
