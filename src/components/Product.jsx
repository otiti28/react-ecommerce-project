import React from "react";
import Layout from "./common/Layout";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import ProductImgOne from "../assets/images/one.jpg";
import ProductImgTwo from "../assets/images/two.jpg";
import ProductImgThree from "../assets/images/three.jpg";

const Product = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [rating, setRating] = useState(2);
  

  return (
    <Layout>
      <div className="container product-detail">
        <div className="row">
          <div className="col-md-12">
            <nav aria-label="breadcrumb" className=" py-4">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item" aria-current="page">
                  <Link to="/shop">Shop</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <Link to="/product">Dummy product title</Link>
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-5">
            <div className="row">
              <div className="col-2">
                <Swiper
                  style={{
                    "--swiper-navigation-color": "#000",
                    "--swiper-pagination-color": "#000",
                  }}
                  onSwiper={setThumbsSwiper}
                  loop={true}
                  direction={`vertical`}
                  spaceBetween={10}
                  slidesPerView={6}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper mt-2"
                >
                  <SwiperSlide>
                    <div className="content">
                      <img
                        src={ProductImgOne}
                        alt=""
                        height={100}
                        className="w-100"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="content">
                      <img
                        src={ProductImgTwo}
                        alt=""
                        height={100}
                        className="w-100"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="content">
                      <img
                        src={ProductImgThree}
                        alt=""
                        height={100}
                        className="w-100"
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="col-10">
                <Swiper
                  style={{
                    "--swiper-navigation-color": "#000",
                    "--swiper-pagination-color": "#000",
                  }}
                  loop={true}
                  spaceBetween={0}
                  navigation={true}
                  thumbs={
                    thumbsSwiper
                      ? { swiper: thumbsSwiper }
                      : { swiper: thumbsSwiper }
                  }
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2"
                >
                  <SwiperSlide>
                    <div className="content">
                      <img src={ProductImgOne} alt="" className="w-100" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="content">
                      <img src={ProductImgTwo} alt="" className="w-100" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="content">
                      <img src={ProductImgThree} alt="" className="w-100" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <h1>Dummy product title</h1>
            <div className="d-flex">
              <Rating size={20} readonly initialValue={rating} />
              <span className=" pt-1 ps-2">10 Reviews</span>
            </div>
            <div className="price h3 py-3">
                50F <span className="text-decoration-line-through">75f</span>
            </div>
            <div>
                100% original product <br />
                Pay on delivery might be Available<br />
                Easy 15 days return and exchanges
            </div>

                
            <div className="pt-3">
                <strong>Select size</strong>
                <div className="sizes pt-2">
                    <button className="btn btn-size ms-2">XL</button>
                    <button className="btn btn-size ms-2">L</button>
                    <button className="btn btn-size ms-2">M</button>
                    <button className="btn btn-size ms-2">S</button>
                </div>
            </div>

            <div className="add-to-card my-4">
                <button className="btn btn-primary text-uppercase">Add to Cart</button>
            </div>
            <hr />
            <div>
                <strong>SKU</strong>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;
