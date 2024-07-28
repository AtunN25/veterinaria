import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import veterinaria from "../assets/veterinaria.png";

interface Animal {
  id_arete: string;
  fmdate: string;
  sexo: string;
  especie_tipo: string;
  raza_tipo: string;
  ultimo_peso: string | null;
  penultimo_peso: string | null;
  diferencia_peso: string | null;
  rep_fecha: string | null;
  fecha_futura: string | null;
  peso_state: number;
}

function Dashboard() {
  const navigate = useNavigate();

  const [count, setCount] = useState<number>(0);
  const [animals, setAnimals] = useState<Animal[]>([]);

  const handleDownload = async (type: string) => {
    console.log(type);
    try {
      const response = await fetch(
        `https://veterinaria-production-b14c.up.railway.app/api/v1/download/${type}`,
        {
          method: "GET",
          headers: {
            "Content-Type":
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const blob = await response.blob();
      const urlBlob = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = urlBlob;
      a.download = `Sabana-${type}.xlsx`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://veterinaria-production-b14c.up.railway.app/api/v1/animal/initial",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        // Asignar los datos obtenidos al estado
        setAnimals(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const animalesInvertidos = [...animals].reverse();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://veterinaria-production-b14c.up.railway.app/api/v1/animal/count",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        // Asegúrate de acceder correctamente a la estructura de la respuesta
        if (Array.isArray(data) && data.length > 0 && data[0].count) {
          setCount(Number(data[0].count));
        } else {
          throw new Error("Invalid data structure");
        }
      } catch (error) {
        console.error("Error fetching animal count:", error);
      }
    };

    fetchData();
  }, []);

  const handleButtonClick = async (path: string) => {
    if (path === "/newregister") {
      navigate(path);
    } else {
      const { value: areteinput } = await Swal.fire({
        title: "Ingrese el código de arete:",
        input: "text",
        inputAttributes: {
          autocapitalize: "characters",
          placeholder: "Código de arete",
        },
        showCancelButton: true,
        confirmButtonText: "Aceptar",
        cancelButtonText: "Cancelar",
        inputValidator: (value) => {
          if (!value) {
            return "¡Necesita escribir algo!";
          }
          return null;
        },
      });

      if (areteinput) {
        const arete = areteinput.toUpperCase();
        try {
          const response = await fetch(
            "https://veterinaria-production-b14c.up.railway.app/api/v1/animal/status",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ arete }),
            }
          );

          if (response.ok) {
            const data = await response.json();
            const animal = data[0];

            if (animal && animal.sexo) {
              const animalData = { arete, sexo: animal.sexo };
              localStorage.setItem("animalData", JSON.stringify(animalData));

              if (
                (path === "/muestras" || path === "/capacidadreproductiva") &&
                animal.sexo !== "Macho"
              ) {
                await Swal.fire({
                  icon: "error",
                  title: "¡ERROR!",
                  text: "El formulario es solo para animales Machos.",
                });
              } else if (path === "/femaleform" && animal.sexo !== "Hembra") {
                await Swal.fire({
                  icon: "error",
                  title: "¡ERROR!",
                  text: "El formulario es solo para animales Hembras.",
                });
              } else {
                await Swal.fire({
                  icon: "success",
                  title: "¡Éxito!",
                  text: `Se encontró el arete y se confirmó el sexo: ${animal.sexo}`,
                });
                navigate(`${path}?sexo=${animal.sexo}`);
              }
            } else {
              await Swal.fire({
                icon: "error",
                title: "¡ERROR!",
                text: "Código de arete no se encuentra registrado. Por favor, vuelva a intentarlo.",
              });
            }
          } else {
            await Swal.fire({
              icon: "error",
              title: "¡ERROR!",
              text: "Código de arete no se encuentra registrado. El servidor no envió respuesta",
            });
          }
        } catch (error) {
          console.error("Error al validar el código de arete:", error);
          await Swal.fire({
            icon: "error",
            title: "¡ERROR!",
            text: "Ocurrió un error al validar el código de arete. Por favor, vuelva a intentarlo.",
          });
        }
      }
    }
  };

  return (
    <div className="">
      <div className="bg-amber-950 flex justify-between p-2 ">
        <div className=" w-4/5 md:w-7/8 p-2">
          <h2 className=" text-slate-200 font-sans text-sm lg:text-lg">
            SISTEMA DE CAMELIDOS SUDAMERICANOS EN LA UNIVERSIDAD NACIONAL JORGE
            BASADRE GROHMANN
          </h2>
        </div>
        <div className=" w-1/5 md:w-1/8 flex justify-items-center  items-center md:justify-end md:pr-4">
          <img
            className=" w-full md:h-16 md:w-16 "
            width="60 "
            height="60 "
            src={veterinaria}
          />
        </div>
      </div>

      <div className="p-2">
        <div className="bg-gray-800 flex justify-between p-2 rounded-lg">
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
                <div className="-mt-1 font-sans text-sm font-semibold">
                  {count}
                </div>
              </div>
            </div>
          </div>
          <button
            className="bg-green-900 text-white rounded-lg inline-flex items-center justify-center px-2 "
            onClick={() => handleDownload("General")}
          >
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
              onClick={() => handleButtonClick("/salud")}
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
            onClick={() => handleDownload("Macho")}
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
            onClick={() => handleDownload("Hembra")}
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
        <div className="h-96">
          <div className="h-full relative overflow-y-scroll shadow-md p-2 rounded-sm">
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
                    Especie
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                  >
                    Sexo
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
                    Último Peso
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                  >
                    Penúltimo Peso
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                  >
                    Diferencia Peso
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                  >
                    Ultima Rotacion
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                  >
                    Proxima Rotacion
                  </th>
                </tr>
              </thead>
              
              <tbody className="bg-gray-800">
                {animalesInvertidos.map((animal, index) => (
                  <tr
                    key={`${animal.id_arete}-${index}`}
                    className="border-b border-gray-200"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                    >
                      {animal.id_arete}
                    </th>
                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                      {animal.especie_tipo}
                    </td>
                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                      {animal.raza_tipo}
                    </td>
                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                      {animal.sexo}
                    </td>
                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                      {animal.ultimo_peso}
                    </td>
                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                      {animal.penultimo_peso}
                    </td>
                    <td
                      className={`px-6 py-4 ${
                        animal.peso_state === 0 ? "text-red-600" : ""
                      } bg-gray-50 dark:bg-gray-800`}
                    >
                      {animal.diferencia_peso}
                    </td>
                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                      {animal.rep_fecha}
                    </td>
                    <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                      {animal.fecha_futura}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="py-3 px-3 flex justify-end w-full">
            <button
              className="bg-amber-950 text-white w-1/5 md:w-1/12 rounded-sm inline-flex items-center justify-center px-4 py-2.5"
              onClick={() => navigate("/login")}
            >
              <div className="text-left rtl:text-right">
                <div className="mb-1 text-bold ">Salir</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
