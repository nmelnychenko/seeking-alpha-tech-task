import React from "react";
import classNames from "classnames";

import styles from "./index.module.scss";

const TabsControlItem = ({controlLabel, isActive, onActionClick}) => (
  <li
    className={classNames(
      styles["tabs-controls-list__item"],
      isActive && styles["tabs-controls-list__item--active"]
    )}
  >
    <button
      className={styles["tabs-control"]}
      onClick={onActionClick}
    >
      {controlLabel}
    </button>
  </li>
);

export default TabsControlItem;