import styles from './JobOrder.module.scss'
import './JobOrder.module.scss'
export default function JobOrder() {
  return (
    <div className={styles.card}>
      <img
        className={styles.card__background}
        src="https://i.imgur.com/QYWAcXk.jpeg"
        alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
        width="1920"
        height="2193"
      />
      <div className={styles.card__content}>
        <h2 className={styles.card__title}>Dental Appointment System</h2>
        <p className={styles.card__description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
          labore laudantium deserunt fugiat numquam.
        </p>
        <button className={styles.card__button}>Read more</button>
      </div>
    </div>
  );
}