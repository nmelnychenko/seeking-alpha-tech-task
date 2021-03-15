import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';

import TabsControlItem from "./tabsControlItem";

import styles from "./index.module.scss";

const Tabs = ({ items, panels }) => {
  const [visible, setVisible] = useState(0);

  const setActiveTab = index => setVisible(index);

  const VisibleTabPanel = () => {
    return panels.find((item, index) => visible === index);
  }

  return (
    <div className={styles["tabs-wrapper"]}>
      <ul className={classNames(styles["tabs-controls-list"], "row")}>
        {items.map((item, index) => (
          <TabsControlItem
            key={index}
            controlLabel={item}
            isActive={visible === index}
            onActionClick={() => setActiveTab(index)}
          />
        ))}
      </ul>
      <div className={classNames(styles["tabs-content"], "row")}>
        <VisibleTabPanel />
      </div>
    </div>
  )
}

Tabs.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  panels: PropTypes.arrayOf(PropTypes.any).isRequired
}

export default Tabs;