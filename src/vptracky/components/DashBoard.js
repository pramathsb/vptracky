export default function DashBoard(props) {
  console.log("DashBoard Rendered");
  let x = { ...props.data };

  let capitalize = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <>
      <h5>My Vehicle Details </h5>
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
          </div>
        </div>
      </div>
    </>
  );
}
