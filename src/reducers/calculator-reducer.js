function calculatorReducer(state = 0, action){
	switch(action.type){
		case 'ADD':
			return (state + action.value);
		case 'SUBTRACT':
			return (state - action.value);
		case 'MULTIPLY':
			return (state * action.value);
		case 'DIVIDE':
			return (state / action.value);
		default:
			return state;
	}
};

export default calculatorReducer;

