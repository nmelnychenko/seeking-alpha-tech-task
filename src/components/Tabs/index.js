import React, { useState } from "react";
import classNames from "classnames";

import TabsControlItem from "./tabsControlItem";

import styles from "./index.module.scss";

const Tabs = ({ items }) => {
  const [visible, setVisible] = useState(0);

  const setActiveTab = id => setVisible(id);

  const findVisibleItem = () => items.find(({id}) => visible === id);

  const VisibleTabPanel = () => {
    return findVisibleItem().TabPanelChildren()
  }

  return (
    <div className={styles["tabs-wrapper"]}>
      <ul className={classNames(styles["tabs-controls-list"], "row")}>
        {items.map(({id, controlLabel}) => (
          <TabsControlItem
            key={id}
            controlLabel={controlLabel}
            isActive={visible === id}
            onActionClick={() => setActiveTab(id)}
          />
        ))}
      </ul>
      <div className={classNames(styles["tabs-content"], "row")}>
        <VisibleTabPanel />
      </div>
    </div>
  )
}

export default Tabs;