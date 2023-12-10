import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from "axios";

const VehicleList = () => {
    const [vehicles, setVehicles] = useState([])

    useEffect(()=>{
        getVehicles()
    },[])

    const getVehicles = async() => {
        const response = await axios.get('http://localhost:5000/vehicles')
        setVehicles(response.data)
    }

    const deleteVehicle = async (vehicleId) =>{
        await axios.delete(`http://localhost:5000/vehicles/${vehicleId}`);
        getVehicles();
    }

    return (
        <div>
            <h1 className="title">Vehicles</h1>
            <h2 className="subtitle"> List of Vehicles </h2>
            <Link to="/vehicles/add" className="button is-primary mb-2">Add New</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>VIN</th>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Color</th>
                        <th>Variant</th>
                        <th>Body Type</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Image 1</th>
                        <th>Image 2</th>
                        <th>Image 3</th>
                        <th>Created By</th>
                        <th>Actions</th>

                    </tr>
                </thead>
                <tbody>
                    {vehicles.map((vehicle, index)=>(
                         <tr key={vehicle.id}>
                        <td> {index + 1} </td>
                        <td> {vehicle.brand} </td>
                        <td> {vehicle.model} </td>
                        <td> {vehicle.color} </td>
                        <td> {vehicle.variant} </td>
                        <td> {vehicle.body} </td>
                        <td> {vehicle.price} </td>
                        <td> {vehicle.status} </td>
                        <td> {vehicle.image1} </td>
                        <td> {vehicle.image2} </td>
                        <td> {vehicle.image3} </td>
                        <td> {vehicle.user.name} </td>
                        <td>  <Link to={`/vehicles/edit/${vehicle.id}`} className="button is-small is-info">Edit</Link> </td>
                        <td>  <button onClick={() => deleteVehicle(vehicle.id)} className="button is-small is-danger">Delete</button> </td>
                    </tr>
                    ))}
                   
                </tbody>
            </table>
        </div>
    )
}

export default VehicleList