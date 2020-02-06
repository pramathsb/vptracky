import React from 'react';

function odoDetails (props) {

    console.log(props)
    let i=0;

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
            </tr>
            </thead>
            <tbody>
                {
                    props.data.map((odoList)=> {
                        return <tr key={i++}>
                            {Object.keys(odoList).map((key,index)=>{
                                return (
                                    <td key={index}>
                                        {odoList[key]}
                                    </td>
                                )
                            })}
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}

export default odoDetails;

