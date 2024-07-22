
import { useNavigate } from "react-router-dom";

function FemaleForm() {
  const navigate = useNavigate();
 

  const handleButtonClick = (path:string) => {
    navigate(path); // Redirige a la ruta del dashboard
  };
  return (
    <div>
      <h2 className="text-xl font-bold leading-7 text-gray-900">
        Formulario Para Hembras
      </h2>
    
      <div className="mt-4">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border rounded"
            onClick={() => handleButtonClick("/dashboard")}
          >
            Enviar
          </button>
        </div>
    
    </div>
  )
}

export default FemaleForm
