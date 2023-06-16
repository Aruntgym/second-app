import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
const data = [
{
  productImage : "https://m.media-amazon.com/images/I/61imYpK33qL._SX679_.jpg",
  productName : "Samsung Galaxy S23 Ultra 5G",
  productColor: "Phantom Black, 12GB, 256GB Storage",
  productRating : 4.5,
  productPrice : "1,24,999",

},
{
  productImage : "https://m-cdn.phonearena.com/images/article/142376-wide-two_1200/iPhone-14-Pro-and-iPhone-14-Pro-Max-are-here-taking-the-Pro-to-the-Max.jpg",
  productName : "Apple Iphone 14 Max",
  productColor : "Gray, 256GB Storage",
  productRating : 4.8 ,
  productPrice : "1,39,900",

},
{
  productImage : "https://m.media-amazon.com/images/I/61amb0CfMGL._SL1500_.jpg",
  productName : "OnePlus 11 5G",
  productColor : "Eternal Green, 8GB RAM, 128GB Storage",
  productRating : 4.3,
  productPrice : "39,999",

},
{
  productImage : "https://m.media-amazon.com/images/I/61k7BDoL7dL._SX679_.jpg",
  productName : "Tecno Phantom X2 5G",
  productColor : "Moonlight Silver, 8GB RAM,256GB Storage",
  productRating : 3.9,
  productPrice : "39,999",

},
{
  productImage : "https://m.media-amazon.com/images/I/71zfaYItN8L._SL1500_.jpg",
  productName : "Nokia C12 Android 12",
  productColor : "Black color, 4GB RAM,64GB Storage",
  productRating : 3.5,
  productPrice : "4,000",

},
{
  productImage : "https://m.media-amazon.com/images/I/814ePfNubRL._SL1500_.jpg",
  productName : "Samsung Galaxy M04",
  productColor : "Sea Glass Green, 4GB RAM, 32GB Storage",
  productRating : 4.5,
  productPrice : "9,499",

},
{
  productImage : "https://m.media-amazon.com/images/I/8104evx11QL._SL1500_.jpg",
  productName : "Oppo A78 5G",
  productColor : "Glowing Blue, 8GB RAM, 128 Storage",
  productRating : 4.2,
  productPrice : "18,999",

},
{
  productImage : "https://m.media-amazon.com/images/I/61y8jlVb0wL._SL1200_.jpg",
  productName : "Vivo Y56 5G",
  productColor : "Orange Shimmer, 8GB RAM, 128GB Storage",
  productRating : 4.7,
  productPrice : "19,999",

},
]

function App() {
const [cartCount, setCartCount] = useState(0);
  return (
    <div className="App">
      <div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Shop</a></li>
          </ul>
        </nav>
      </div>
      <div>
        <h1 className='cart'>Cart {cartCount}</h1>
        <div className='hand'>
          <h1>Shop in style</h1>
          <div><p><span>with this shop hompeage template</span></p></div>
        </div>
      </div>
      <div className='products'>
       {data.map((prod, idx)=>(
        <ProductCard
        key={idx}
        productImage={prod.productImage}
        productName={prod.productName}
        productRating={prod.productRating}
        productPrice={prod.productPrice}
        cartCount={cartCount}
        setCartCount={setCartCount}
        />
       ))}
      </div>
    </div>
  );
}

export default App;

function ProductCard({productImage, productName, productColor, productRating, productPrice, cartCount, setCartCount }){
const [show, setShow] = useState(true)

  let handleAddToCart =()=>{
    setShow(!show)
    setCartCount(cartCount+1)
  }
  let handleRemoveCart =()=>{
    setShow(!show)
    setCartCount(cartCount-1)
  }

  return(
    <div className="card">
      <img
      src={productImage}
      alt="productimage"
      />
   <div>
    <h3>{productName}</h3>
    <h4>{productColor}</h4>
    <h3>Rating {productRating}</h3>
    <p>Rs.{productPrice}</p>
   </div>
   {show ?
   <button onClick={handleAddToCart}>Add to cart</button>
  :
  <button onClick={handleRemoveCart}>Remove cart</button>}
   </div>
  );
}