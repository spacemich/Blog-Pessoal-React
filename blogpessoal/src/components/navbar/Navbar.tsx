function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			 bg-[#619464] text-black-700 font-bold'>
            <br />
            <br />
                <div className="container flex justify-between text-lg">
                    Blog Pessoal

                    <div className='flex gap-8'>
                        Postagens
                        Temas
                        Cadastrar tema
                        Perfil
                        Sair
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar