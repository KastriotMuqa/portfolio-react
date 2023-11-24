import Heading from "../../Components/Heading";
import styles from "./styles.module.css";


function About() {
	return (
		<section id="about">
			<Heading index="" heading="About Me" />
			<div className={styles.container}>
				<div className={styles.left}>
					<p className={styles.desc}>
						I have studied Computer Sciences and Engineering at University for Business and Technology in Pristina.
				
					</p>
					<p className={styles.desc}>
					
						Also I I am certified Cyber Unity - Advanced Cyber Security Program at ICK in Pristina.
					</p>
					<p className={styles.desc}>
						Have done Software Developer Internship at Starlabs in Pristina in 2022.
					</p>
					<p>See my Projects in  <a href="https://github.com/KastriotMuqa"><h2>GitHub</h2></a> 
						</p>
				</div>
			
			</div>
		</section>
	);
}

export default About;