import { useState, useEffect } from "react";
import styles from "./Select.module.css";
// import { ArrowSelectIcon } from "@assets/svg";

/**
 * Schema Params
 * @param  {String} customClass
 * @param  {String} options
 * @param  {String} defaultValue
 * @param  {String} name
 * @param  {Function} onClick
 * @param  {String} symbolLeft
 * @param  {String} symbolRight
 * @param  {String} fontSize
 * @param  {String} borderRadius
 * @param  {String} border
 * @param  {Function} onChange
 */

const Select = ({
  customClass,
  options,
  defaultValue,
  onChange,
  name,
  fontSize = "0.625rem",
  borderRadius,
  border,
  keyLabel = "label",
  keyValue = "value",
  height = "21.16px",
  hasResetState,
}) => {
  const [value, setValue] = useState(defaultValue ?? "");

  const onChangeSelect = (e) => {
    setValue(e.target.value);
    onChange && onChange(e.target.value);
  };

  // useEffect(() => {
  //   if (hasResetState) {
  //     setValue("");
  //   }

  //   if (defaultValue) {
  //     setValue(defaultValue);
  //   }
  // }, [hasResetState]);

  return (
    <div style={{ borderRadius, border }} className={styles.selectContainer}>
      <select
        name={name}
        value={value}
        onChange={onChangeSelect}
        className={styles.select}
      >
        {options.map((item, i) => (
          <option key={`${item[keyLabel]}_${i}`} value={item[keyValue]}>
            {item[keyLabel]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
