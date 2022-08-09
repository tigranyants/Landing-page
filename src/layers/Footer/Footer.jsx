import "./Footer.css";
import { Button } from "../../Components/Button";
import Logo from "./Logo.png";
import Facebook from "./facebook.png";
import Instagram from "./instagram.png";
import Twitter from "./twitter.png";

export function Footer() {
  return (
    <footer className="footer" id="About" data-aos="fade-up">
        <div>
      <img src={Logo} alt="" />
        </div>
      <div className="footer__column1">
        <p className="footer__text">Custom Design</p>
        <p className="footer__text">All Products</p>
        <p className="footer__text">Inspiration</p>
        <p className="footer__text">Sustainability</p>
        <p className="footer__text">Affiliate Program</p>
        <p className="footer__text">Request Custom Quote</p>
        <p className="footer__text">Request Dieline</p>
      </div>
      <div className="footer__column2">
        <p className="footer__text">About Us</p>
        <p className="footer__text">Blog</p>
        <p className="footer__text">Partners</p>
        <p className="footer__text">Contact Us</p>
        <p className="footer__text">FAQ</p>
        <p className="footer__text">Terms & Conditions</p>
      </div>
      <div className="footer__column3">
        <p className="footer__text">Shopify App</p>
        <p className="footer__text">14 Day Free Shopify Trial</p>
        <p className="footer__text">BigCommerce</p>
        <div className="footer__links">
        <a href="https://www.facebook.com/"> <img src={Facebook} alt="" /></a>
        <a href="https://twitter.com/"> <img src={Twitter} alt="" /></a>
        <a href="https://instagram.com/"> <img src={Instagram} alt="" /></a>
        </div>
      </div>
      <div className="footer__column4">
        <p className="footer__text">Get exclusive offers and tips.</p>
        <input type="email" name="" id="" className="footer__input" placeholder="Your email:" />
        <Button color="blue">Join instantly</Button>
      </div>
    </footer>
  );
}
