let bugActionCreators = {			
	addBug: function(bugName){
		return {type: 'ADD_BUG', value: bugName};
	},
	removeClosed: function(){
		return {type: 'REMOVE_CLOSED'};
	},
	toggleBug: function(bug){
		return {type: 'TOGGLE_BUG', value: bug};
	}
};

export default bugActionCreators;