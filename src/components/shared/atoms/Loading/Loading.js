import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.containerLogin}>
      <div className={styles.ldsRipple}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
