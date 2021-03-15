import React from "react";
import classNames from "classnames";

import styles from "./index.module.scss";

const ActionsGroup = ({ actionsGroup }) => {
  return (
    <ul className={styles["actions-group"]}>
      {actionsGroup.map(({ actionId, dividerAfter, mobileHidden, ItemChildren }) => (
        <li
          className={classNames(
            styles["actions-group__item"],
            dividerAfter && styles["actions-group__item--with-divider"],
            mobileHidden && styles["actions-group__item--only-desktop"]
          )}
          key={actionId}
        >
          <ItemChildren />
        </li>
      ))}
    </ul>
  )
}

export default ActionsGroup;