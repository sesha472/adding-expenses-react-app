import React,{useState} from 'react';
import Card from '../UI/Card';
import ExpenceFilter from './ExpenceFilter';
import Expenceitem from './Expenceitem';
import './Expences.css';

const Expences = (props) => {
  const [state, setstate] = useState("2021")
  const filterdchangehandler=filterdyear=>{
   setstate(filterdyear);
  }
    return (
        <Card className="expences">
          <ExpenceFilter  value={state}filteredyear={filterdchangehandler}/>
             {props.expencelist.map(item =>{
        return(
          <Expenceitem  key ={item.id} title={item.title} price={item.price} date={item.date} />
        )
      })}
            
        </Card>
    )
}

export default Expences
