export default function HeroBanner(){
    return(
        <>
        
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage:
                "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
            }}
        >
            
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral text-center">
                <div>
                    <p className="mb-2 text-white"> Bonjour ! Je suis Louise</p>
                    <h1 className="mb-5 text-8xl w-full font-bold text-lime-100">Fullstack developper</h1>
                    <h2 className="mb-5 text-8xl w-full font-bold text-lime-100">Ux & Ui designer</h2>
                    {/* <button className="btn btn-primary">bouton</button> */}
                    <div className="badge badge-outline px-2 py-3 text-pink-200">aight</div>
                </div>
            </div>
        </div>
        </>
    )
}