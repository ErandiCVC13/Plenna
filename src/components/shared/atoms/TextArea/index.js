import styles from "./TextArea.module.css";
import PropTypes from "prop-types";
import Typography from "../Typography";

const TextArea = ({ label, name, value, onChange }) => {
  return (
    <div className={styles.textAreaContainer}>
      <label htmlFor={label}>
        <Typography variant="h6" color="primary">
          {label}:
        </Typography>
      </label>
      <textarea
        id={label}
        name={name}
        value={value}
        className={styles.textArea}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default TextArea;
