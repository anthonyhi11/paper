import React from 'react';
import Link from 'next/link';

export default function BlogCard({ blog, id }) {
	const { title, subtitle, author, artist } = blog;
	console.log(id);
	return (
		<Link href={`/blog/${id}`}>
			<div className='blogCard-container'>
				<h2>
					{title}, by {artist}
				</h2>
				<h4>{subtitle}</h4>
				<p>Written by: {author}</p>
			</div>
		</Link>
	);
}
