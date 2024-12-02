import SSlider from '../components/Slider'
import ProductList from '../components/Products/BoxProduct';

function Home(){
    return(
        <div>
            
            <SSlider/>
            <div className='py-11'>
                <h1 className='text-4xl px-24 font-bold'>Featured Products</h1>
                <ProductList/>
            </div>

        </div>
    );
}

export default Home;