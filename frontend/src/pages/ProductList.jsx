import React from "react";

// Sample product data
const products = [
    { id: 1, name: "Product A", price: "$30", description: "This is Product A" },
    { id: 2, name: "Product B", price: "$50", description: "This is Product B" },
    { id: 3, name: "Product C", price: "$70", description: "This is Product C" },
];

const ProductList = () => {
    return (
        <div>
            <h1>Product Listing</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
