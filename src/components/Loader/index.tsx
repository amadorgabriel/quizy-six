import styles from './styles.module.scss';

export const Loader = () => {
  return (
    <div className={styles.container}>
      <span className={styles.circle}></span>
      <span className={styles.triangle}></span>
      <span className={styles.square}></span>
    </div>
  );
};
