import React from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';

import styles from "./index.module.scss";

const Badge = ({ content, mod}) => (
  <span className={classNames(styles.badge, mod && styles[`badge--${mod}`])}>
    {content}
  </span>
);

Badge.propTypes = {
  content: PropTypes.string.isRequired,
  mod: PropTypes.string
}

export default Badge;