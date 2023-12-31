import styles from "./styles.module.css";


function Navbar(){
    return(
        <nav className={styles.nav_container}>
            <div className={styles.nav_left}>
                <a href="#home">Kastriot</a>
                </div>
            <div className={styles.nav_right}>
            <a href="#about" className={styles.nav_link}>
					About
				</a>
				
				<a href="#contact" className={styles.nav_link}>
					Contact
				</a>
				<button className={styles.nav_resume_btn}>Resume</button>
            </div>
        </nav>
    )
}
export default Navbar;