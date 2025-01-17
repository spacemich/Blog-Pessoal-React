function Home() {
    return (
        <>
            <div className="w-screen flex justify-center text-green-500 font-sans">
                <div>
                    <div className="p-6 bg-black shadow-lg">
                        <h2 className="font-bold font-serif text-pink-400 text-4xl">Blog da Mich</h2>
                        <br />
                        <p> Conte-me um fato curioso </p>
                        <p>ฅ•ω•ฅ</p>
                        <br />
                        <button className=" px-7 py-0 -m-2 bg-purple-700 text-white rounded-lg shadow-lg hover:bg-purple-700 hover:shadow-xl transition duration-23">
                            Faça sua postagem
                        </button>
                    </div>

                    <div className="max-w-7xl flex flex-col items-center">
                        <img
                            src="https://i.imgur.com/1RC7VHu.jpeg"
                            alt="Imagem da Página Home, uma flor colorida, simbolizando leveza."
                            width="500px"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home