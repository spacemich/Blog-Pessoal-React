import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    const data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-[#619464] text-black">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Blog Pessoal Generation | Copyright: {data}
                        </p>
                        <br />
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <br />
                    <div className='flex gap-2'>
                        <LinkedinLogo size={48} weight='bold' />
                        <InstagramLogo size={48} weight='bold' />
                        <FacebookLogo size={48} weight='bold' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer