import React from "react";
import classNames from 'classnames';

import styles from "./index.module.scss";

const Button = ({IconLeft, mods, children, onClick}) => {
  const modsClasses = mods.map(item => styles[`button--${item}`]);

  return (
    <button className={classNames(styles.button, ...modsClasses)} onClick={onClick}>
      <span className={styles["button__inner"]}>
        {IconLeft && <span className={styles["button__icon"]}><IconLeft /></span>}
        <span className={styles["button__body"]}>{children}</span>
      </span>
    </button>
  )
}

export default Button;