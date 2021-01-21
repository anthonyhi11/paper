// functions for consuming the api

function getBlogs() {
	return fetch('/api/blog').then((res) => res.json());
}

function addBlog(newBlog) {
	return fetch('/api/blog', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(newBlog)
	}).then((res) => res.json()
	);
}

export { getBlogs, addBlog };
