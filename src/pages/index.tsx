import { type NextPage } from "next"
import Head from "next/head"
import Calendar from "../components/Calendar"

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Restaurant Reservation</title>
				<meta
					name="description"
					content="Reserve a date to dine in a restaurant"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Calendar />
			</main>
		</>
	)
}

export default Home
