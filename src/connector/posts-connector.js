import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Posts from '../components/posts';
import postActionCreators from '../action-creators/posts-action-creator';

function mapStateToProps(state){
	return {
		posts: state.posts
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(postActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);