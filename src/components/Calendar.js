import React, { Component } from 'react';
import './Calendar.css';

class Calendar extends Component {
    state = {
        dayName: undefined,
        month: undefined,
        dayNumber: undefined,
        year: undefined
        
    }    
    componentDidMount(){
        // get current date
        let now = new Date().toString().substring(0,15);
        

        let dayName = now.substring(0,3);
        let month = now.substring(4,7);
        let dayNumber = now.substring(8,10);
        let year = now.substring(11,15);
        console.log(dayName, month, dayNumber, year);
        this.setState({
            dayName: dayName,
            month: month,
            dayNumber: dayNumber,
            year: year
        });

    }

    render(){
        return(
            <div className="calendar">
                <span>{this.state.month}</span>
                <span>{this.state.dayNumber}</span>
                <span>{this.state.dayName}</span>
                
                
            </div>
        )
    }
}

export default Calendar;
