function OdoDetails(props) {
  const headings = ["Date", "ODO Reading", "Fuel Price in Rs.", "Qty in Rs.", "Qty in Ltrs.", "Distance", "Mileage"];

  const renderColumnDistance = (table, index) => {
    const currOdo = table[index].odo;
    const prevOdo = table[index - 1]?.odo;
    return <>{index === 0 ? "-" : currOdo - prevOdo}</>;
  };

  const renderColumnMileage = (table, index) => {
    const currOdo = table[index].odo;
    const prevOdo = table[index - 1]?.odo;
    const currFuelConsumed = table[index].quantityLtrs;
    const currFullTank = table[index]?.fullTank;
    const prevFullTank = table[index - 1]?.fullTank;
    return <>{index === 0 ? "-" : currFullTank && prevFullTank ? ((currOdo - prevOdo) / currFuelConsumed).toFixed(2) : "-"}</>;
  };

  const renderColumns = (table, index, rKey) => {
    return (
        [<td data-key={rKey++} key={`index${rKey++}`}>
          {renderColumnDistance(table, index)}
        </td>,
        <td data-key={rKey++} key={`index${rKey++}`}>
          {renderColumnMileage(table, index)}
        </td>]
    );
  };

  const renderTable = (table) => {
    let rKey = 0;
    return table.map((row, index) => {
      return (
        <tr data-key={rKey++} key={`index${rKey++}`}>
          {Object.entries(row).map(([key, value], index) => {
            if (key === "id" || key === "fullTank") return false;
            return (
                <td data-key={rKey++} key={`index${rKey++}`}>
                  {value}
                </td>
            );
          })}

          {renderColumns(table, index, rKey)}
        </tr>
      );
    });
  };

  return (
    <div>
    <table className="table table-striped">
      <thead>
        <tr>
          {headings.map((heading, index) => {
            return (
              <th scope="col" key={heading}>
                {heading}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>{renderTable(props.data)}</tbody>
      </table>
      </div>
  );
}

export default OdoDetails;
