import { useState, useEffect, memo } from "react";

let totalDistance = 0,
  totalFuel = 0,
  averageMileage = 0,
  table = {};

export default memo(function OdoDetails(props) {
  const [state, setState] = useState(props.data);
  const generateData = () => {
    let tabelz = {};
    tabelz.head = ["Date", "ODO Reading", "Fuel Price in Rs.", "Qty in Rs.", "Qty in Ltrs.", "Distance", "Mileage"];
    tabelz.body = state.map((row, index) => {
      totalDistance = row.odo;
      totalFuel = totalFuel + row.quantityLtrs;
      averageMileage = (totalDistance / totalFuel).toFixed(2);

      const currOdo = row.odo;
      const prev = state[index - 1];
      const prevOdo = prev?.odo;
      const currFuelConsumed = row.quantityLtrs;
      const currFullTank = row.fullTank;
      const prevFullTank = prev?.fullTank;

      const distance = index === 0 ? "-" : currOdo - prevOdo;
      const mileage = index === 0 ? "-" : currFullTank && prevFullTank ? (distance / currFuelConsumed).toFixed(2) : "-";

      return { ...row, distance, mileage };
    });

    return tabelz;
  };

  useEffect(() => {
    props.calculatedCarData({
      totalDistance,
      totalFuel: totalFuel.toFixed(2),
      averageMileage,
    });
    setState(props.data);
  }, [props.data]);

  table = generateData();

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
        <tr>
          {Object.entries(col).map(([key, value], index) => {
            if (key === "id" || key === "fullTank") return false;
            return <td>{value}</td>;
          })}
        </tr>
      );
    });
  };

  console.log("Odo Rendered");

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>{renderHeading(table.head)}</tr>
        </thead>
        <tbody>{renderBody(table?.body)}</tbody>
      </table>
    </div>
  );
});
