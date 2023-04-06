import React from 'react';

function FuelTable(props) {
  const { fuelData, TXT } = props;
  return (
    <table className='table table-bordered'>
      <thead>
        <tr>
          <th>{TXT.dashboard.table.date}</th>
          <th>{TXT.dashboard.table.odo}</th>
          <th>{TXT.dashboard.table.price}</th>
          <th>{TXT.dashboard.table.quantity}</th>
          <th>{TXT.dashboard.table.totalPrice}</th>
          <th>{TXT.dashboard.table.fullTank}</th>
          <th>{TXT.dashboard.table.distance}</th>
          <th>{TXT.dashboard.table.mileage}</th>
        </tr>
      </thead>
      <tbody>
        {fuelData.map((row) => {
          const { date, odo, fuelPrice, qtyLtrs, qtyRs, fullTank } = row;
          return (
            <tr key={odo}>
              <td>{date}</td>
              <td>{odo}</td>
              <td>{fuelPrice}</td>
              <td>{qtyRs}</td>
              <td>{qtyLtrs}</td>
              <td>{fullTank}</td>
              <td>distance</td>
              <td>mileage</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default FuelTable;
