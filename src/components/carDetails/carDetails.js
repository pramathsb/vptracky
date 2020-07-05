import React from 'react';

function carDetails (props) {

    let x = window.x = {...props.data}
    String.prototype.capitalize = function() {
        return (this.charAt(0).toUpperCase() + this.slice(1));
    }

    Date.prototype.addDays = function(days) {
        this.setDate(this.getDate() + parseInt(days));
        return this;
    };

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

                    <div className='col-3'>
                        <strong>Service Due on</strong> : {(new Date(x.dateOfPurchase).addDays(60)).toDateString()}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default carDetails;