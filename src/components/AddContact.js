import React from 'react'

function AddContact() {
  return (
    <div className="container">
        <h1 className="text-center text-dark py-3 display-2">Add Contact</h1>
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