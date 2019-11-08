import React, {Component} from 'react';

class EditBug extends Component{
	render(){
		return(
			<section className="edit">
				<label htmlFor="">Bug Name :</label>
				<input type="text" ref="bugName" />
				<input type="button" className="button" value="Add New" onClick={() => this.props.addBug(this.refs.bugName.value)}/>
			</section>
		)
	}
}

export default EditBug;