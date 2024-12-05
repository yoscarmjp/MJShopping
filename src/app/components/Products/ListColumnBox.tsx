import React, { useEffect, useState } from 'react';

function BoxProduct({ img, title, description, cost, beforeCost, discount }) {
    const hasDiscount = discount !== undefined && discount !== null && discount !== "";
    const hasbeforeCost = beforeCost !== undefined && beforeCost !== null && beforeCost !== "";

    return (
        <div className='h-56 w-[80%] bg-white rounded-xl flex flex-row items-center shadow-2xl relative overflow-hidden gap-5 px-10 cursor-pointer'>
            {hasDiscount ? (
                <span className="bg-red-600 p-2 w-20 text-center rounded-3xl font-medium text-white absolute -right-2 top-0">{discount}%</span>
            ) : (
                <span></span>
            )}

            <img src={img} className='w-44 h-44' alt={title} />
            <div>
                <h1 className='font-bold text-2xl absolute top-8'>{title}</h1>
                <p className="text-gray-600 w-[512px] text-lg absolute top-[60px]">{description}</p>
                {hasbeforeCost ? (
                    <p className="text-3xl font-semibold absolute top-32">${cost}<span className="text-gray-400 text-lg font-light relative ml-2 bottom-3 line-through">{beforeCost}$</span></p>
                ) : (
                    <p className="text-3xl font-semibold absolute top-32">{cost}$</p>
                )}
                <button className='absolute top-44 bg-green-700 p-2 w-32 rounded-lg hover:bg-green-900 transition-all duration-300 ease-in-out font-medium text-white'>Add to cart</button>
            </div>
        </div>
    );
}

function ColumnProducts() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/config/products.json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data', error));
    }, []);

    if (!data) {
        return <h1>Loading...</h1>;
    }
    return (
        <div className="flex flex-wrap gap-4 justify-end items-end flex-col pb-11 mt-9">
            {data.products.map((product, index) => (
                <BoxProduct
                    key={index}
                    img={product.img}
                    title={product.title}
                    description={product.description}
                    cost={product.cost}
                    beforeCost={product.beforeCost}
                    discount={product.discount}
                />
            ))}
        </div>
    );
}

export default ColumnProducts;