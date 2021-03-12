import React from "react";
import classNames from "classnames";
import { useSortableData } from "../../hooks/useSortableData";
import { formatNumbers } from "../../helpers/formatNumbers";
import Checkbox from "../Checkbox";
import RangeSlider from "../RangeSlider";
import Badge from "../Badge";

import styles from "./index.module.scss";

const sortConfig = {
  key: "symbol",
  direction: "ascending"
}

const scoresGraduation = {
  highest: {
    min: 4.5,
    max: 5.01 /* some magic number */
  },
  good: {
    min: 4,
    max: 4.5
  },
  medium: {
    min: 3,
    max: 4
  },
  low: {
    min: 2,
    max: 3
  },
  lowest: {
    min: 0,
    max: 2
  }
}

const relativeNumbersMod = content => content !== 0 ? content > 0 ? "text-success" : "text-error" : null;

const Table = ({ headings = [], rows = [], ...props }) => {
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
            <tr
              className={styles["table__row"]}
              key={rowId}
            >
              {Object.keys(cells).map((cellName) => {
                const { type, content, mod } = cells[cellName];

                return (
                  <td className={classNames(styles["table__cell"], mod && styles[`table__cell--${mod}`])} key={cellName}>
                    {
                      (() => {
                        switch (type) {
                          case "text":
                            return content;

                          case "number":
                            return formatNumbers(content);

                          case "relativeNumber":
                            return <span className={relativeNumbersMod(content)}>
                              {formatNumbers(content)}
                            </span>;

                          case "relativePercents":
                            return <span className={relativeNumbersMod(content)}>
                              {`${content}%`}
                            </span>;

                          case "checkbox":
                            const { name, label: checkboxLabel, mods: checkboxMods, isDisabled, isLabelHidden: isCheckboxLabelHidden } = content;

                            return <Checkbox
                              name={name}
                              label={checkboxLabel}
                              isChecked={props.checkedItems && props.checkedItems[name]}
                              onCheckboxChange={props.onCheckboxChange}
                              mods={checkboxMods}
                              isDisabled={isDisabled}
                              isLabelHidden={isCheckboxLabelHidden}
                            />;

                          case "range":
                            const { min = 0, max = 1, stepsCount = 100, defaultValue = 0, label: rangeLabel = "", isLabelHidden: isRangeLabelHidden = false } = content;

                            return <RangeSlider
                              min={min}
                              max={max}
                              defaultValue={defaultValue}
                              label={rangeLabel}
                              isLabelHidden={isRangeLabelHidden}
                              stepsCount={stepsCount}
                              onChangeCallback={props.onRangeChange}
                            />;

                          case "badge":
                            const scoreGraduationEntity = Object.entries(scoresGraduation).find(item => content >= item[1].min && content < item[1].max);
                            const mod = scoreGraduationEntity && scoreGraduationEntity[0];

                            return <Badge
                              mod={content && mod}
                              content={content !== null ? content.toFixed(2) : `NR`}
                            />;

                          default:
                            return content;
                        }
                      })()
                    }
                  </td>
                )}
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table;