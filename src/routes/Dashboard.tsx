import { useNavigate } from "react-router-dom";

const validAretes = [
  {
    arete: "H-9",
    gender: "M",
  },
  {
    arete: "HC-09",
    gender: "M",
  },
  {
    arete: "H-24",
    gender: "F",
  },
  {
    arete: "S-01",
    gender: "F",
  },
];

function Dashboard() {
  const navigate = useNavigate();

  const handleButtonClick = (path: string) => {
    if (path === "/newregister") {
      navigate(path);
    } else {
      const arete = prompt("Ingrese el código de arete de la llama:");

      if (arete) {
        const animal = validAretes.find((a) => a.arete === arete);

        if (animal) {
          if (
            (path === "/muestras" || path === "/capacidadreproductiva") &&
            animal.gender !== "M"
          ) {
            alert("!ERROR! El formulario es solo para animales Machos.");
          } else if (path === "/femaleform" && animal.gender !== "F") {
            alert("!ERROR! El formulario es solo para animales Hembras.");
          } else {
            navigate(path);
          }
        } else {
          alert(
            "!ERROR! Código de arete no se encuentra registrado. Por favor, vuelva a intentarlo."
          );
        }
      }
    }
  };

  return (
    <div>
      <div className="bg-gray-800 flex justify-between p-2">
        <div className="flex items-center">
          <div className="bg-gray-800 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5">
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/external-icongeek26-flat-icongeek26/64/external-llama-animal-body-icongeek26-flat-icongeek26.png"
              alt="external-llama-animal-body-icongeek26-flat-icongeek26"
            />
            <div className="px-3 text-left rtl:text-right">
              <div className="mb-1 text-xs">Cantidad de Animales</div>
              <div className="-mt-1 font-sans text-sm font-semibold">27</div>
            </div>
          </div>
        </div>
        <button className="bg-green-900 text-white rounded-lg inline-flex items-center justify-center px-2 ">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/color/48/ms-excel.png"
            alt="ms-excel"
          />
          <div className="text-left rtl:text-right px-2">
            <div className="mb-1 text-xs ">Sabana Completa</div>
          </div>
        </button>
      </div>
      <div className="rounded overflow-hidden shadow-lg justify-start p-2">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            className="bg-gray-800 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5"
            onClick={() => handleButtonClick("/newregister")}
          >
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/64/external-llama-animal-head-icongeek26-outline-gradient-icongeek26.png"
              alt="external-llama-animal-head-icongeek26-outline-gradient-icongeek26"
            />
            <div className="text-left rtl:text-right">
              <div className="mb-1 text-xs ">+Nuevo Animal</div>
            </div>
          </button>

          <button
            className="sm:w-auto bg-gray-800 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5"
            onClick={() => handleButtonClick("/biometria")}
          >
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/fluency/48/fingerprint-accepted.png"
              alt="fingerprint-accepted"
            />
            <div className="text-left rtl:text-right">
              <div className="mb-1 text-xs">Biometria</div>
            </div>
          </button>

          <button
            className="sm:w-auto bg-gray-800 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5"
            onClick={() => handleButtonClick("/clasificacionfibra")}
          >
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/color/48/two-hairs.png"
              alt="two-hairs"
            />
            <div className="text-left rtl:text-right">
              <div className="mb-1 text-xs">Clasificacion de Fibra</div>
            </div>
          </button>
          <button
            className="sm:w-auto bg-gray-800 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5"
            onClick={() => handleButtonClick("/muestras")}
          >
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/external-vectorslab-flat-vectorslab/53/external-Injection-education-and-science-vectorslab-flat-vectorslab.png"
              alt="external-Injection-education-and-science-vectorslab-flat-vectorslab"
            />
            <div className="text-left rtl:text-right">
              <div className="mb-1 text-xs">Muestras de Semen</div>
            </div>
          </button>

          <button
            className="sm:w-auto bg-gray-800 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5"
            onClick={() => handleButtonClick("/capacidadreproductiva")}
          >
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/dusk/64/alpaca--v1.png"
              alt="alpaca--v1"
            />
            <div className="text-left rtl:text-right">
              <div className="mb-1 text-xs">Capacidad reproductiva</div>
            </div>
          </button>

          <button
            className="sm:w-auto bg-gray-800 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5"
            onClick={() => handleButtonClick("/capacidadreproductiva")}
          >
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/fluency/48/heart-with-pulse--v1.png"
              alt="heart-with-pulse--v1"
            />
            <div className="text-left rtl:text-right">
              <div className="mb-1 text-xs">Salud</div>
            </div>
          </button>
        </div>
      </div>

      <div className="flex items-center rounded  shadow-lg  p-2 space-x-2 justify-center">
        <button
          className="sm:w-auto bg-gray-800 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5"
          onClick={() => handleButtonClick("/")}
        >
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/color/48/microsoft-excel-2019--v1.png"
            alt="microsoft-excel-2019--v1"
          />
          <div className="text-left rtl:text-right">
            <div className="mb-1 text-xs">Sabana Macho</div>
          </div>
        </button>

        <button
          className="sm:w-auto bg-gray-800 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5"
          onClick={() => handleButtonClick("/")}
        >
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/color/48/microsoft-excel-2019--v1.png"
            alt="microsoft-excel-2019--v1"
          />
          <div className="text-left rtl:text-right">
            <div className="mb-1 text-xs">Sabana Hembra</div>
          </div>
        </button>
      </div>
      <div className="">
        <div className="relative overflow-x-auto shadow-md  p-2 rounded-sm">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                >
                  Arete
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                >
                  Raza
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                >
                  Fecha Nacimiento
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                >
                  Cant Informes
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                >
                  Fecha Ult Reporte
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-800">
              <tr className="border-b border-gray-200 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  S-09
                </th>
                <td className="px-6 py-4 bg-gray-800">Silver</td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  15/04/2022
                </td>
                <td className="px-6 py-4">0</td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800"></td>
              </tr>
              <tr className="border-b border-gray-200 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  H-14
                </th>
                <td className="px-6 py-4">White</td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  15/04/2022
                </td>
                <td className="px-6 py-4">4</td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  15/04/2023
                </td>
              </tr>
              <tr className="border-b border-gray-200 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  H-16
                </th>
                <td className="px-6 py-4">Black</td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  15/04/2022
                </td>
                <td className="px-6 py-4">1</td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  15/04/2022
                </td>
              </tr>
              <tr className="border-b border-gray-200 ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  MC-09
                </th>
                <td className="px-6 py-4">Gray</td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  13/04/2022
                </td>
                <td className="px-6 py-4">3</td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  15/04/2022
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
