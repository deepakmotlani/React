import * as postsRepository from '../repository/posts-repository';

let postsActionCreator = {
	getPosts: function() {
		return async function(dispatch){
			try{
				const data = await postsRepository.getPosts();
				dispatch({
					type: 'GET_POSTS',
					value: data
				});
			}
			catch(exception){
				console.log(exception);
			}
		}
	}
};

export default postsActionCreator;