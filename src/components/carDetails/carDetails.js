import React from 'react';

function carDetails (props) {

    let x = window.x = {...props.data}
    let tifOptions;
    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }
    return (
        <div className="card">
            <div className="card-body">
                <div className="row no-gutters">
                    {Object.keys(x).map((key,index)=>{
                        return (
                            <div className='col-3' key={index}>
                                <strong>{key.capitalize()}</strong> : {x[key]}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default carDetails;