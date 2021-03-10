import React, { useState, useEffect } from "react";

// Components
import Button from "../../components/Button";
import ActionsGroup from "../../components/ActionsGroup";
import Tabs from "../../components/Tabs";
import Table from "../../components/Table";
import Checkbox from "../../components/Checkbox";

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
  const defaultCheckedItems = {
    "afk-alert-status": true
  }

  const [checkedItems, setCheckedItems] = useState({...defaultCheckedItems});

  const handleCheckboxChange = ({ target }) => {
    setCheckedItems({...checkedItems, [target.name] : target.checked });
  }

  useEffect(() => {
    console.log("checkedItems: ", checkedItems);
  }, [checkedItems]);

  const table = {
    headings: [
      {
        title: "Symbol",
        sortable: true,
        id: "symbol"
      },
      {
        title: "Price",
        sortable: true,
        id: "price"
      },
      {
        title: "Change",
        sortable: true,
        id: "change"
      },
      {
        title: "Change %",
        sortable: true,
        id: "relativeChange"
      },
      {
        title: "Alerts",
        sortable: false,
        id: "alerts"
      },
    ],
    rows: [
      {
        rowId: "0",
        symbol: "AFK",
        price: 19.51,
        change: -0.14,
        relativeChange: -0.71,
        alerts: <Checkbox
          name="afk-alert-status"
          label="Afk alerts enable"
          isChecked={checkedItems["afk-alert-status"]}
          onCheckboxChange={handleCheckboxChange}
          mods={["text-center"]}
          isLabelHidden={true}
        />,
      },
      {
        rowId: "1",
        symbol: "BRK.A",
        price: 335200,
        change: 1584.00,
        relativeChange: 0.47,
        alerts: <Checkbox
          name="brk-alert-status"
          label="BRK alerts enable"
          isChecked={checkedItems["brk-alert-status"]}
          onCheckboxChange={handleCheckboxChange}
          mods={["text-center"]}
          isLabelHidden={true}
        />,
      },
      {
        rowId: "2",
        symbol: "CGW",
        price: 41.99,
        change: 0.04,
        relativeChange: 0.10,
        alerts: <Checkbox
          name="cgw-alert-status"
          label="CGW alerts enable"
          isChecked={checkedItems["cgw-alert-status"]}
          onCheckboxChange={handleCheckboxChange}
          mods={["text-center"]}
          isLabelHidden={true}
        />,
      },
      {
        rowId: "3",
        symbol: "FIX",
        price: 48.60,
        change: -0.16,
        relativeChange: -100.33,
        alerts: <Checkbox
          name="fix-alert-status"
          label="FIX alerts enable"
          isChecked={checkedItems["fix-alert-status"]}
          onCheckboxChange={handleCheckboxChange}
          mods={["text-center"]}
          isDisabled={true}
          isLabelHidden={true}
        />,
      },
    ]
  };

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
            headings={table.headings}
            rows={table.rows}
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage;