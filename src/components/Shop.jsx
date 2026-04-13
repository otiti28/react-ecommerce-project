import React from "react";
import Hero from "./common/Hero";
import Layout from "./common/Layout";
import prodectImg from "../assets/images/eight.jpg";

const Shop = () => {
  return (
    <Layout>
      <div className="container">
        <nav aria-label="breadcrumb" className=" py-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Shop
            </li>
          </ol>
        </nav>
        <div className="row">
          <div className="col-md-3">
            <div className="card shadow border-0 mb-3">
              <div className="card p-4">
                <h3 className="mb-3">Categories</h3>

                <ul>
                  <li className="mb-2">
                    <input type="checkbox" name="" id="" />
                    <label className="ps-2" htmlFor="">
                      Kids
                    </label>
                  </li>
                  <li className="mb-2">
                    <input type="checkbox" name="" id="" />
                    <label className="ps-2" htmlFor="">
                      Men
                    </label>
                  </li>
                  <li className="mb-2">
                    <input type="checkbox" name="" id="" />
                    <label className="ps-2" htmlFor="">
                      Women
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card shadow border-0 mb-3">
              <div className="card p-4">
                <h3 className="mb-3">Brands</h3>

                <ul>
                  <li className="mb-2">
                    <input type="checkbox" name="" id="" />
                    <label className="ps-2" htmlFor="">
                      Puma
                    </label>
                  </li>
                  <li className="mb-2">
                    <input type="checkbox" name="" id="" />
                    <label className="ps-2" htmlFor="">
                      Killer
                    </label>
                  </li>
                  <li className="mb-2">
                    <input type="checkbox" name="" id="" />
                    <label className="ps-2" htmlFor="">
                      Levis
                    </label>
                  </li>
                  <li className="mb-2">
                    <input type="checkbox" name="" id="" />
                    <label className="ps-2" htmlFor="">
                      Flying machine
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row pb-5">
              <div className="col-md-4 col-6">
                <div className="product card border-0">
                  <div className="card-img">
                    <img src={prodectImg} alt="" className="w-100" />
                  </div>
                  <div className="card-body pt-3">
                    <a href="#"> Tshirt blanc couple </a>
                    <div className="price">
                      50F{" "}
                      <span className="text-decoration-line-through">75f</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-6">
                <div className="product card border-0">
                  <div className="card-img">
                    <img src={prodectImg} alt="" className="w-100" />
                  </div>
                  <div className="card-body pt-3">
                    <a href=""> Tshirt blanc couple </a>
                    <div className="price">
                      50F{" "}
                      <span className="text-decoration-line-through">75f</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-6">
                <div className="product card border-0">
                  <div className="card-img">
                    <img src={prodectImg} alt="" className="w-100" />
                  </div>
                  <div className="card-body pt-3">
                    <a href=""> Tshirt blanc couple </a>
                    <div className="price">
                      50F{" "}
                      <span className="text-decoration-line-through">75f</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-6">
                <div className="product card border-0">
                  <div className="card-img">
                    <img src={prodectImg} alt="" className="w-100" />
                  </div>
                  <div className="card-body pt-3">
                    <a href=""> Tshirt blanc couple </a>
                    <div className="price">
                      50F{" "}
                      <span className="text-decoration-line-through">75f</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-6">
                <div className="product card border-0">
                  <div className="card-img">
                    <img src={prodectImg} alt="" className="w-100" />
                  </div>
                  <div className="card-body pt-3">
                    <a href=""> Tshirt blanc couple </a>
                    <div className="price">
                      50F{" "}
                      <span className="text-decoration-line-through">75f</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-6">
                <div className="product card border-0">
                  <div className="card-img">
                    <img src={prodectImg} alt="" className="w-100" />
                  </div>
                  <div className="card-body pt-3">
                    <a href=""> Tshirt blanc couple </a>
                    <div className="price">
                      50F{" "}
                      <span className="text-decoration-line-through">75f</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
