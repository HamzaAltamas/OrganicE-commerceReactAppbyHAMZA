import React from  "react";
import { useState,useEffect } from "react";





export class CountdownClock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        useDatePicker:false,
        deadline: '31,December '+new Date().getFullYear(),
        newDeadline: '',
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
      
          this.checkDatePicker = this.checkDatePicker.bind(this);
  
    }
  
    checkDatePicker(event){
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      this.setState({
        useDatePicker: value
      })
    }
    componentWillMount() {
      this.getTimeUntil(this.state.deadline);
    }
  
    componentDidMount() {
      setInterval(() => this.getTimeUntil(this.state.deadline), 1000);
    }
  
    leadingZero(num) {
      return num < 10 ? '0' + num : num;
    }
  
    getTimeUntil(deadline) {
      const totalTime = Date.parse(deadline) - Date.parse(new Date());
      const seconds = Math.floor((totalTime / 1000) % 60);
      const minutes = Math.floor((totalTime / 1000 / 60) % 60);
      const hours = Math.floor((totalTime / (1000 * 60 * 60)) % 24);
      const days = Math.floor(totalTime / (1000 * 60 * 60 * 24));
      this.setState({
        days,
        hours,
        minutes,
        seconds
      });
    }
  
    changeDeadline() {
      console.log('state', this.state);
      this.setState({
        deadline: this.state.newDeadline
      });
    }
    render() {
      var x = this.state.deadline;
      var y = new Date(Date.parse(x)).getMonth();
      var w = new Date(Date.parse(x)).getDate();
      var z = new Date(Date.parse(x)).getFullYear();
  
      var monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ];
  
      return (
        <div className="col-lg-8 mt-5">
        <div className="row count_down">
            <div className="col d-flex flex-column align-items-center">
                <h2 className="demo">{this.leadingZero(this.state.days)} </h2>
                <h6>Days</h6>
            </div>
            <div className="col d-flex flex-column align-items-center">
                <h2 className="demo1">{this.leadingZero(this.state.hours)}</h2>
                <h6>Hours</h6>
            </div>
            <div className="col d-flex flex-column align-items-center">
                <h2 className="demo2">{this.leadingZero(this.state.minutes)} </h2>
                <h6>Minutes</h6>
            </div>
            <div className="col d-flex flex-column align-items-center">
                <h2 className="demo3">{this.leadingZero(this.state.seconds)} </h2>
                <h6>Seconds</h6>
            </div>
        </div>
     </div>
      );
    }
  }


// flash deal count down start


export class FlashDealCountDownClock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        useDatePicker:false,
        deadline: '31,June '+new Date().getFullYear(),
        newDeadline: '',
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
      
          this.checkDatePicker = this.checkDatePicker.bind(this);
  
    }
  
    checkDatePicker(event){
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      this.setState({
        useDatePicker: value
      })
    }
    componentWillMount() {
      this.getTimeUntil(this.state.deadline);
    }
  
    componentDidMount() {
      setInterval(() => this.getTimeUntil(this.state.deadline), 1000);
    }
  
    leadingZero(num) {
      return num < 10 ? '0' + num : num;
    }
  
    getTimeUntil(deadline) {
      const totalTime = Date.parse(deadline) - Date.parse(new Date());
      const seconds = Math.floor((totalTime / 1000) % 60);
      const minutes = Math.floor((totalTime / 1000 / 60) % 60);
      const hours = Math.floor((totalTime / (1000 * 60 * 60)) % 24);
      const days = Math.floor(totalTime / (1000 * 60 * 60 * 24));
      this.setState({
        days,
        hours,
        minutes,
        seconds
      });
    }
  
    changeDeadline() {
      console.log('state', this.state);
      this.setState({
        deadline: this.state.newDeadline
      });
    }
    render() {
      var x = this.state.deadline;
      var y = new Date(Date.parse(x)).getMonth();
      var w = new Date(Date.parse(x)).getDate();
      var z = new Date(Date.parse(x)).getFullYear();
  
      var monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ];
  
      return (
       <>
         <ul className="d-flex Flash-deal-countDown_box">
            <li style={{marginLeft:"-10px"}} id="firstul"><span>{this.leadingZero(this.state.days)} </span><span>Days</span></li>
            <li><span>{this.leadingZero(this.state.hours)}</span><span>Hours</span></li>
            <li><span>{this.leadingZero(this.state.minutes)}</span><span>Minutes</span></li>
            <li><span>{this.leadingZero(this.state.seconds)} </span><span>Seconds</span></li>
            
         </ul>
       </>
      );
    }
  }
// flash deal count down end

// deal of week start
export class DealofWeekCountDownClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      useDatePicker:false,
      deadline: '31,June '+new Date().getFullYear(),
      newDeadline: '',
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
    
        this.checkDatePicker = this.checkDatePicker.bind(this);

  }

  checkDatePicker(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      useDatePicker: value
    })
  }
  componentWillMount() {
    this.getTimeUntil(this.state.deadline);
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.state.deadline), 1000);
  }

  leadingZero(num) {
    return num < 10 ? '0' + num : num;
  }

  getTimeUntil(deadline) {
    const totalTime = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((totalTime / 1000) % 60);
    const minutes = Math.floor((totalTime / 1000 / 60) % 60);
    const hours = Math.floor((totalTime / (1000 * 60 * 60)) % 24);
    const days = Math.floor(totalTime / (1000 * 60 * 60 * 24));
    this.setState({
      days,
      hours,
      minutes,
      seconds
    });
  }

  changeDeadline() {
    console.log('state', this.state);
    this.setState({
      deadline: this.state.newDeadline
    });
  }
  render() {
    var x = this.state.deadline;
    var y = new Date(Date.parse(x)).getMonth();
    var w = new Date(Date.parse(x)).getDate();
    var z = new Date(Date.parse(x)).getFullYear();

    var monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];

    return (
     <>
       <ul  className="d-flex Flash-deal-countDown_box justify-content-end">
          <li className="orange_clock" style={{marginLeft:"-10px"}} id="firstul"><span>{this.leadingZero(this.state.days)} </span><span>Days</span></li>
          <li className="ash_clock"><span>{this.leadingZero(this.state.hours)}</span><span>Hours</span></li>
          <li className="orange_clock"><span>{this.leadingZero(this.state.minutes)}</span><span>Minutes</span></li>
          <li className="ash_clock"><span>{this.leadingZero(this.state.seconds)} </span><span>Seconds</span></li>
          
       </ul>
     </>
    );
  }
}
// deal of week end



// //////////////////////////////////////////////////////////////////////////////////////////////////////

                //    Hamza Altamas

// //////////////////////////////////////////////////////////////////////////////////////////////////////