import React from 'react';
import Card from '../UI/Card';
import './ExpenceFilter.css';

const ExpenceFilter = (props) => {
    const dropdownchangehandler=(e)=>{
        props.filteredyear(e.target.value);
    }
    return (
        <Card className='expence_filter'>
            <div className="expence_filter_control">
            <label>filter by year</label>
            </div>

            <select value={props.value} onChange={dropdownchangehandler}>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
            </select>
            
        </Card>
    )
}

export default ExpenceFilter
