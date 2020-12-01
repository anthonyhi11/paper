import React, { useEffect, useState } from 'react';
import Toolbar from '../components/Toolbar/Toolbar';
import { getBlogs } from '../actions/blog-actions';
import Button from '../components/Button/Button';
import BlogCard from '../components/BlogCard/BlogCard';

export default function Blog() {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		// set blogs from database
		getBlogs().then((data) => {
			setBlogs(data);
		});
	}, []);

	let blogList = blogs?.map((blog) => {
		return (
			<li>
				<BlogCard blog={blog} />
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
