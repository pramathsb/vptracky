function odoDetails(props) {
  let i = 0,
    totalCapacity = 48;

  const renderColumnCapacity = (table, index) => {
    const row = table[index].quantityLtrs;
    return <>{row}</>;
  };

  const renderColumnDistance = (table, index) => {
    const row = table[index].odo;
    const prevRow = table[index - 1]?.odo;
    return <>{index === 0 ? "-" : row - prevRow}</>;
  };

  const renderColumnMileage = (table, index) => {
    const row = table[index].odo;
    const prevRow = table[index - 1]?.odo;
    const prevRowFuelConsumed = table[index - 1]?.quantityLtrs;
    const prevRowFullTank = table[index - 1]?.fullTank;
    return <>{index === 0 ? "-" : prevRowFullTank ? ((row - prevRow) / prevRowFuelConsumed).toFixed(2) : "-"}</>;
  };

  const renderColumnConsumed = (table, index) => {
    const row = table[index].quantityLtrs;
    const prevRow = table[index - 1]?.quantityLtrs;
    const prevRowFuelConsumed = table[index - 1]?.quantityLtrs;
    const prevRowFullTank = table[index - 1]?.fullTank;
    return <>{index === 0 ? "-" : prevRowFullTank ? (48 - row + (48 - prevRow)).toFixed(2) : "-"}</>;
  };

  const renderColumns = (table, index) => {
    return (
      <>
        <td>{renderColumnCapacity(table, index)}</td>
        <td>{renderColumnDistance(table, index)}</td>
        <td>{renderColumnMileage(table, index)}</td>
        <td>{renderColumnConsumed(table, index)}</td>
      </>
    );
  };

  const renderTable = (table) => {
    return table.map((row, index) => {
      return (
        <tr>
          {Object.entries(row).map(([key, value], index) => {
            if (key === "id" || key === "fullTank") return false;
            /* if (key === "odo") return false;
            if (key === "fuelPrice") return false;
            if (key === "quantityRs") return false;
            if (key === "quantityLtrs") return false; */
            return (
              <>
                <td>{value}</td>
              </>
            );
          })}

          {renderColumns(table, index)}
        </tr>
      );
    });
  };

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">ODO Reading</th>
          <th scope="col">Fuel Price in Rs.</th>
          <th scope="col">Qty in Rs.</th>
          <th scope="col">Qty in Ltrs.</th>
          <th scope="col">Capacity</th>
          <th scope="col">Distance</th>
          <th scope="col">Mileage</th>
          <th scope="col">Consumed</th>
        </tr>
      </thead>
      <tbody>{renderTable(props.data)}</tbody>
    </table>
  );
}

export default odoDetails;
