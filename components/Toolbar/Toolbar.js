import React from 'react';
import Link from 'next/link';
import LinkTree from '../LinkTree/LinkTree';

export default function Toolbar() {
	return (
		<header className='toolbarContainer'>
			<Link href='/'>
				<h1 className='headerLogo'>paper, by anthony</h1>
			</Link>
			<LinkTree />
		</header>
	);
}
