import logo from "../images/logo.webp";
import logo2 from "../images/logo2.jpg";
import logo3 from "../images/logo3.jpg";
import { Carousel } from "react-bootstrap";
import { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";


function Filler() {
    const [products, setProducts] = useState([]);
   const [searchQuery, setSearchQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);

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


   const handleSearch = (e) => {
    const filtered = products.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()));
    console.log(e.target);
    setFilteredProducts(filtered);
    };



    return ( 
        <div>
          <div className="main-search-wrapper">
            <div className="search-input">
            <input className="search"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}><RiSearchLine/></button>
          </div>
       
          <br/> 
          <div className="product-div">
          {filteredProducts.map(product => (
            <div key={product.id}>
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </div>
          ))}
          </div>
          
        </div>
          <div>
            <Carousel fade>
              <Carousel.Item>
                <img
                  className="d-block w-80 p-5 h-80 m-auto"
                  src= {logo}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-80 p-5 h-80 m-auto"
                  src={logo2}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-80 p-5 h-80 m-auto"
                  src={logo3}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      );
}

export default Filler;
