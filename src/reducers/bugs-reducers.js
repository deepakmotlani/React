function bugReducer(state = [], action){
	switch(action.type){
		case 'ADD_BUG':
			let bug = {name: action.value, status: true};
			return [...state, bug];
			
		case 'REMOVE_CLOSED':
			return state.filter(bug => bug.status);
			
		case 'TOGGLE_BUG':
			let tempState = [...state];
			tempState.forEach( bug => {
				if(bug === action.value){
					bug.status = !bug.status;
				}
			});
			return tempState;
		
		default:
			return state;
	}
}

export default bugReducer;