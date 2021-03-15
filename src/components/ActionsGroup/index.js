import React from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';

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

ActionsGroup.propTypes = {
  actionsGroup: PropTypes.arrayOf(
    PropTypes.shape({
      actionId: PropTypes.string.isRequired,
      ItemChildren: PropTypes.func.isRequired,
      dividerAfter: PropTypes.bool,
      mobileHidden: PropTypes.bool
    })
  )
}

export default ActionsGroup;