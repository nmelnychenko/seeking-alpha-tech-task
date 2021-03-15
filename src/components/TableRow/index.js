import React, {useContext, useEffect} from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';

import Checkbox from "../Checkbox";
import RangeSlider from "../RangeSlider";
import Badge from "../Badge";

import { AlertStatusContext } from "../../context/AlertsStatus";
import { formatNumbers } from "../../helpers/formatNumbers";
import { scoresGraduation } from "./scoresGraduationConfig";

import styles from "../Table/index.module.scss";

const TableRow = ({cells}) => {
  const { checkedItems, setCheckedItems } = useContext(AlertStatusContext);

  const handleCheckboxChange = ({ target }) => {
    setCheckedItems({...checkedItems, [target.name] : target.checked });
  }

  const handleRangeChange = value => console.log(value);

  useEffect(() => {
    console.log("checkedItems: ", checkedItems);
  }, [checkedItems]);

  const relativeNumbersMod = content => content !== 0 ? content > 0 ? "text-success" : "text-error" : null;

  return (
    <tr
      className={styles["table__row"]}
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
                      isChecked={checkedItems[name]}
                      onCheckboxChange={handleCheckboxChange}
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
                      onChangeCallback={handleRangeChange}
                    />;

                  case "badge":
                    const scoreGraduationEntity = Object.entries(scoresGraduation)
                      .find(item => content >= item[1].min && content < item[1].max);
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
  )
}

TableRow.propTypes = {
  cells: PropTypes.objectOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      content: PropTypes.any,
      mod: PropTypes.string
    })
  )
}

export default TableRow;