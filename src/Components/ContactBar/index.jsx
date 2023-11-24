import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from "./styles.module.css";


function ContactBar() {
	return (
		<div className={styles.contact_bar_wrapper}>
			<div className={styles.contact_bar}>
				<a href="https://www.linkedin.com/in/kastriot-mu%C3%A7a/" target="_blank" className={styles.icon} >
					<LinkedInIcon  />
				</a>
				<a href="https://github.com/KastriotMuqa" target="_blank" className={styles.icon} >
					<GitHubIcon  />
				</a>
				
				
				<div className={styles.line}></div>
			</div>
			<div className={styles.contact_bar}>
				<a href="mailto:kastriotmuqa45@gmail.com" className={styles.email}>
					<EmailIcon />
				</a>
				<div className={styles.line}></div>
			</div>
		</div>
	);
}

export default ContactBar;