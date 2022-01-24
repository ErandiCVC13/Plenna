import styles from "./Typography.module.css";
import PropTypes from "prop-types";

const variantsMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  small: "small",
};

const Typography = ({
  variant,
  font,
  color,
  children,
  customClass,
  weight,
  style = {},
}) => {
  const Component = variant ? variantsMapping[variant] : "p";
  const customStyles = weight ? { ...style, fontWeight: weight } : style;

  return (
    <Component
      className={`${customClass} ${styles.normalize} ${
        styles[`typography--variant-${variant}`]
      } ${styles[`typography--color-${color}`]} ${
        styles[`typography--family-${font}`]
      }`}
      style={customStyles}
    >
      {children}
    </Component>
  );
};

export default Typography;

Typography.propTypes = {
  variant: PropTypes.string,
  font: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node,
  customClass: PropTypes.string,
  style: PropTypes.object,
};
