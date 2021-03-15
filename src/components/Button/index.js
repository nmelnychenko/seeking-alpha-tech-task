import React from "react";
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from "./index.module.scss";

const Button = ({IconLeft, mods = [], children, onClick}) => {
  const modsClasses = mods.length ? mods.map(item => styles[`button--${item}`]) : null;

  return (
    <button className={classNames(styles.button, ...modsClasses)} onClick={onClick}>
      <span className={styles["button__inner"]}>
        {IconLeft && <span className={styles["button__icon"]}><IconLeft/></span>}
        <span className={styles["button__body"]}>{children}</span>
      </span>
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.element]).isRequired,
  mods: PropTypes.arrayOf(PropTypes.string),
  IconLeft: PropTypes.func,
  onClick: PropTypes.func
}

export default Button;