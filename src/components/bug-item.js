import React from 'react';

function BugItem({item, toggle}){			
	return(
		<li><span className={item.status ? "bugname" : "bugname closed"} 
				onClick={() => toggle(item)}>{item.name}</span></li>
	);			
}

export default BugItem;