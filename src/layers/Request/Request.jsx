import "./Request.css";
import RequestIl from "./request.png";
import Ipad from "./ipad.png";
import { Button } from "../../Components/Button";

export function Request() {
  return (
    <section className="request" id="Inspiration" data-aos="fade-up" >
      <article className="request__item__left" data-aos="fade-right" data-aos-duration="1000">
        <img src={RequestIl} alt=""  data-aos="fade-right" data-aos-duration="1000"/>
        <p className="request__title" data-aos="fade-right" data-aos-duration="1000">Couldn't find a size you need?</p>
        <p className="request__text" data-aos="fade-right" data-aos-duration="1000">
          We’ll work directly with you to create a fully branded packaging
          system.
        </p>
        <Button color="blue" data-aos="fade-up">Request a quote</Button>
      </article>
      <article className="request__item" data-aos="fade-left">
        <img src={Ipad} alt="" data-aos="fade-right" data-aos-duration="1000"/>
        <p className="request__title" data-aos="fade-left" data-aos-duration="1000">Need a free dieline template?</p>
        <p className="request__text" data-aos="fade-left"  data-aos-duration="1000">
          Let us know what size you need and we'll email an Adobe Illustrator
          dieline to you within 3-4 business days.
        </p>
        <Button color="white" data-aos="fade-up" >Request dieline</Button>
      </article>
    </section>
  );
}
