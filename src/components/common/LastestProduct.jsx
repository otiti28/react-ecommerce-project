import React from 'react'
import prodectImg from '../../assets/images/eight.jpg'
const LastestProduct = () => {
  return (
    <section className="section-2 pt-5">
        <div className="container">
            <h2>New arrivals</h2>
            <div className="row mt-4">
                <div className="col-md-3 col-6">
                    <div className="product card border-0">
                        <div className="card-img">
                            <img src={prodectImg} alt="" className="w-100" />
                        </div>
                        <div className="card-body pt-3">
                          <a href=""> Tshirt blanc couple </a>
                          <div className="price">
                            50F <span className="text-decoration-line-through">75f</span>
                          </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-6">
                    <div className="product card border-0">
                        <div className="card-img">
                            <img src={prodectImg} alt="" className="w-100" />
                        </div>
                        <div className="card-body pt-3">
                          <a href=""> Tshirt blanc couple </a>
                          <div className="price">
                            50F <span className="text-decoration-line-through">75f</span>
                          </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-6">
                    <div className="product card border-0">
                        <div className="card-img">
                            <img src={prodectImg} alt="" className="w-100" />
                        </div>
                        <div className="card-body pt-3">
                          <a href=""> Tshirt blanc couple </a>
                          <div className="price">
                            50F <span className="text-decoration-line-through">75f</span>
                          </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-6">
                    <div className="product card border-0">
                        <div className="card-img">
                            <img src={prodectImg} alt="" className="w-100" />
                        </div>
                        <div className="card-body pt-3">
                          <a href=""> Tshirt blanc couple </a>
                          <div className="price">
                            50F <span className="text-decoration-line-through">75f</span>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
  )
}

export default LastestProduct
