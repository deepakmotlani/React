function userReducer(state = [], action) {	
	switch(action.type){
		case 'ADD_USER':
			const product = new ProductData('Mobile', 10000);
			return [...state, product];
	}		
	return state;
}					
