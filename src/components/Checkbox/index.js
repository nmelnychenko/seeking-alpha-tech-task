import React from "react";
import classNames from "classnames";

import styles from "./index.module.scss";

const Checkbox = ({ name, label, isChecked = false, isLabelHidden = false, onCheckboxChange }) => {
  return (
    <div className={styles["form-checkbox"]}>
      <label className={styles["form-checkbox__label"]}>
        <input
          type="checkbox"
          name={name}
          checked={isChecked}
          onChange={onCheckboxChange}
          className={styles["form-checkbox__input"]}
        />
        <span className={styles["form-checkbox__shape"]} />
        <span className={classNames(isLabelHidden && "visually-hidden")}>{label}</span>
      </label>
    </div>
  )
}

export default Checkbox;