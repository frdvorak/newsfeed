import React, { Component } from 'react';
import './calendar.css';

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
        //console.log(now);
        let dayName = now.substring(0,3);
        if (dayName === 'Mon'){
            dayName = 'Monday';
        }if (dayName === 'Tue'){
            dayName = 'Tuesday';
        }if (dayName === 'Wed'){
            dayName = 'Wednesday';
        }if (dayName === 'Thu'){
            dayName = 'Thursday';
        }if (dayName === 'Fri'){
            dayName = 'Friday';
        }if (dayName === 'Sat'){
            dayName = 'Saturday';
        }if (dayName === 'Sun'){
            dayName = 'Sunday';
        }
        let month = now.substring(4,7);
        let dayNumber = now.substring(8,10);
        let year = now.substring(11,15);
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
