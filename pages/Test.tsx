import { GetServerSideProps, GetStaticProps } from "next";
import Head from 'next/head';
import client from "../contentfull/index";


export default function Test
({ title, home }: { title: string, home: any}) {

	return (
		<div>
			<Head>
				<title>
					{title}
				</title>
			</Head>

			<main>
				<div>
					{home}
				</div>
			</main>
		</div>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const home = await client.getEntries({
		content_type: 'home'
	})


	return {
		props: {
			title: 'Static title',
			home,
		},
		revalidate: 1600
		
	}
}