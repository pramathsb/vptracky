function carDetails(props) {
  let x = (window.x = { ...props.data });

  let capitalize = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  let addDayss = function (curDate, addDays) {
    return new Date(new Date(curDate).setDate(new Date(curDate).getDate() + parseInt(addDays))).toDateString();
  };

  console.log("Car Details Rendered");

  return (
    <div className="card">
      <div className="card-body">
        <div className="row no-gutters">
          {Object.keys(x).map((key, index) => {
            return (
              <div className="col-3" data-key={index} key={index}>
                <strong>{capitalize(key)}</strong> : {x[key]}
              </div>
            );
          })}

          <div className="col-3" data-key={"test"}>
            <strong>Service Due on</strong> : {addDayss(x.dateOfPurchase, 60)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default carDetails;
