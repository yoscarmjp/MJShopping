import SSlider from '../components/Slider'
import ColumnProducts from '../components/Products/ListColumnBox';

function OffertsDay(){
    return(

        <div>
            <div className='flex justify-between px-10 py-3 border-b border-gray-500'>
                <p>1 a 4 de más de 10 resultados para "PC Gaming"</p>
                <p>Ordernar por</p>
            </div>

            <div className=''>
                <div className='absolute p-8'>

                    <h1 className="font-bold text-xl pt-5" >Brands:</h1>
                    <div className='text-lg flex gap-2'>
                        <input type="checkbox" name="Asus"/>
                        <label htmlFor="">Asus</label>
                    </div>
                    <div className='text-lg flex gap-2'>
                        <input type="checkbox" name="Acer"/>
                        <label htmlFor="">Acer</label>
                    </div>
                    <div className='text-lg flex gap-2'>
                        <input type="checkbox" name="Aorus"/>
                        <label htmlFor="">Aorus</label>
                    </div>
                    <div className='text-lg flex gap-2'>
                        <input type="checkbox" name="MSI"/>
                        <label htmlFor="">MSI</label>
                    </div>

                    <h1 className="font-bold text-xl pt-5" >Status:</h1>
                    <div className='text-lg flex gap-2'>
                        <input type="checkbox" name="New"/>
                        <label htmlFor="">New</label>
                    </div>
                    <div className='text-lg flex gap-2'>
                        <input type="checkbox" name="Used"/>
                        <label htmlFor="">Used</label>
                    </div>
                    <div className='text-lg flex gap-2'>
                        <input type="checkbox" name="Reconditioned"/>
                        <label htmlFor="">Reconditioned</label>
                    </div>

                    <h1 className="font-bold text-xl pt-5" >Shipment:</h1>
                    <div className='text-lg flex gap-2'>
                        <input type="checkbox" name="Nuevo"/>
                        <label htmlFor="">Free</label>
                    </div>
                    <div className='text-lg flex gap-2'>
                        <input type="checkbox" name="Nuevo"/>
                        <label htmlFor="">Express</label>
                    </div>

                    <h1 className="font-bold text-xl pt-5" >Price:</h1>
                    <div className='flex gap-4 flex-row'>
                        <input type="text" className='border-[1px] border-gray-500 p-1 w-[35%] rounded-lg' placeholder='Minimum' />
                        <input type="text" className='border-[1px] border-gray-500 p-1 w-[35%] rounded-lg' placeholder='Maximum' />
                    </div>

                </div>
                <ColumnProducts />
            </div>
        </div>
    );
}

export default OffertsDay;