import React, { useState, useEffect } from "react";
import classNames from "classnames";

// Components
import Button from "../../components/Button";
import ActionsGroup from "../../components/ActionsGroup";
import Tabs from "../../components/Tabs";
import Table from "../../components/Table";

// Content
import { tableContent } from "./contentData/table";
import { tabControls } from "./contentData/tabs";

// Icons
import { ReactComponent as PencilIcon } from "../../assets/icons/pencil-14.svg";
import { ReactComponent as ExcelIcon } from "../../assets/icons/excel-10.svg";
import { ReactComponent as PrintIcon } from "../../assets/icons/print-14.svg";
import { ReactComponent as HeadlinesIcon } from "../../assets/icons/headlines-14.svg";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrow-down-14.svg";

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
        mods={["secondary", "text-only-desktop"]}
        IconLeft={() => <PencilIcon />}
        onClick={() => console.log("Edit portfolio clicked")}
      >
        Edit Portfolio
      </Button>
    )
  },
  {
    actionId: "download-excel",
    mobileHidden: true,
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
    mobileHidden: true,
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
        mods={["secondary", "text-only-desktop"]}
        IconLeft={() => <HeadlinesIcon />}
        onClick={() => console.log("View headlines clicked")}
      >
        View Headlines
      </Button>
    )
  }
];

const HomePage = () => {
  const [ isDropdownActive, setDropdownState ] = useState(false);

  const handleClickDropdown = () => {
    setDropdownState(!isDropdownActive);
  };

  useEffect(() => {
    console.log("dropdown state is: ", isDropdownActive);
  }, [isDropdownActive]);

  const FirstPanel = () => <div className={styles["portfolio-table-wrapper"]}>
    <Table
      headings={tableContent.headings}
      rows={tableContent.rows}
    />
  </div>;

  const SecondPanel = () => <div>
    <h3>Hello, Tab Holdings</h3>
  </div>;

  return (
    <div className={styles["home-page"]}>
      <div className="container">
        <h2 className="visually-hidden">
          Portfolio Page
        </h2>
        <div className="row">
          <div className={classNames(styles["portfolio-top-panel"])}>
            {/* Probably this also should be a component with dropdown */}
            <div className={styles["portfolio-dropdown"]}>
              <button
                className={classNames(
                  styles["portfolio-dropdown__action"],
                  isDropdownActive && styles["portfolio-dropdown__action--is-active"])
                }
                onClick={handleClickDropdown}
              >
                Portfolio 1 - Dividends & Income
                <span className={styles["portfolio-dropdown__action-icon"]}>
                  <ArrowDown />
                </span>
              </button>
            </div>
            <ActionsGroup
              actionsGroup={portfolioActionsGroup}
            />
          </div>
        </div>
        <div className="row">
          <Tabs
            items={tabControls}
            panels={[
              <FirstPanel />,
              <SecondPanel />
            ]}
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage;