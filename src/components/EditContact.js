import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function EditContact() {

  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector(state => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
//   console.log("Edit Page =>", contacts);
  const currentContact = contacts.contactReducer.find((contact) => contact.id === parseInt(id));
  console.log("ID =>", currentContact);

  useEffect(() => {
      if(currentContact){
          setName(currentContact.name)
          setEmail(currentContact.email)
          setNumber(currentContact.number)
      }
  },[currentContact])


  const handleSubmit = (e) => {
    e.preventDefault();
    
    const checkEmail = contacts.contactReducer.find((contact) => contact.id !== parseInt(id) && contact.email === email);
    
    const checkNumber = contacts.contactReducer.find((contact) => contact.id !== parseInt(id) && contact.number === parseInt(number));

    const checkName = contacts.contactReducer.find((contact) => contact.id !== parseInt(id) && contact.name === name);

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
    id: parseInt(id),
    name,
    email,
    number
  }
  
  dispatch({type: "UPDATE_CONTACT", payload: data});
  toast.success("Contact updated Successfully");
  navigate("/");
}



  return (
    <div className="container">
      { currentContact ? (
      <>
        <h1 className="text-center text-dark py-3 display-2">Edit Contact {id}</h1>
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
                            type="submit"
                            value="Update Contact"
                            className="btn btn-success"
                        />
                        <Link to="/" className="btn btn-danger mx-3">
                            Delete
                        </Link>
                    </div>
                </form>
            </div>
        </div>
      </>) : (
          <h1 className="display-3 my-5 text-center">Student Contact with ID {id} doesn't exist.</h1>
      )
      }
    </div>
  )
}

export default EditContact