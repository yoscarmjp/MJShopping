"use client";

const Header = ({ setCurrentPage }) => {

    return(
        <><header className="bg-[#111113] flex flex-wrap justify-between px-14 items-center py-5">
            <script defer src="/js/menu.js"></script>

            <button className="flex items-center gap-3" onClick={() => setCurrentPage('home')}>
                <img src="/images/MJLogo.png" className="w-16" />
                <h1 className="text-xl font-semibold text-white">MJShopping</h1>
            </button>
            <input type="text" placeholder="Buscar" className="border-[1px] border-black p-2 w-[40%] rounded-md" />
            
            
            <div className="flex flex-row gap-8 items-center text-white text-3xl">
                <a href=""><i className='bx bxs-cart-add'></i></a>
                <div id="downMenu">
                    <a id="btnMenu" href=""><i className='bx bxs-user-circle'></i></a>
                    <div id="menu" className="hidden absolute right-12 z-30 flex flex-col top-16 bg-[#222325] gap-5 p-4 rounded-lg text-lg">
                        <button onClick={() => setCurrentPage('register')} 
                            className="hover:underline">Create your account</button>
                        <button onClick={() => setCurrentPage('login')}
                            className="hover:underline">Login your account</button>
                    </div>
                </div>
            </div>
        </header>

        <div className="bg-[#19191B] text-white flex gap-8 p-2 px-12 font-medium text-lg ">
            <button onClick={() => setCurrentPage('offertsday')} className="hover:underline">Offers Day</button>
            <button onClick={() => setCurrentPage('blackfriday')} className="hover:underline">Black Friday</button>
            <button className="hover:underline">Client Services</button>
            <button className="hover:underline">Deliver the same day</button>
            <button className="hover:underline">Second hand products</button>
        </div></>



    ); 
}

export default Header;