import React from 'react';

function Stats({bugList}){
	let openBugCount = bugList.filter(bug => bug.status).length;
	let totalBugCount = bugList.length;
	return (
		<section className="stats">
			<span className="closed">{totalBugCount - openBugCount}</span>
			<span> / </span>
			<span>{totalBugCount}</span>
		</section>
	)
}

export default Stats;