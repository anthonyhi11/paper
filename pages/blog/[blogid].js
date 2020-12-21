import React, { useEffect, useState } from 'react';
import { getBlogs } from '../../actions/blog-actions';
import { useRouter } from 'next/router';
import Markdown from 'react-markdown';

export default function BlogPage(props) {
	const router = useRouter();
	const [loading, setLoading] = useState(true);
	const id = router.query.blogid;
	const [blog, setBlog] = useState([]);

	useEffect(() => {
		getBlogs().then((data) => {
			setBlog(data[id]);
			if (blog !== undefined || blog?.length > 0) setLoading(false);
		});
	}, [id]);

	const markdownfile = blog?.body;

	return !loading || blog !== undefined ? (
		<div id='blogPage'>
			<h1>{blog?.title}</h1>
			<h3>by: {blog?.artist}</h3>
			<Markdown source={markdownfile} />
		</div>
	) : (
		<div></div>
	);
}
