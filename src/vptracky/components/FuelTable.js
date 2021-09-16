import { memo, useEffect } from "react";

export default memo(function FuelTable(props) {
  console.log("FuelTable Rendered");

  let totalDistance = 0,
    totalFuel = 0,
    averageMileage = 0;
  const table = {};
  table.head = ["Date", "ODO Reading", "Fuel Price in Rs.", "Qty in Rs.", "Qty in Ltrs.", "Distance", "Mileage"];
  table.body = props.data.map((row, index) => {
    totalDistance = row.odo;
    totalFuel = totalFuel + row.qtyLtrs;
    averageMileage = (totalDistance / totalFuel).toFixed(2);

    const currOdo = row.odo;
    const prev = props.data[index - 1];
    const prevOdo = prev?.odo;
    const currFuelConsumed = row.qtyLtrs;
    const currFullTank = row.fullTank;
    const prevFullTank = prev?.fullTank;

    const distance = index === 0 ? "-" : currOdo - prevOdo;
    const mileage = index === 0 ? "-" : currFullTank && prevFullTank ? (distance / currFuelConsumed).toFixed(2) : "-";

    return { ...row, distance, mileage };
  });

  useEffect(() => {
    props.updateDashboardData({
      totalDistance,
      totalFuel: totalFuel.toFixed(2),
      averageMileage,
    });
  });

  const renderHeading = (head) => {
    return head.map((heading, index) => {
      return (
        <th scope="col" key={heading}>
          {heading}
        </th>
      );
    });
  };

  const renderBody = (body) => {
    return body.map((col, index) => {
      return (
        <tr key={col.id}>
          {Object.entries(col).map(([key, value], index) => {
            if (key === "id" || key === "fullTank") return false;
            return <td key={index}>{value}</td>;
          })}
        </tr>
      );
    });
  };

  return (
    <>
      <h5>My Vehicle Data</h5>
      <table className="table table-striped">
        <thead>
          <tr>{renderHeading(table.head)}</tr>
        </thead>
        <tbody>{renderBody(table?.body)}</tbody>
      </table>
    </>
  );
});
