function Home() {
    return (
        <>
            <div style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                backgroundColor: "##eccaca",
                backgroundImage: "url('https://i.imgur.com/k7PsZdp.jpg')", 
                backgroundSize: "cover", 
                backgroundRepeat: "no-repeat", 
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}>
                <div>
                    <div style={{
                        width: "80vw",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",

                    }}>
                        <h2>Blog da Mich </h2>
                        <p>Meu nome é Michele e este é meu blog pessoal ฅ•ω•ฅ </p>
                    </div>

                    <div style={{
                        width: "80vw",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                        <img
                            src="https://scontent.fcgh8-1.fna.fbcdn.net/v/t39.30808-6/463178058_3756067721313224_6550487824077408896_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEejIAd6LhcR47S_xDVGd9eJCOHgyu7K5YkI4eDK7srlqpai0IjuFshHug0eaJoxla5ddJY9Cqk91hzOPKZIRQw&_nc_ohc=iM27yYKjKPIQ7kNvgHZP4N9&_nc_oc=AdjD3RbAQsbnIKqEfltMKY2Tfavfq8vzG6XR5WUyfVs_q2muCy1dE0dXKffXPvuPlzN9d3ARmNiMgrLmR8ICcmmF&_nc_zt=23&_nc_ht=scontent.fcgh8-1.fna&_nc_gid=AeUA6PTKzuD1aIgL70yGJc_&oh=00_AYDI6w5nCeWVmBT473M54er_HROQV2AdKyl6_fBUSqtrdQ&oe=678D99D7"
                            alt="Imagem da Página Home"
                            width="400px"
                        />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home