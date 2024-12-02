import React, { useEffect, useState } from 'react';

function BoxProduct({ img, title, description, cost, beforeCost, discount }) {
    const hasDiscount = discount !== undefined && discount !== null && discount !== "";
    const hasbeforeCost = beforeCost !== undefined && beforeCost !== null && beforeCost !== "";

    return (
        <div className='w-80 h-96 bg-white border-[1px] rounded-xl flex flex-col shadow-2xl pl-4 relative overflow-hidden cursor-pointer'>
            {hasDiscount ? (
                <span className="bg-red-600 p-2 w-20 text-center rounded-3xl font-medium text-white absolute -right-2">{discount}%</span>
            ) : (
                <span></span>
            )}

            <img src={img} className='w-44 h-44 m-auto mt-6 mb-4' alt={title} />
            <h1 className='font-bold text-xl'>{title}</h1>
            <p className="text-gray-600">{description}</p>

            {hasbeforeCost ? (
                <p className="text-3xl font-semibold absolute bottom-4">${cost}<span className="text-gray-400 text-lg font-light relative ml-2 bottom-3 line-through">{beforeCost}$</span></p>
            ) : (
                <p className="text-3xl font-semibold">{cost}$</p>
            )}
        </div>
    );
}

function ProductList() {
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
        <div className="flex flex-wrap gap-4 justify-around pb-11 mt-9">
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

export default ProductList;