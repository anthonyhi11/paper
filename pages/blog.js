import React, { useEffect, useState } from 'react';
import Toolbar from '../components/Toolbar/Toolbar';
import { getBlogs } from '../actions/blog-actions';
import BlogCard from '../components/BlogCard/BlogCard';

export default function Blog() {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		// set blogs from database
		getBlogs().then((data) => {
			setBlogs(data);
		});
	}, []);

	let blogList = blogs?.map((blog, i) => {
		return (
			<li>
				<BlogCard blog={blog} id={i} key={i} />
			</li>
		);
	});

	return (
		<>
			<Toolbar />
			<h1>Blog</h1>
			<ul>{blogList}</ul>
		</>
	);
}
