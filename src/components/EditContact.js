import React from 'react'
import { Link, useParams } from 'react-router-dom'

function EditContact() {

  const { id } = useParams();

  return (
    <div className="container">
        <h1 className="text-center text-dark py-3 display-2">Edit Contact {id}</h1>
        <div className="row">
            <div className="col-md-6 p-5 shadow mx-auto">
                <form>
                    <div className="form-group">
                        <input 
                            type="text" 
                            placeholder="Name" 
                            className="form-control my-2"/>
                    </div>
                    <div className="form-group">
                         <input
                            type="email"
                            placeholder="Email"
                            className="form-control my-2" 
                         />
                    </div>
                    <div className="form-group">
                         <input
                            type="number"
                            placeholder="Phone" 
                            className="form-control my-2"
                         />
                    </div>
                    <div className="form-group">
                        <input
                            type="submit"
                            value="Update Student"
                            className="btn btn-success"
                        />
                        <Link to="/" className="btn btn-danger mx-3">
                            Delete
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default EditContact