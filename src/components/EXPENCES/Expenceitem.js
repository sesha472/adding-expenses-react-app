import React from 'react';
import Card from '../UI/Card';
import Expencedate from './Expencedate';
import "./Expenceitem.css";

const Expenceitem = (props) => {
   
return (
        <Card className="expenceitem">
       <Expencedate date={props.date}  />
            <div className="expenceitem-discription">
                <h2>{props.title}</h2>
                <div className="expenceitem-price"> ${props.price}</div>
            </div>
            
        </Card>
    );
  
}

export default Expenceitem
