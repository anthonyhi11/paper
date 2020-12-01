import React from 'react';
import Link from 'next/link';

export default function LinkTree() {
	return (
		<ul className='linktree'>
			<li>
				<Link href='/'>home</Link>
			</li>
			<li>
				<Link href='/about'>about</Link>
			</li>
			<li>
				<Link href='/blog'>blog</Link>
			</li>
			<li>
				<Link href='/jpicks'>j's picks</Link>
			</li>
		</ul>
	);
}
