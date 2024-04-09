import React from 'react'

const ViewAll = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <p><b><center><h1>VIEW ALL BUSES</h1></center></b></p>
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <div class="card">
                                    <img src="https://media.istockphoto.com/id/1172005882/photo/public-transportation-bus-in-new-york.webp?b=1&s=170667a&w=0&k=20&c=ycC3dDJVHNlXy7gy-YbiGnp52mjR9o8xHmCo1jLluu0=" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">TRANSPORT BUS</h5>
                                        <p class="card-text">Some quick example text to build on the TRANSPORT BUS and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">SEARCH</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <div class="card">
                                    <img src="https://media.istockphoto.com/id/1172005882/photo/public-transportation-bus-in-new-york.webp?b=1&s=170667a&w=0&k=20&c=ycC3dDJVHNlXy7gy-YbiGnp52mjR9o8xHmCo1jLluu0=" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">TRANSPORT BUS</h5>
                                        <p class="card-text">Some quick example text to build on the TRANSPORT BUS and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">SEARCH</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">NO</th>
                                            <th scope="col">BUS ID</th>
                                            <th scope="col">DRIVER NAME</th>
                                            <th scope="col">ROUTE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>001</td>
                                            <td>Otto</td>
                                            <td>KOCHI TO UTTI</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>002</td>
                                            <td>tony</td>
                                            <td>KOCHI TO VYPPIN</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">3</th>
                                            <td>003</td>
                                            <td>Kannan</td>
                                            <td>KOCHI TO PALA</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ViewAll