import { useState } from "react";
 
function Card ({id,image,name,description,price,removetour}){
    const info =`${description.substring(0,200)}....`;
    const [readmore, setReadmore]= useState(false);
    function readmorehandler(){
        setReadmore(!readmore);

        
    }
    

    
    return(
        <div className="Card">
            <img src={image} className=""></img>
            <div className="tour-info">
                 <div className="tour-details">
            <h4 className="tour-price">{price}</h4>
            <h4 className="tour-name">{name}</h4>
        </div>
        <div className="tour-info">
            <div className="description">
                {description}
                <span className="readmore" onClick={readmorehandler}>{readmore ?`show less`: `read more`}</span></div>
        </div>
            </div>
       

<button className="btn-red" onClick={()=>removetour(id)}>  Not Interested</button>
        </div>
    );
}
export default Card;