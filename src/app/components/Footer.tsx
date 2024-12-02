function Footer(){
    return(
        <footer className="bg-[#111113] w-full py-11 px-6 bottom-0 flex justify-between text-base">
            <div className="flex items-center flex-col">
                <img src="/images/MJLogo.png" className="w-24"/>
                <p className="w-80 text-center text-white">
                    Find better quality products in a serious 
                    company that meets all the standards you 
                </p>
            </div>
            <div>
                <h1 className="font-semibold pb-1 text-white">OTHERS</h1>
                <ul className="text-white ml-1">
                    <li><a href="/">Tendencies</a></li>
                    <li><a href="/">Featured Products</a></li>
                    <li><a href="/">Your purchases</a></li>
                    <li><a href="/">Offers</a></li>
                </ul>
            </div>
            <div>
                <h1 className="font-semibold pb-1 text-white">COMPANY</h1>
                <ul className="text-white ml-1">
                    <li><a href="/">Terms and Conditions</a></li>
                    <li><a href="/">Our Team</a></li>
                    <li><a href="/">Services</a></li>
                </ul>
            </div>
            <div className="text-white text-center">
                <h1 className="text-xl font-bold">SUSCRIBE</h1>
                <p>Subscribe to get the latest updates</p>
                <form className="flex flex-col pt-4 gap-4">
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="p-3 rounded-lg w-[300px]"
                        required
                    />
                    <button className="bg-green-600 p-3 rounded-lg font-medium" type="submit">Send</button>
                </form>

            </div>
        </footer>
    );
}

export default Footer;