import "./Products.css";
import { Button } from "../../Components/Button";
import Korobka1 from "./Korobka 1.png";
import Korobka2 from "./Korobka 2.png";
import Podushka from "./Podushka.png";
import Skotch from "./Skotch.png";
import Magnitiki from "./magnitiki.png";
import Rulon from "./rulon.png";

export function Products() {
  return (
    <section className="products" id="Products" data-aos="fade-up" >
      <div className="products__top" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="products__title" data-aos="fade-up" data-aos-duration="1000">Products you can customize</h2>
        <Button color="blue">Browse all products</Button>
      </div>

      <article className="products__up" data-aos="fade-up" data-aos-duration="1000">
        <div className="products__item">
          <img src={Korobka1} alt="" />
          <p className="item__subtitle">Custom Carton Boxes</p>
          <div className="item__description">
            <p className="description__text">
              Create a clean brand presentation with this custom carton box.
            </p>
            <p className="item__price">
              Starting at:<br></br>$10.44/unit
            </p>
          </div>
        </div>
        <div className="products__item">
          <img src={Korobka2} alt="" />
          <p className="item__subtitle">Custom Boxes</p>
          <div className="item__description">
            <p className="description__text">
              A stylish and strong corrugated cardboard box.
            </p>
            <p className="item__price">
              Starting at:<br></br>$10.44/unit
            </p>
          </div>
        </div>
        <div className="products__item">
          <img src={Podushka} alt="" />
          <p className="item__subtitle">Custom Poly Mailers</p>
          <div className="item__description">
            <p className="description__text">
              A fully custom high quality self sealing poly mailer.
            </p>
            <p className="item__price">
              Starting at:<br></br>$10.44/unit
            </p>
          </div>
        </div>
      </article>
      <article className="products__down" data-aos="fade-up" data-aos-duration="1000">
        <div className="products__item" >
          <img src={Skotch} alt="" />
          <p className="item__subtitle">Custom Tape</p>
          <div className="item__description">
            <p className="description__text">
              High quality custom tape to seal your shipping boxes during
              delivery.
            </p>
            <p className="item__price">
              Starting at:<br></br>$12.16/unit
            </p>
          </div>
        </div>
        <div className="products__item">
          <img src={Magnitiki} alt="" />
          <p className="item__subtitle">Custom Stickers</p>
          <div className="item__description">
            <p className="description__text">
              Add personality to your packages with custom stickers.
            </p>
            <p className="item__price">
              Starting at:<br></br>$0.41/unit
            </p>
          </div>
        </div>
        <div className="products__item">
          <img src={Rulon} alt="" />
          <p className="item__subtitle">Custom Tissue Paper</p>
          <div className="item__description">
            <p className="description__text">
              The perfect addition to branding your package.
            </p>
            <p className="item__price">
              Starting at:<br></br>$6.54/unit
            </p>
          </div>
        </div>
      </article>
      <div className="products__bottom" data-aos="fade-up" data-aos-duration="1000">
        <p className="bottom__text">Need unbranded stock items?</p>
        <Button color="white">Shop stock</Button>
      </div>
    </section>
  );
}
