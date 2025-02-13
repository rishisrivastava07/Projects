import "./Card.css";
import { useState } from "react";

function Card({ id, image, info, price, name, removeTour}) {
  const [readMore, setReadMore] = useState(false);
  const description = readMore ? info : `${info.substring(0, 200)}....`;

  const toggleHandler = () => {
    // switch every time the handler called
    setReadMore(!readMore);
  };
 
  return (
    <div className="card">
      <img src={image} alt="" className="image" />
      <div className="tour-info">
        <div className="tour-details">
            <h4 className="tour-price">&#8377; {price}</h4>
            <h4 className="tour-name">{name}</h4>
        </div>
        <div className="tour-description">
            {description}
            <span className="read-more" onClick={toggleHandler}>
            {readMore ? `show less` : `read more`}
            </span>
        </div>
      </div>
      <button className="btn-red" onClick={() => removeTour(id)}>Not Interested</button>
    </div>
  );
}

export default Card;
