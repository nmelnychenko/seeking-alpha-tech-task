import React, { useState } from "react";
import classNames from "classnames";
import { formatNumbers } from "../../helpers/formatNumbers";

import styles from "./index.module.scss";

const RangeSlider = ({ min, max, defaultValue, label, isLabelHidden, stepsCount, onChangeCallback = () => {} }) => {
  const [value, setValue] = useState(defaultValue || min);

  const handleChange = ({ target }) => {
    const { value: newValue } = target;

    onChangeCallback(newValue);
    setValue(newValue);
  }

  return (
    <div className={styles["range-slider"]}>
      <div className={classNames(styles["range-slider__limit-value"], styles["range-slider__limit-value--left"])}>{formatNumbers(min)}</div>
      <label className={styles["range-slider__label"]}>
        <input
          className={styles["range-slider__input"]}
          type="range"
          min={min}
          max={max}
          value={value}
          step={(max - min) / stepsCount}
          onChange={handleChange}
        />
        <span className={classNames(isLabelHidden && "visually-hidden")}>
          {label}
        </span>
      </label>
      <div className={classNames(styles["range-slider__limit-value"], styles["range-slider__limit-value--right"])}>{formatNumbers(max)}</div>
    </div>
  )
}

export default RangeSlider;