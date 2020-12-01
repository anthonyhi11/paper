import React from 'react';

export default function BlogCard({ blog }) {
	const { title, subtitle, author, artist } = blog;

	return (
		<div className='blogCard-container'>
			<h2>
				{title}, by {artist}
			</h2>
			<h4>{subtitle}</h4>
			<p>Written by: {author}</p>
		</div>
	);
}
