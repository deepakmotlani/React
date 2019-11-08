let calculatorActionCreator = {
	add: function(number){
		return {type: "ADD", value: number};
	},
	subtract: function(number){
		return {type: "SUBTRACT", value: number};
	},
	multiply: function(number){
		return {type: "MULTIPLY", value: number};
	},
	divide: function(number){
		return {type: "DIVIDE", value: number};
	}
};

export default calculatorActionCreator;