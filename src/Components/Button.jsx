  
import './Button.css'

export function Button(props){

    function getClassName(){
     if(props.color === "blue-big"){
          return "blue-button-big";
     }
     if(props.color === "blue"){
          return "blue-button";
     }
     if(props.color === "white"){
          return "white-button";
     }
    }
    
    return(
          <button className={getClassName()}>{props.children}</button>
     );
}