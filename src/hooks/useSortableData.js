// Author: Kristofer Giltvedt Selbekk
// source: https://www.smashingmagazine.com/2020/03/sortable-tables-react/
import { useState, useMemo } from "react";

export const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedItems = useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a.cells[sortConfig.key].content < b.cells[sortConfig.key].content) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a.cells[sortConfig.key].content > b.cells[sortConfig.key].content) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = key => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  }

  return { items: sortedItems, requestSort };
}