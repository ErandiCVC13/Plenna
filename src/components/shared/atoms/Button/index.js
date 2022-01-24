import styles from "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({
  onClick,
  children,
  variant,
  customClass,
  label,
  size,
  value,
  disabledClassName,
  disabled,
}) => {
  const handleButtonClick = (event) => {
    if (disabled) return;

    onClick && onClick(event);
  };

  const renderChildren = () => {
    if (label) {
      return label;
    }

    if (children) {
      return children;
    }

    return "Button";
  };

  const className = `${customClass} ${styles[size]} ${styles.button} ${
    styles[variant]
  } ${disabled && styles.disabled} ${disabled && disabledClassName}`;

  return (
    <button value={value} onClick={handleButtonClick} className={className}>
      {renderChildren()}
    </button>
  );
};

export default Button;

Button.propTypes = {
  customClass: PropTypes.string,
  disabledClassName: PropTypes.string,
  size: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.string,
  onClick: PropTypes.func,
};
