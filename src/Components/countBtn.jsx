import React,{Component} from "react";



export class ClickerApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clicks: 0
		};		
		
	}
	incrementClicks = () => {
		this.setState({
			clicks: this.state.clicks + 1
		});
	}
	decrementClicks = () => {
		this.setState({
			clicks: this.state.clicks - 1
		});
	}
	render() {
		return (
			<div className="CountBtn">
      <i class="fa-solid fa-plus" onClick={this.incrementClicks}></i>
      <p>{this.state.clicks}&nbsp;kg</p>
      <i class="fa-solid fa-minus" onClick={this.decrementClicks}></i>
			</div>
		);
	}
}


// //////////////////////////////////////////////////////////////////////////////////////////////////////

                //    Hamza Altamas

// //////////////////////////////////////////////////////////////////////////////////////////////////////
