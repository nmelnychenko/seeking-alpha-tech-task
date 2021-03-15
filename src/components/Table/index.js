import React from "react";
import classNames from "classnames";

import { sortConfig } from "./sortConfig";
import { useSortableData } from "../../hooks/useSortableData";

import TableRow from "../TableRow";

import styles from "./index.module.scss";

const Table = ({ headings = [], rows = [] }) => {
  const { items, requestSort } = useSortableData(rows, sortConfig);

  return (
    <div className={styles["table-wrapper"]}>
      <table className={styles.table}>
        {headings.length && (
          <thead>
            <tr className={(styles["table__headings-row"])}>
              {headings.map(({ title, sortable, id, mod }) => (
                <th className={classNames(styles["table__heading"], styles[`table__heading--${mod}`])} key={id}>
                  {sortable ? (
                    <button
                      className={styles["table__heading-action"]}
                      onClick={() => requestSort(id)}
                    >
                      {title}
                    </button>) :
                    title
                  }
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {items.map(({rowId, cells}) => (
            <TableRow rowId={rowId} cells={cells} key={rowId} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table;