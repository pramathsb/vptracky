import React from 'react';

function FuelTable(props) {
  const { modifiedfuelData, TXT } = props;
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
          <th>{TXT.dashboard.table.trip}</th>
          <th>{TXT.dashboard.table.mileage}</th>
        </tr>
      </thead>
      <tbody>
        {modifiedfuelData.map((row, i) => {
          const { date, odo, fuelPrice, qtyLtrs, qtyRs, fullTank, trip, mileage } = row;
          return (
            <tr key={odo}>
              <td>{date}</td>
              <td>{odo}</td>
              <td>{fuelPrice}</td>
              <td>{qtyLtrs}</td>
              <td>{qtyRs}</td>
              <td>
                {fullTank ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='32'
                    fill='green'
                    class='bi bi-battery-full'
                    viewBox='0 0 16 16'
                  >
                    <path d='M2 6h10v4H2V6z' />
                    <path d='M2 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2zm10 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10zm4 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z' />
                  </svg>
                ) : (
                  <svg
                    width='32'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='red'
                    class='bi bi-battery-half'
                    viewBox='0 0 16 16'
                  >
                    <path d='M2 6h5v4H2V6z' />
                    <path d='M2 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2zm10 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10zm4 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z' />
                  </svg>
                )}
              </td>
              <td>{trip}</td>
              <td>{mileage}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default FuelTable;
