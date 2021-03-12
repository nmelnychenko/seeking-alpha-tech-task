import React, { useState, useEffect, useContext } from "react";

// Components
import Button from "../../components/Button";
import ActionsGroup from "../../components/ActionsGroup";
import Tabs from "../../components/Tabs";
import Table from "../../components/Table";

// context
import { AlertStatusContext } from "../../context/AlertsStatus";

// Content
import { tableContent } from "./contentData/table";

// Icons
import { ReactComponent as PencilIcon } from "../../assets/icons/pencil-14.svg";
import { ReactComponent as ExcelIcon } from "../../assets/icons/excel-10.svg";
import { ReactComponent as PrintIcon } from "../../assets/icons/print-14.svg";
import { ReactComponent as HeadlinesIcon } from "../../assets/icons/headlines-14.svg";

import styles from "./index.module.scss";

const portfolioActionsGroup = [
  {
    actionId: "add-symbol",
    ItemChildren: () => (
      <Button
        mods={["primary"]}
        onClick={() => console.log("Add symbol clicked")}
      >
        + Add Symbol
      </Button>
    )
  },
  {
    actionId: "edit-portfolio",
    dividerAfter: true,
    ItemChildren: () => (
      <Button
        mods={["secondary"]}
        IconLeft={() => <PencilIcon />}
        onClick={() => console.log("Edit portfolio clicked")}
      >
        Edit Portfolio
      </Button>
    )
  },
  {
    actionId: "download-excel",
    ItemChildren: () => (
      <Button
        mods={["secondary", "hidden-body"]}
        IconLeft={() => <ExcelIcon />}
        onClick={() => console.log("Download excel clicked")}
      >
        <span className="visually-hidden">Download excel table</span>
      </Button>
    )
  },
  {
    actionId: "print-portfolio",
    dividerAfter: true,
    ItemChildren: () => (
      <Button
        mods={["secondary", "hidden-body"]}
        IconLeft={() => <PrintIcon />}
        onClick={() => console.log("Print portfolio clicked")}
      >
        <span className="visually-hidden">Print Portfolio</span>
      </Button>
    )
  },
  {
    actionId: "view-headlines",
    ItemChildren: () => (
      <Button
        mods={["secondary"]}
        IconLeft={() => <HeadlinesIcon />}
        onClick={() => console.log("View headlines clicked")}
      >
        View Headlines
      </Button>
    )
  }
];

const tabs = [
  {
    id: 0,
    controlLabel: "Summary",
    TabPanelChildren: () => <h3>Tab Summary</h3>
  },
  {
    id: 1,
    controlLabel: "Holdings",
    TabPanelChildren: () =>  <h3>Tab Holdings</h3>
  }
];

const HomePage = () => {
  const { checkedItems, setCheckedItems } = useContext(AlertStatusContext);

  const handleCheckboxChange = ({ target }) => {
    setCheckedItems({...checkedItems, [target.name] : target.checked });
  }

  const handleRangeChange = value => console.log(value);

  useEffect(() => {
    console.log("checkedItems: ", checkedItems);
  }, [checkedItems]);

  return (
    <div className={styles["home-page"]}>
      <div className="container">
        <div className="row">
          <h2 className="visually-hidden">
            Portfolio Page
          </h2>
          <ActionsGroup
            actionsGroup={portfolioActionsGroup}
          />
        </div>
        <div className="row">
          <Tabs items={tabs} />
        </div>
        <div className="row">
          <Table
            headings={tableContent.headings}
            rows={tableContent.rows}
            checkedItems={checkedItems}
            onCheckboxChange={handleCheckboxChange}
            onRangeChange={handleRangeChange}
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage;