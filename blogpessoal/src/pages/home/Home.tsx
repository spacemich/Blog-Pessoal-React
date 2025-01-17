function Home() {
    return (
        <>
            <div
                className="min-h-screen bg-cover bg-center"
                style={{ backgroundImage: "url('https://i.imgur.com/k7PsZdp.jpeg')",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                 }}
            >
                <div className="h-[300px] bg-[#619464]  gap-1
                flex justify-center">
                    <div className="container grid grid-cols-2 text-black">
                        <div className="flex flex-col items-center justify-center py-4">
                            <h2 className="text-6xl font-bold">𓍢ִ໋🌷͙֒ 𝑩𝒍𝒐𝒈 𝒅𝒂 𝑴𝒊𝒄𝒉 𓍢ִ໋🌷͙֒ </h2>
                            <br />
                            <div className="flex items-center justify-between gap-2 text-2xl">
                                <br/>
                                
                                <p>𝑺𝒆𝒔𝒔𝒂̃𝒐 𝒅𝒆 𝒑𝒐𝒔𝒕𝒂𝒈𝒆𝒎:</p>
                                <p>Deixe aqui sua opnião! </p>
                            </div>
                            <br />
                            <div className="w- [120px] h-[200px]">
                                <br />
                                <div
                                    className="rounded text-white 
                                            border-pink-400 border-solid border-4 py-2 px-6 bg-pink-400 hover:bg-pink-700"
                                >
                                    Nova Postagem
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <img 
                                src="https://i.imgur.com/bUCIOXY.png"
                                alt="Logo Capivara tomando um chá feliz ao receber a sua postagem"
                                className="w-[400px] h-[400px]"
                                
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
