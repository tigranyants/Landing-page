

import Telejka from './telejka icon.png'
import Logo from './Logo.png'
import Zwezda from './zwezda.svg'
import "./Header.css";




export function Header(props) {

 

  return (
    <header className="header">
       <img src={Logo} alt="lol" srcset="" />
      
       <ul className="header__links">
        <li className="header__link"><img src={Zwezda} alt="" srcset="" /><a href="#Start">Start your design</a></li>
        <li className="header__link"><a href="#Products">All products</a></li>
        <li className="header__link"><a href="#Inspiration">Inspiration</a></li>
        <li className="header__link"><a href="#About">About</a></li>
       </ul> 
       
       <div className='account'>
            <span>Account</span>
            <img src={Telejka} alt="" />
       </div>
  
    </header>
  );
}
