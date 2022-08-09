import { Header } from "./layers/Header/Header";
import { Banner } from "./layers/Banner/Banner";
import { Certificate } from "./layers/Certificate/Certificate";
import { Products } from "./layers/Products/Products";
import { Design } from "./layers/Design/Design";
import { Request } from "./layers/Request/Request";
import { Footer } from "./layers/Footer/Footer";
import "./App.css";
import { Button } from "./Components/Button";
import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {
  
  AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


  return (
    
    <>
      <Header />
      <Banner />
      <Certificate />
      <div className="wrapper">
        <Products />
        <Design />
        <div className="lets" data-aos="fade-up" >
          <h4 className="lets__title">Let`s get to it</h4>
          <div className="lets__btns" data-aos="fade-up">
            <Button color="blue">Start your design</Button>
            <Button color="white">Browse all products</Button>
          </div>
        </div>
        <Request />
      </div>
      <Footer/>
    </>
  );
}

export default App;
