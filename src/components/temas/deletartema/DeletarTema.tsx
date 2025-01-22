import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Tema from "../../../models/Tema";
import { buscar, deletar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";

function DeletarTema() {
  const navigate = useNavigate();
  const [tema, setTema] = useState<Tema>({} as Tema);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/temas/${id}`, setTema, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      } else {
        alert("Erro ao buscar o tema.");
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function deletarTema() {
    setIsLoading(true);

    try {
      await deletar(`/temas/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      alert("Tema apagado com sucesso");
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      } else {
        alert("Erro ao deletar o tema.");
      }
    }

    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/temas");
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: "url('https://i.imgur.com/tUSRgga.jpeg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="container w-1/3 mx-auto bg-[#20571e88] p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl text-white text-center font-bold mb-4">Deletar tema</h1>
        <p className="text-center text-white font-semibold mb-4">
          Você tem certeza de que deseja apagar o tema a seguir?
        </p>
        <div className="border flex flex-col rounded-2xl overflow-hidden justify-between bg-green-800">
          <header className="py-2 px-6 bg-[#20571e88] text-white font-bold text-2xl">
            Tema
          </header>
          <p className="p-8 text-3xl bg-slate-200 h-full">{tema.descricao}</p>
          <div className="flex">
            <button
              className="w-full text-slate-50 bg-[#20571e88] hover:bg-violet-600 
                    flex items-center justify-center py-2"
              onClick={retornar}
            >
              Não
            </button>
            <button
              className=" text-slate-50 bg-[#20571e88] hover:bg-red-400 w-full py-2 font-semibold flex items-center justify-center"
              onClick={deletarTema}
            >
              {isLoading ? (
                <RotatingLines
                  strokeColor="white"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="24"
                  visible={true}
                />
              ) : (
                <span>Sim</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeletarTema;
