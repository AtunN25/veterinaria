import "./App.css";
import al from "./assets/al.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    console.log(username)
    console.log(password)

    try {
      const response = await fetch("https://veterinaria-production-b14c.up.railway.app/api/v1/user/state", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      console.log(response)
      console.log(JSON.stringify({
        username: username,
        password: password,
      }));

      if (!response.ok) {
        // Captura la respuesta en texto para ver el mensaje de error
        console.log(response)
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
      }

      const result = await response.json();
      console.log(result);

      // Verifica que el resultado sea un array y extrae el primer elemento
    if (Array.isArray(result) && result.length > 0) {
      const state = result[0].state; // Obtener el valor del campo 'state'
      console.log("State:", state);

      if (state === "1") {
        await Swal.fire({
          icon: 'success',
          title: '¡Usuario correto!',
        });
        navigate("/dashboard"); // Redirige a la ruta del dashboard
      } else {
        await Swal.fire({
          icon: 'error',
          title: '¡ERROR!',
          text: "Nombre de usuario o contraseña incorrectos."
        });
      }
    } else {
      throw new Error("Unexpected response format");
    }
    } catch (error) {
      console.error("Error durante la autenticación:", error);
      alert("Error durante la autenticación. Por favor, intenta de nuevo.");
    }
  };

  return (
    <div
      className=" h-screen w-full"
      style={{
        backgroundImage: `url(${al})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <section className="flex items-center justify-center w-full h-full">
        <div className="flex flex-col  items-center justify-center px-6 py-8 ">
          <div className="w-full  bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-transparent  dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 bg-blue-opacity rounded-md">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Login
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Nombre
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="ingrese usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Contraseña:
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  ></input>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-300 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  onClick={handleLogin}
                >
                  Ingresar
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
