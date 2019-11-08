import React from 'react';

class Posts extends React.Component {
	componentWillMount(){
		this.props.getPosts();
	}
	
	render() {
		return (
			<div>
				<h1>Posts</h1>
				{
					this.props.posts.map((post, index) => {
						return (
							<div key={index}>
								<span>{post.title} - {post.author}</span>
							</div>
						);
					})
				}
			</div>
		);
	}
};

export default Posts;