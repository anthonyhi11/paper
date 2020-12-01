import Head from 'next/head';
import Home from './home';

export default function Index() {

	return (
		<div>
			<Head>
				<title>paper, a site by anthony</title>
			</Head>
			<Home />
		</div>
	);
}
