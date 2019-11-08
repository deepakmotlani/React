import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import calculatorActionCreator from '../action-creators/calculation-action-creators';

class Calculator extends Component{
	render(){
		console.log(this.props);
		let {state, add, subtract, multiply, divide} = this.props;
		return (
			<div className="component float-right">
				<h1>Calculator</h1>
				<hr/>
				<input type="number" ref="number1"/>
				<input type="button" className="button" value="Add" 
					onClick={() => add(parseInt(this.refs.number1.value, 10))}/>
				<input type="button" className="button" value="Subtract" 
					onClick={() => subtract(parseInt(this.refs.number1.value, 10))}/>
				<input type="button" className="button" value="Multiply" 
					onClick={() => multiply(parseInt(this.refs.number1.value, 10))}/>
				<input type="button" className="button" value="Divide" 
					onClick={() => divide(parseInt(this.refs.number1.value, 10))}/>
				<div className="divResult">Result: {state}</div>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		state: state.calculator
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(calculatorActionCreator, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);