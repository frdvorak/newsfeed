

import React, { Component } from 'react';

class Calendar extends Component {
    state = {
        date: undefined,
    }    
    componentDidMount(){
        // get current date
        let now = new Date().toString().substring(0,15);
        this.setState({date: now});
    }

    render(){
        return(
            <div className="calendar">
            {this.state.date}
            </div>
        )
    }
}

export default Calendar;
