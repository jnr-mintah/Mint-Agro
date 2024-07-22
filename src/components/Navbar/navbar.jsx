import './navbar.css'; 
import Agro from '../Navbar/Agro.png'
import Leaf from '../Navbar/images/leaf-solid.svg'
import Wheat from '../Navbar/images/wheat-awn-solid.svg';
import Cow from '../Navbar/images/cow-solid.svg';
import Plane from '../Navbar/images/plane-solid.svg';



function Navbar() {
    return (

        <>
                <div className="nav">
            <div className="nav-contents">
                <figure className='logo-fig'>
                    <img className='logo' src={Agro} alt="" />
                </figure>
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Shop</li>
                </ul>
            </div>
        </div>
        <div className="head">
            <h1>Welcome to the place where <br />natural flavour is born</h1>
            <hr />
            <div className="head-icons">
            <Icons/>

            </div>
        </div>
        </>

     
        
    );
}

function Icons() {

    const items = [
        { info: "Nutrient Testing", image: Leaf },
        { info: "Crop Care", image: Wheat },
        { info: "Livestock Management", image: Cow },
        { info: "Agri-Tourism", image: Plane }
    ];
    

    return (
        <div className="item-list">
            {items.map((item, index) => (
                <div key={index} className="item">
                    <img className='svg' src={item.image} alt={item.name} />
                    <p className='info'>{item.info}</p>
                </div>
            ))}
        </div>
    );

    
    
}

export default Navbar;
