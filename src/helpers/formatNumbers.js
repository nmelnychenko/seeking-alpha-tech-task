export const formatNumbers = num => {
  if (num === null) return "-";

  if (Number(num) > 9999) {
    return `${(num / 1000).toFixed(2)}K`;
  }

  return num;
}