import React from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';

import styles from "./index.module.scss";

const Checkbox = ({ name, label, isChecked = false, isDisabled = false, isLabelHidden = false, onCheckboxChange, mods = [] }) => {
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

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isLabelHidden: PropTypes.bool,
  onCheckboxChange: PropTypes.func,
  mods: PropTypes.arrayOf(PropTypes.string)
}

export default Checkbox;