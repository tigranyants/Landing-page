import { Button } from "../../Components/Button";
import Korobki from "./korobki banner.jpg"
import "./Banner.css"
export function Banner() {
  return (
    <section className="banner" id="Start" >
      <article className="banner__left"  data-aos="fade-right" data-aos-duration="2000">
        <h1 className="banner__title" data-aos="fade-right" data-aos-duration="2000">
          Fast and easy custom boxes your customers will love
        </h1>
        <p className="banner__text" data-aos="fade-right" data-aos-duration="2000">
          Fastest turnaround. Best prices instantly. Dieline design help
          available.
        </p>
        <Button color="blue-big" data-aos="fade-right" data-aos-duration="2000">Start your design</Button>
      </article>
      <article className="banner__right" data-aos="fade-left" data-aos-duration="1000"> <img src={Korobki} alt=""/></article>
    </section>
  );
}
