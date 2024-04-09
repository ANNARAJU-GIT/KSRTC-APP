import React from 'react'

const SearchBus = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <p><center><b><h1>SEARCH FOR BUSES</h1></b></center></p>
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label className="form-label">Bus Number</label>
                             <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success">SEARCH</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchBus