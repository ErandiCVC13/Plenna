import Typography from "../Typography";
import styles from "./Card.module.css";

const Card = ({ title, secondaryText }) => {
  return (
    <div className={styles.card}>
      <Typography variant="h6" color="primary">
        {title} :
      </Typography>
      <hr />
      <Typography color="dark">{secondaryText}</Typography>
    </div>
  );
};

export default Card;
