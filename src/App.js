import './App.css';
import React,{useState} from 'react';
import Expences from './components/EXPENCES/Expences';
import Newexpences from './components/Newexpences/Newexpences';

const listdata=[
    {title:"car1 insurence",price:"$210",date:new Date(2021,1,9),id:1},
    {title:"car2 insurence",price:"$210",date:new Date('2022-2-9'),id:2},
    {title:"ca3 insurence",price:"$210",date:new Date(2021-3-9),id:3},
    {title:"car4 insurence",price:"$210",date:new Date(1909-4-9),id:4},
    {title:"car5 insurence",price:"$210",date:new Date(2021,5,9),id:5},
    {title:"car6 insurence",price:"$220",date:new Date(2022,6,10),id:6},
    {title:"car7 insurence",price:"$230",date:new Date(2023,7,9),id:7},
    {title:"car8 insurence",price:"$240",date:new Date(2024,8,9),id:8},
  ];
function App() {
  
  
  const [expencelist, setexpencelist] = useState(listdata);

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
   
       
    setexpencelist( prevstate=>{
        return  [expense,...prevstate] 
      });
    console.log(expencelist);
  };

  return (
    <div className="App">
      <Newexpences onAddExpense = {addExpenseHandler}/>
      <Expences expencelist={expencelist} />
     
      
    </div>
  );
}

export default App;
