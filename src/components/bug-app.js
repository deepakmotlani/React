import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Stats from './bug-stats';
import EditBug from './bug-edit';
import ListBug from './bug-list';

import bugActionCreators from '../action-creators/bug-action-creators';
import './style.css';

function BugApp({addBug, bugs, removeClosed, toggleBug}){	
	return(
		<div className="component float-left">
			<h1>Bug Tracker</h1>
			<hr/>
			<Stats bugList={bugs} />
			<EditBug addBug={addBug}/>
			<ListBug bugList={bugs} removeClosed={removeClosed} toggleBug={toggleBug} />
		</div>
	);
}

function mapStateToProps(state){
	return {
		bugs: state.bugs
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(bugActionCreators, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(BugApp);