import React from "react";
import { useSortableData } from "../../hooks/useSortableData";

import styles from "./index.module.scss";

const sortConfig = {
  key: "symbol",
  direction: "ascending"
}

const Table = ({ headings = [], rows = [] }) => {
  const { items, requestSort } = useSortableData(rows, sortConfig);

  return (
    <table className={styles.table}>
      {headings.length && (
        <thead>
          <tr className={styles["table__headings-row"]}>
            {headings.map(({ title, sortable, id }) => (
              <th className={styles["table__heading"]} key={id}>
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
        {items.map(({rowId, ...cells}) => (
          <tr
            className={styles["table__row"]}
            key={rowId}
          >
            {Object.keys(cells).map((property, index) => (
              <td className={styles["table__cell"]} key={index}>
                {
                  (() => {
                    if (property === "relativeChange") {
                      return `${cells[property]}%`
                    }

                    return Number(cells[property]) > 9999 ?
                      `${(cells[property] / 1000).toFixed(2)}K` :
                      cells[property]
                  })()
                }
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table;