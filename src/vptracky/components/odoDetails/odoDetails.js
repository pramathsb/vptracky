import { useState } from "react";

function OdoDetails(props) {
  const headings = ["Date", "ODO Reading", "Fuel Price in Rs.", "Qty in Rs.", "Qty in Ltrs.", "Distance", "Mileage"];

  const newTable = {};
  const [state, setState] = useState({});

  newTable.head = ["Date", "ODO Reading", "Fuel Price in Rs.", "Qty in Rs.", "Qty in Ltrs.", "Distance", "Mileage"];
  newTable.body = props.data.map((row, index) => {
    const currOdo = row.odo;
    const prev = props.data[index - 1];
    const prevOdo = prev?.odo;
    const currFuelConsumed = row.quantityLtrs;
    const currFullTank = row.fullTank;
    const prevFullTank = prev?.fullTank;

    const distance = index === 0 ? "-" : currOdo - prevOdo;
    const mileage = index === 0 ? "-" : currFullTank && prevFullTank ? (distance / currFuelConsumed).toFixed(2) : "-";

    return { ...row, distance, mileage };
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
        <tr>
          {Object.entries(col).map(([key, value], index) => {
            if (key === "id" || key === "fullTank") return false;
            return <td>{value}</td>;
          })}
        </tr>
      );
    });
  };

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>{renderHeading(newTable.head)}</tr>
        </thead>
        <tbody>{renderBody(newTable.body)}</tbody>
      </table>
    </div>
  );
}

export default OdoDetails;
