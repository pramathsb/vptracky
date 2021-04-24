import React from "react";

function odoDetails(props) {
  let i = 0,
    totalCapacity = 48;

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
      <tbody>
        {props.data.map((odoList) => {
          return (
            <tr key={i++}>
              {Object.keys(odoList).map((key, index) => {
                if (key === "id") return false;
                else return <td key={index}>{odoList[key]}</td>;
              })}

              <td>{props.data[i - 1 >= 0 ? i - 1 : 0].quantityLtrs}</td>

              <td>
                {(props.data[i - 2]
                  ? props.data[i - 1].odo - props.data[i - 2].odo
                  : null) || "-"}
              </td>

              <td>
                {parseFloat(
                  (props.data[i - 2]
                    ? (props.data[i - 1].odo - props.data[i - 2].odo) /
                      props.data[i - 2].quantityLtrs
                    : 0
                  ).toFixed(2)
                ) || "-"}
              </td>

              <td>
                {(
                  totalCapacity +
                  props.data[i - 1 >= 0 ? i - 1 : 0].quantityLtrs -
                  (props.data[i - 2] !== undefined
                    ? props.data[i - 2].quantityLtrs
                    : 0)
                ).toFixed(2)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default odoDetails;
