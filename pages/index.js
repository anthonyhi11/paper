import Head from 'next/head';
import Button from '../components/Button/Button';

export default function Home() {
	function sayHello() {
		fetch('/api/hello')
			.then((res) => res.json())
			.then((data) => alert(data.text));
	}

	return (
		<div>
			<Head>
				<title>paper, a site by anthony</title>
			</Head>
			<h1>paper</h1>

			<Button color='blue' text='Hey!' size='small' type='submit' click={sayHello} />
			<Button color='redText' text='Brah!' size='medium' click={() => alert('red BRAH')} />
			<Button color='blueText' text='hehe!' size='large' click={() => alert('booo')} />
			<Button color='red' text='jamie!' size='large' click={() => alert('jamie')} />
		</div>
	);
}
