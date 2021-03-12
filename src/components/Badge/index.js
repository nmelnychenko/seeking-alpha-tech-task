import React from "react";
import classNames from "classnames";

import styles from "./index.module.scss";

const Badge = ({ content, mod, className = "" }) => (
  <span className={classNames(styles.badge, mod && styles[`badge--${mod}`], className)}>
    {content}
  </span>
)

export default Badge;