import "./Certificate.css"
import Shopify from "./shopify.png"
import Amazon from "./amazon certified.png"
import Eco from "./Eco friendly.png"
export function Certificate(props) {
    return (
      <section className="certificate" >
        <article className="certificate__row">
            <div className="certificate__item" data-aos="fade-up" data-aos-duration="2000">
            <img src={Shopify} alt="" srcset="" />
            <p className="certificate__text">Shopify Integrated</p>
            </div>
            <div className="certificate__item"data-aos="fade-up" data-aos-duration="2000">
            <img src={Amazon} alt="" srcset="" />
            <p className="certificate__text">Amazon Certified</p>
            </div>
            <div className="certificate__item" data-aos="fade-up" data-aos-duration="2000">
            <img src={Eco} alt="" srcset="" />
            <p className="certificate__text">Eco-Friendly</p>
            </div>
        </article>
      </section>
    );}
       