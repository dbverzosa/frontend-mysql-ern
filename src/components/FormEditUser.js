import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const FormEditUser = () => {

    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confpassword, setConfPassword] = useState ("");
    const [role, setRole] = useState ("admin");
    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState('');
    const [image, setImage] = useState('');
    const [msg, setMsg] = useState('');
    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        const getUserById = async () => {
          try {
            const response = await axios.get(
              `http://localhost:5000/users/${id}`
            );
            setName(response.data.name);
            setEmail(response.data.email);
            setPassword(response.data.password);
            setConfPassword(response.data.confPassword);
            setRole(response.data.role);
            setPhone(response.data.phone);
            setLocation(response.data.location);
            setImage(response.data.image);
          } catch (error) {
            if (error.response) {
              setMsg(error.response.data.msg);
            }
          }
        };
        getUserById();
      }, [id]);

    const updateUser = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/users/${id}`, {
                name : name,
                email: email,
                password : password,
                confPassword : confpassword,
                role : role,
                phone : phone,
                location : location,
                image : image
            });
            navigate("/users")
            // Handle successful user creation, redirect or show success message
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
            // Handle error response, display error message to the user
        }
    };




    return (
        <div>
            <h1 className="title">Users</h1>
            <h2 className="subtitle">
                Update User
            </h2>
            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                        <form onSubmit={updateUser}>
                        <p className='has-text-centered'> {msg}</p>
                            <div className="field">
                                <label className="label">Name</label>
                                <div className="control">
                                    <input
                                        type="text"
                                        className="input"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Name"
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Email</label>
                                <div className="control">
                                    <input
                                        type="text"
                                        className="input"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Email"
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Password</label>
                                <div className="control">
                                    <input
                                        type="password"
                                        className="input"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="******"
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Confirm Password</label>
                                <div className="control">
                                    <input
                                        type="password"
                                        className="input"
                                        value={confpassword}
                                        onChange={(e) => setConfPassword(e.target.value)}
                                        placeholder="******"
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Role</label>
                                <div className="control">
                                    <div className='select is-fullwidth'>
                                        <select  value={role}
                                        onChange={(e) => setRole(e.target.value)}>
                                            <option value="admin">Admin</option>
                                            <option value="Manufacturer">Manufacturer</option>
                                            <option value="Supplier">Supplier</option>
                                            <option value="Dealer">Dealer</option>
                                            <option value="Customer">Customer</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Phone</label>
                                <div className="control">
                                    <input
                                        type="text"
                                        className="input"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder="Phone number"
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Location</label>
                                <div className="control">
                                    <input
                                        type="text"
                                        className="input"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        placeholder="Location"
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Image need to Edit this</label>
                                <div className="control">
                                    <input
                                        type="text"
                                        className="input"
                                        value={image}
                                        onChange={(e) => setImage(e.target.value)}
                                        placeholder="Image"
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <div className='control'>
                                    <button
                                        type="submit"
                                        className="button is-success"> Update
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

export default FormEditUser