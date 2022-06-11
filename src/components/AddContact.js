import { TaskAbortError } from '@reduxjs/toolkit';
import React, { useState } from 'react'
// import { useSelector } from 'react-redux'
import { toast } from 'react-toastify';

function AddContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

//   const contacts = useSelector((state) => state);
//   console.log("Contacts in Add Page =>", contacts);

  
  
  const handleSubmit = (e) => {
      e.preventDefault();
      
      const checkEmail = state => state.find((contact) => contact.email === email && email);
      console.log(checkEmail);
      
      const checkNumber = state => state.find((contact) => contact.number === parseInt(number));
    //   console.log(checkNumber);

      const checkName = state => state.find((contact) => contact.name === name && name);

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