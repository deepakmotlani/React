function combinedReducer(state, action) {				
	return {
		products: productReducer(state ? state.products : undefined, action),
		users: userReducer(state ? state.users : undefined, action)					
	};
};
