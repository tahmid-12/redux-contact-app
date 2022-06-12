import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function AddContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
      e.preventDefault();
      
      const checkEmail = contacts.contactReducer.find((contact) => contact.email === email);
      
      const checkNumber = contacts.contactReducer.find((contact) => contact.number === parseInt(number));

      const checkName = contacts.contactReducer.find((contact) => contact.name === name);

      if(!email || !number || !name){
          return toast.warning("Please fill in all fields");
      }

      if(checkEmail){
          return toast.error("This email already exists");
      }

      if(checkNumber){
        return toast.error("This number already exists");
      }

      if(checkName){
        return toast.error("This name already exists");
    }

    const data = {
      id: contacts.contactReducer[contacts.contactReducer.length - 1].id + 1,
      name,
      email,
      number
    }
    
    dispatch({type: "ADD_CONTACT", payload: data});
    toast.success("Student added Successfully");
    navigate("/");
  }
  

  return (
    <div className="container">
        <h1 className="text-center text-dark py-3 display-2">Add Contact</h1>
        <div className="row">
            <div className="col-md-6 p-5 shadow mx-auto">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input 
                            type="text" 
                            placeholder="Name" 
                            className="form-control my-2"
                            value={name}
                            onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                         <input
                            type="email"
                            placeholder="Email"
                            className="form-control my-2" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                         />
                    </div>
                    <div className="form-group">
                         <input
                            type="number"
                            placeholder="Phone" 
                            className="form-control my-2"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                         />
                    </div>
                    <div className="form-group">
                        <input
                            className="btn btn-block btn-dark"
                            type="submit"
                            value="Add Student"
                        />
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddContact