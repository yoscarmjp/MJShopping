"use client";

const Header = ({ setCurrentPage }) => {

    return(
        <><header className="bg-[#111113] flex flex-wrap justify-between px-14 items-center py-5">
            <button className="flex items-center gap-3" onClick={() => setCurrentPage('home')}>
                <img src="/images/MJLogo.png" className="w-16" />
                <h1 className="text-xl font-semibold text-white">MJShopping</h1>
            </button>
            <input type="text" placeholder="Buscar" className="border-[1px] border-black p-2 w-[40%] rounded-md" />
            <div className="flex flex-row gap-8 items-center text-white text-3xl">
                <a href=""><i className='bx bxs-cart-add'></i></a>
                <a href=""><i className='bx bxs-user-circle'></i></a>
            </div>
        </header>
        <div className="bg-[#19191B] text-white flex gap-8 p-2 px-12 font-medium text-lg ">
            <button onClick={() => setCurrentPage('offertsday')} className="hover:underline">Offers Day</button>
            <button className="hover:underline">Black Friday</button>
            <button className="hover:underline">Client Services</button>
            <button className="hover:underline">Deliver the same day</button>
            <button className="hover:underline">Second hand products</button>
        </div></>
    );
}

export default Header;