import { ChangeEvent, useContext, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import Tema from "../../models/Tema";
import { atualizar, buscar, cadastrar } from "../../services/Service";

function FormTema() {

    const navigate = useNavigate();

    const [tema, setTema] = useState<Tema>({} as Tema)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado!')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setTema({
            ...tema,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate("/temas")
    }

    async function gerarNovoTema(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/temas`, tema, setTema, {
                    headers: { 'Authorization': token }
                })
                alert('O Tema foi atualizado com sucesso!')
            } catch (error: any) {
                if (error.toString().includes('401')) {
                    handleLogout();
                } else {
                    alert('Erro ao atualizar o tema.')
                }

            }
        } else {
            try {
                await cadastrar(`/temas`, tema, setTema, {
                    headers: { 'Authorization': token }
                })
                alert('O Tema foi cadastrado com sucesso!')
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout();
                } else {
                    alert('Erro ao cadastrar o tema.')
                }

            }
        }

        setIsLoading(false)
        retornar()
    }

    return (
        <div style={{
            backgroundImage: "url('https://i.imgur.com/dCVK6Od.jpeg')", 
            backgroundSize: "cover", 
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            minHeight: "100vh",
            width: "100%",
        }}>
            <div className="container flex flex-col items-center justify-center mx-auto">
                <br />
                <img
                    src="https://i.imgur.com/bUCIOXY.png"
                    alt="Logo Capivara tomando um chá feliz ao receber a sua postagem"
                    className="w-[100px] h-[100px]"
                />
                <h1 className="text-4xl text-center my-8">
                    {id === undefined ? '𝐂𝐚𝐝𝐚𝐬𝐭𝐫𝐚𝐫 𝐭𝐞𝐦𝐚' : 'Editar Tema'}
                </h1>

                <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoTema}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="descricao">𝖣𝖾𝗌𝖼𝗋𝖾𝗏𝖺 𝖺𝗊𝗎𝗂 𝗌𝖾𝗎 𝗍𝖾𝗆𝖺 </label>
                        <input
                            type="text"
                            placeholder="𝖣𝖾𝗌𝖼𝗋𝖾𝗏𝖺 𝖺𝗊𝗎𝗂 𝗌𝖾𝗎 𝗍𝖾𝗆𝖺"
                            name='descricao'
                            className="border-2 border-green-800 rounded p-2"
                            value={tema.descricao}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <br />
                    <button
                        className="rounded text-white  bg-[#619464]
                               hover:bg-pink-400 w-1/2 py-2 mx-auto flex justify-center"
                        type="submit">
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>

                        }
                    </button>
                </form>
            </div>
        </div>
    );
}

export default FormTema;