import React, { useEffect, useState } from 'react';
import Toolbar from '../components/Toolbar/Toolbar';
import { getBlogs } from '../actions/blog-actions';
import BlogCard from '../components/BlogCard/BlogCard';
import AddModal from '../components/Modals/AddModal/AddModal';

export default function Blog() {
	const [blogs, setBlogs] = useState([]);
	const [addModal, setAddModal] = useState(false);
	const [change, setChange] = useState(0);

	useEffect(() => {
		getBlogs().then((data) => {
			setBlogs(data);
		});
	}, [change]);

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
			<button onClick={() => setAddModal(true)}>Add New</button>
			<ul>{blogList}</ul>

			{addModal && <AddModal close={setAddModal} change={setChange} />}
		</>
	);
}
