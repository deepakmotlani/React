function createStore(reducer) {
	let _reducer = reducer;
	let _changeListeners = [];
	let _currentState = reducer(undefined, 'INIT');
	
	function subscribe(_changeListener) {
		_changeListeners.push(_changeListener);
	}
	
	function getState() {
		return _currentState;
	}
	
	function dispatch(action){
		const state = _reducer(_currentState, action);
		if(state === _currentState) return;
		_currentState = state;
		render();
	}
	
	function render() {
		_changeListeners.forEach(_changeListener => {
			if (typeof _changeListener === 'function')
				_changeListener();
		});
	}
	
	return {
		getState,
		dispatch,
		subscribe
	};
}