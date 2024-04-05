export const getTotalSales = (
  monthlySales: number, 
  averageCost: number,
) => {
  return monthlySales * averageCost;
};

export const getTotalTaxSales = (
  monthlySales: number, 
  averageCost: number,
  percent: number,
) => {
  const multiply = monthlySales * averageCost * percent;
  return +multiply.toFixed(2);
};

