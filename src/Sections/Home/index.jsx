import styles from "./styles.module.css";

function Home() {
	return (
		<section className={styles.home_section} id="home">
			<p className={styles.greet}>Hi, my name is</p>
			<h1 className={styles.heading_1}>Kastriot Muça.</h1>
			<h1 className={styles.heading_2}>Software Developer.</h1>
			
		</section>
	);
}

export default Home;