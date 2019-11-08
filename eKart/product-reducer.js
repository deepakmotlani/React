function productReducer(state = [], action) {	
	switch(action.type){
		case 'ADD_PRODUCT':
			const product = new ProductData('Mobile', 10000);
			return [...state, product];
	}		
	return state;
}					
