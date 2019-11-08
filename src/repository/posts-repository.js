var fetch = require('node-fetch');

export function getPosts(){
	return fetch('http://localhost:3002/posts')
    .then(function(res) {
        return res.json();
    }).then(function(body) {		
        return (body);
    });
}