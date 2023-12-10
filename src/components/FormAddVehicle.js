import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const FormAddVehicle = () => {
    
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [color, setColor] = useState("");
    const [variant, setVariant] = useState ("");
    const [body, setBody] = useState ("");
    const [price, setPrice] = useState ("");
    const [status, setStatus] = useState ("available");
    const [phone, setPhone] = useState ("");
    const [image1, setImage1] = useState ("");
    const [image2, setImage2] = useState ("");
    const [image3, setImage3] = useState ("");
    const [msg, setMsg] = useState ("");

    const navigate = useNavigate();

    const saveVehicle = async (e) => {
        e.preventDefault();
    try {
      await axios.post("http://localhost:5000/vehicles", {
        brand: brand,
        model : model,
        color: color,
        variant : variant,
        body : body,
        price: price,
        status: status,
        image1: image1,
        image2: image2,
        image3: image3
      });
      navigate("/vehicles");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
    }


  return (
    <div>
    <h1 className="title">Vehicles</h1>
    <h2 className="subtitle">
        Add New Vehicle
    </h2>
    <div className="card is-shadowless">
        <div className="card-content">
            <div className="content">
                <form onSubmit={saveVehicle}>
                    <p className='has-text-centered'> {msg}</p>
                    <div className="field">
                        <label className="label">Brand</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={brand}
                                onChange={(e) => setBrand(e.target.value)}
                                placeholder="Brand"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Model</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={model}
                                onChange={(e) => setModel(e.target.value)}
                                placeholder="Model"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Color</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                                placeholder="Color"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Variant</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={variant}
                                onChange={(e) => setVariant(e.target.value)}
                                placeholder="Variant"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Body Type</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={body}
                                onChange={(e) => setBody(e.target.value)}
                                placeholder="Body Type"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Price</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder="Price"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Status</label>
                        <div className="control">
                            <div className='select is-fullwidth'>
                                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                                    <option value="available">Available</option>
                                    <option value="not available">Not Available</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Image 1 need to Edit this</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={image1}
                                onChange={(e) => setImage1(e.target.value)}
                                placeholder="Image1"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Image 2 need to Edit this</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={image2}
                                onChange={(e) => setImage2(e.target.value)}
                                placeholder="Image2"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Image 3 need to Edit this</label>
                        <div className="control">
                            <input
                                type="text"
                                className="input"
                                value={image3}
                                onChange={(e) => setImage3(e.target.value)}
                                placeholder="Image"
                            />
                        </div>
                    </div>
                    <div className="field">
                        <div className='control'>
                            <button
                                type="submit"
                                className="button is-success"> Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
  )
}

export default FormAddVehicle