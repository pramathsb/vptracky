import React from 'react';
import CarDetails from '../components/carDetails/carDetails'
import OdoDetails from '../components/odoDetails/odoDetails'

function Vpt (props) {

    return (<div className="container">

        <h4 className="mt-4">Vehicle Performance Tracker</h4>
        <p>For those who are concerned about their Vehicle Performance</p>

        <hr/>

        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Hello there!</strong> Welcome to vehicle performance tracker.
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>

        <div className="my-4"></div>

        <h5>My Vehicle Details </h5>

        <CarDetails data={props.state.car.carData}/>

        <div className="my-4"></div>

        <h5>My Vehicle Data</h5>

        <OdoDetails data={props.state.car.odoData}/>

    </div>)
}

export default Vpt