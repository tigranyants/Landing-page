import "./Design.css";
import { Button } from "../../Components/Button";
import Design1 from "./design1.png";
import Design2 from "./design2.png";
import Design3 from "./design3.png";

export function Design() {
  return (
    <section className="design" data-aos="fade-up">
      <h3 className="design__title" data-aos="fade-up" data-aos-duration="1000">
        Fast and easy custom boxes your customers will love
      </h3>
      <article className="design__row">
        <div className="design__item" data-aos="fade-up" data-aos-duration="1000">
          <img src={Design1} alt="" data-aos="fade-up" data-aos-duration="2000" />
          <p className="item__title" data-aos="zoom-out-down" data-aos-duration="2000">You Order</p>
          <p className="item__text" data-aos="zoom-out-down" data-aos-duration="2000">Design and order boxes in a few clicks.</p>
        </div>
        <div className="design__item" data-aos="fade-up" data-aos-duration="1000">
          <img src={Design2} alt="" data-aos="fade-up" data-aos-duration="2000" />
          <p className="item__title" data-aos="zoom-out-down" data-aos-duration="2000">We Proof</p>
          <p className="item__text" data-aos="zoom-out-down" data-aos-duration="2000">Approve your designs before production.</p>
        </div>
        <div className="design__item" data-aos="fade-up" data-aos-duration="1000">
          <img src={Design3} alt="" data-aos="fade-up" data-aos-duration="2000" />
          <p className="item__title" data-aos="zoom-out-down" data-aos-duration="2000">We Print & Ship</p>
          <p className="item__text" data-aos="zoom-out-down" data-aos-duration="2000">Your order gets printed and shipped with tracking.</p>
        </div>
      </article>
      <Button color="blue" data-aos="fade-up" data-aos-duration="1000">Start your design</Button>
    </section>
  );
}
