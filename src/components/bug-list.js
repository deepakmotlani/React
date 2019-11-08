import React from 'react';

import BugItem from './bug-item';

function ListBug({bugList, removeClosed, toggleBug}){
	var bugs = bugList.map(function(item, index){
		return <BugItem key={index} item={item} toggle={() => toggleBug(item)}/>;
	}, this);
	
	return(
		<section className="list">
			<ol>
				{bugs}
			</ol>
			<input type="button" value="Remove Closed" onClick={removeClosed}/>
		</section>
	)
};

export default ListBug;