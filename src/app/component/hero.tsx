import styles from './hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Welcome to Alevels with nauman</h1>
      <p className={styles.subtitle}>We make your alevels easier</p>
    </section>
  );
}
