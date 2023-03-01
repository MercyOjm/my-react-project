import { useState} from "react";


function Products() {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const res = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json');
        const data = await res.json();
        console.log(data);
        setProducts(data);
    }
    
}