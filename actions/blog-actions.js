function getBlogs() {
	return fetch('/api/blog').then((res) => res.json());
}

export { getBlogs };
