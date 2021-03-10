import React from "react";
import classNames from "classnames";

import styles from "./index.module.scss";

const Checkbox = ({ name, label, isChecked = false, isDisabled = false, isLabelHidden = false, onCheckboxChange, mods = null }) => {
  return (
    <div className={classNames(styles["form-checkbox"], mods)}>
      <label className={styles["form-checkbox__label"]}>
        <input
          type="checkbox"
          name={name}
          checked={isChecked}
          disabled={isDisabled}
          onChange={onCheckboxChange}
          className={classNames(styles["form-checkbox__input"], "visually-hidden")}
        />
        <span className={styles["form-checkbox__shape"]} />
        <span className={classNames(isLabelHidden && "visually-hidden")}>{label}</span>
      </label>
    </div>
  )
}

export default Checkbox;