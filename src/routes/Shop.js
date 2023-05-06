import React from "react";
import { useState, useEffect } from "react";
import { FaShoppingCart } from 'react-icons/fa'

function Products() {

    const [products, setProducts] =useState([]);
    const [cart, setCart] = useState([]);

    function getProducts() {
        fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setProducts(data);
        })
    }

    useEffect(()=>{
        getProducts();
    }, [])



    function addToCart(product) {
        setCart([...cart, product]);
    };

    return (
        <div>
            <div className="main-wrapper">
                <div className="sidebar">
                    <div>
                        <FaShoppingCart size={32}/>
                        <p className="badge">{cart.length}</p>
                    </div>
                    <div>
                        <ul>
                            {cart.map(item => (  
                                <li>
                                    <span>{item.name}</span>
                                    <span>${item.price}</span>
                                    <hr/>
                                </li>
        
                            ))}
                        </ul>
                          <p className="total-price">Total: ${cart.reduce((a,c) => (parseFloat(a) + parseFloat(c.price)).toFixed(2),0)}</p>
                      
                        
                        <button onClick={() => alert('Thank you for your order!')} className="checkout">Checkout</button>
                       
                    </div>
                </div>
                <div className="products">
                    {products.map(product => (
                    <div className="product-card" key={product.id}>
                      <h4 className="product-name">{ product.name }</h4>
                        <img src={product.image_link} alt={product.name} />
                        <p className="product-price">${product.price}</p>
                        <p className="product-description">{product.product_type}</p>
                        <button className="add-to-cart" onClick={() => addToCart(product)}>Add to cart</button>
                    </div>
                    ))}
                </div>
            </div>
            </div>
    )
}

export default Products;