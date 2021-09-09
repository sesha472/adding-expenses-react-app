import React,{useState} from 'react';
import './ExpenceForm.css';

const ExpenceForm = (props) => {
    const [enteredtitle, setenteredtitle] = useState('');
    const [enteredammount, setenteredammount] = useState('');
    const [entereddate, setentereddate] = useState('');

      const titlechangeHandler=(e)=>{
          setenteredtitle(e.target.value);
      }
      const ammountchangeHandler=(e)=>{
        setenteredammount(e.target.value);
      }
      const datechangeHandler=(e)=>{
          setentereddate(e.target.value);
      }

   const submitinputvalues=(event)=>{
    event.preventDefault();

         const expencedate={
           title:enteredtitle,
           price:enteredammount,
           date:new Date (entereddate),
       };
       props.onsaveinputdata(expencedate);
       setenteredtitle('');
       setenteredammount('');
       setentereddate(''); 
   }

    return (

        <div>
            <form  onSubmit={submitinputvalues}>
                <div className="formcontrols">

                <div className="inputlayout">
                <label> tittle</label>
                <input type="text" value={enteredtitle} onChange={titlechangeHandler}  />
                </div>

                <div className="inputlayout">
                <label> price</label>
                <input type="number"
                onChange={ammountchangeHandler}  />
                </div>

                <div className="inputlayout">
                <label> date</label>
                <input type="date"
                 min='2019-01-01' max="2022-12-31" 
                 onChange={datechangeHandler} />
                </div>
                </div>
                
                <div className="submitbutton">
                    <button type="submit">submit</button>
                </div>

            </form>
        </div>
    )
}

export default ExpenceForm
