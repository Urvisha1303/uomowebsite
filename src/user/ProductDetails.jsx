import axios from "axios";
import React, { useEffect, useState } from "react";
// import ReactImageMagnify from "react-image-magnify";
import { useParams } from "react-router-dom";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { addTodo } from "../cart/CartAction";
import { useDispatch } from "react-redux";
// import ReactImageMagnify from 'react-image-magnify';
const ProductDetails = () => {
  const dispatch = useDispatch()
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProduct();
  }, [id]);

  const getProduct = async () => {
    let product = await axios.get(`http://localhost:3000/products/${id}`);
    // console.log(product.data);
    setProduct(product.data);
  };

  const addToCart = async()=>{
     // console.log("hii");
     let cartItem = await axios.get(
      `http://localhost:3000/cart?productId=${product.id}`
    );
    console.log(cartItem);
    if (cartItem.data.length == 0) {
      await axios.post("http://localhost:3000/cart", {
        productId: product.id,
        quantity: 1,
      });
    } else {
      let cartData = cartItem.data[0];
      await axios.patch(`http://localhost:3000/cart/${cartData.id}`, {
        quantity: cartData.quantity + 1,
      });
    }
    dispatch(addTodo(1));
  };

  return (
    <>
      <main style={{ paddingTop: 90 }}>
        {/* <div className="mb-md-1 pb-md-3" /> */}
        <section className="product-single container">
          <div className="row">
            <div className="col-lg-7">
              <div
                className="product-single__media vertical-thumbnail product-media-initialized"
                data-media-type="vertical-thumbnail"
              >
                <div className="product-single__image">
                  <div
                    className="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
                    style={{ cursor: "grab" }}
                  >
                    <div
                      className="swiper-wrapper"
                      id="swiper-wrapper-ab4afd456f3d54e9"
                      aria-live="polite"
                      style={{ transform: "translate3d(0px, 0px, 0px)" }}
                    >
                      <div
                        className="swiper-slide product-single__image-item swiper-slide-active"
                        role="group"
                        aria-label="1 / 4"
                        style={{ width: 534, marginRight: 32 }}
                      >
                        <TransformWrapper
                          defaultScale={1}
                          defaultPositionX={0}
                          defaultPositionY={0}
                        >
                          {({ zoomIn, zoomOut, resetTransform }) => (
                            <>
                              <div>
                                <button onClick={zoomIn}>Zoom In</button>
                                <button onClick={zoomOut}>Zoom Out</button>
                                <button onClick={resetTransform}>Reset</button>
                              </div>
                              
                            </>
                          )}
                          <TransformComponent>
                                <img
                                  loading="lazy"
                                  className="h-auto"
                                  src={product.ProductImage}
                                  width={674}
                                  height={674}
                                  alt={product.name}
                                />
                              </TransformComponent>
                        </TransformWrapper>
                        <a
                          data-fancybox="gallery"
                          href={product.ProductImage}
                          data-bs-toggle="tooltip"
                          data-bs-placement="left"
                          title=""
                          data-bs-original-title="Zoom"
                        >
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <use href="#icon_zoom" />
                          </svg>
                        </a>
                      </div>
                      <div
                        className="swiper-slide product-single__image-item swiper-slide-next"
                        role="group"
                        aria-label="2 / 4"
                        style={{ width: 534, marginRight: 32 }}
                      >
                        <img
                          loading="lazy"
                          className="h-auto"
                          src="../images/products/product_0-1.jpg"
                          width={674}
                          height={674}
                          alt=""
                        />
                        <a
                          data-fancybox="gallery"
                          href="../images/products/product_0-1.jpg"
                          data-bs-toggle="tooltip"
                          data-bs-placement="left"
                          title="Zoom"
                          //   data-bs-original-title="Zoom"
                        >
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <use href="#icon_zoom" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div
                      className="swiper-button-prev"
                      aria-label="Previous slide"
                      style={{backgroundColor:"unset"}}
                    />
                    <div
                      className="swiper-button-next"
                      aria-label="Next slide" style={{backgroundColor:"unset"}}
                    />
                    <span
                      className="swiper-notification"
                      aria-live="assertive"
                      aria-atomic="true"
                    />
                  </div>
                </div>

                <div className="product-single__thumbnail">
                  <div className="swiper-container swiper-container-vertical swiper-container-pointer-events swiper-container-thumbs">
                    <div className="swiper-wrapper" aria-live="polite">
                      <div
                        className="swiper-slide product-single__image-item swiper-slide-active swiper-slide-thumb-active"
                        role="group"
                        aria-label="1 / 4"
                        style={{ height: 89 }}
                      >
                        <img
                          loading="lazy"
                          className="h-auto"
                          src={product.ProductImage}
                          width={104}
                          height={104}
                          alt={product.name}
                        />
                      </div>
                      {/* Add other thumbnail images here */}
                    </div>
                    <span
                      className="swiper-notification"
                      aria-live="assertive"
                      aria-atomic="true"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="d-flex justify-content-between mb-4 pb-md-2">
                <div className="breadcrumb mb-0 d-none d-md-block flex-grow-1">
                  <a
                    href="#"
                    className="menu-link menu-link_us-s text-uppercase fw-medium"
                  >
                    Home
                  </a>
                  <span className="breadcrumb-separator menu-link fw-medium ps-1 pe-1">
                    /
                  </span>
                  <a
                    href="#"
                    className="menu-link menu-link_us-s text-uppercase fw-medium"
                  >
                    The Shop
                  </a>
                </div>
                {/* /.breadcrumb */}
                <div className="product-single__prev-next d-flex align-items-center justify-content-between justify-content-md-end flex-grow-1">
                  <a
                    href="product2_variable.html"
                    className="text-uppercase fw-medium"
                  >
                    <svg
                      className="mb-1px"
                      width={10}
                      height={10}
                      viewBox="0 0 25 25"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use href="#icon_prev_md" />
                    </svg>
                    <span className="menu-link menu-link_us-s">Prev</span>
                  </a>
                  <a
                    href="product4_grouped.html"
                    className="text-uppercase fw-medium"
                  >
                    <span className="menu-link menu-link_us-s">Next</span>
                    <svg
                      className="mb-1px"
                      width={10}
                      height={10}
                      viewBox="0 0 25 25"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use href="#icon_next_md" />
                    </svg>
                  </a>
                </div>
                {/* /.shop-acs */}
              </div>
              <h1 className="product-single__name">{product.ProductName}</h1>
              <div className="product-single__rating">
                <div className="reviews-group d-flex">
                  <svg
                    className="review-star"
                    viewBox="0 0 9 9"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_star" />
                  </svg>
                  <svg
                    className="review-star"
                    viewBox="0 0 9 9"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_star" />
                  </svg>
                  <svg
                    className="review-star"
                    viewBox="0 0 9 9"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_star" />
                  </svg>
                  <svg
                    className="review-star"
                    viewBox="0 0 9 9"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_star" />
                  </svg>
                  <svg
                    className="review-star"
                    viewBox="0 0 9 9"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_star" />
                  </svg>
                </div>
                <span className="reviews-note text-lowercase text-secondary ms-1">
                  8k+ reviews
                </span>
              </div>
              <div className="product-single__price">
                <span className="to-price">$ {product.ProductPrice}</span>
              </div>
              <div className="product-single__short-desc">
                <p>{product.ProductDecription}</p>
              </div>
              {/* <form name="addtocart-form" method="post"> */}
                <div className="product-single__addtocart">
                  <button
                    
                    className="btn btn-primary btn-addtocart"
                    onClick={() => addToCart()}
                  >
                    Add to Cart
                  </button>
                </div>
              {/* </form> */}
              <div className="product-single__addtolinks">
                <a
                  href="#"
                  className="menu-link menu-link_us-s add-to-wishlist"
                >
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_heart" />
                  </svg>
                  <span>Add to Wishlist</span>
                </a>
                <share-button className="share-button">
                  <button className="menu-link menu-link_us-s to-share border-0 bg-transparent d-flex align-items-center">
                    <svg
                      width={16}
                      height={19}
                      viewBox="0 0 16 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use href="#icon_sharing" />
                    </svg>
                    <span>Share</span>
                  </button>
                  {/* <details
                    id="Details-share-template__main"
                    className="m-1 xl:m-1.5"
                    hidden=""
                  >
                    <summary className="btn-solid m-1 xl:m-1.5 pt-3.5 pb-3 px-5">
                      +
                    </summary>
                    <div
                      id="Article-share-template__main"
                      className="share-button__fallback flex items-center absolute top-full left-0 w-full px-2 py-4 bg-container shadow-theme border-t z-10"
                    >
                      <div className="field grow mr-4">
                        <label className="field__label sr-only" htmlFor="url">
                          Link
                        </label>
                        <input
                          type="text"
                          className="field__input w-full"
                          id="url"
                          defaultValue="https://uomo-crystal.myshopify.com/blogs/news/go-to-wellness-tips-for-mental-health"
                          placeholder="Link"
                          //   onclick="this.select();"
                          readOnly=""
                        />
                      </div>
                      <button className="share-button__copy no-js-hidden">
                        <svg
                          className="icon icon-clipboard inline-block mr-1"
                          width={11}
                          height={13}
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          focusable="false"
                          viewBox="0 0 11 13"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2 1a1 1 0 011-1h7a1 1 0 011 1v9a1 1 0 01-1 1V1H2zM1 2a1 1 0 00-1 1v9a1 1 0 001 1h7a1 1 0 001-1V3a1 1 0 00-1-1H1zm0 10V3h7v9H1z"
                            fill="currentColor"
                          />
                        </svg>
                        <span className="sr-only">Copy link</span>
                      </button>
                    </div>
                  </details> */}
                </share-button>
              </div>
              <div className="product-single__meta-info">
                <div className="meta-item">
                  <label>SKU:</label>
                  <span>N/A</span>
                </div>
                <div className="meta-item">
                  <label>Categories:</label>
                  <span>Casual &amp; Urban Wear, Jackets, Men</span>
                </div>
                <div className="meta-item">
                  <label>Tags:</label>
                  <span>biker, black, bomber, leather</span>
                </div>
              </div>
            </div>
          </div>
          <div className="product-single__details-tab">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link nav-link_underscore active"
                  id="tab-description-tab"
                  data-bs-toggle="tab"
                  href="#tab-description"
                  role="tab"
                  aria-controls="tab-description"
                  aria-selected="true"
                >
                  Description
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link nav-link_underscore"
                  id="tab-additional-info-tab"
                  data-bs-toggle="tab"
                  href="#tab-additional-info"
                  role="tab"
                  aria-controls="tab-additional-info"
                  aria-selected="false"
                >
                  Additional Information
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link nav-link_underscore"
                  id="tab-reviews-tab"
                  data-bs-toggle="tab"
                  href="#tab-reviews"
                  role="tab"
                  aria-controls="tab-reviews"
                  aria-selected="false"
                >
                  Reviews (2)
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="tab-description"
                role="tabpanel"
                aria-labelledby="tab-description-tab"
              >
                <div className="product-single__description">
                  <h3 className="block-title mb-4">
                    Sed do eiusmod tempor incididunt ut labore
                  </h3>
                  <p className="content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Sed ut perspiciatis
                    unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                    illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo.
                  </p>
                  <div className="row">
                    <div className="col-lg-6">
                      <h3 className="block-title">Why choose product?</h3>
                      <ul className="list text-list">
                        <li>Creat by cotton fibric with soft and smooth</li>
                        <li>
                          Simple, Configurable (e.g. size, color, etc.), bundled
                        </li>
                        <li>Downloadable/Digital Products, Virtual Products</li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <h3 className="block-title">Sample Number List</h3>
                      <ol className="list text-list">
                        <li>Create Store-specific attrittbutes on the fly</li>
                        <li>
                          Simple, Configurable (e.g. size, color, etc.), bundled
                        </li>
                        <li>Downloadable/Digital Products, Virtual Products</li>
                      </ol>
                    </div>
                  </div>
                  <h3 className="block-title mb-0">Lining</h3>
                  <p className="content">
                    100% Polyester, Main: 100% Polyester.
                  </p>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="tab-additional-info"
                role="tabpanel"
                aria-labelledby="tab-additional-info-tab"
              >
                <div className="product-single__addtional-info">
                  <div className="item">
                    <label className="h6">Weight</label>
                    <span>1.25 kg</span>
                  </div>
                  <div className="item">
                    <label className="h6">Dimensions</label>
                    <span>90 x 60 x 90 cm</span>
                  </div>
                  <div className="item">
                    <label className="h6">Size</label>
                    <span>XS, S, M, L, XL</span>
                  </div>
                  <div className="item">
                    <label className="h6">Color</label>
                    <span>Black, Orange, White</span>
                  </div>
                  <div className="item">
                    <label className="h6">Storage</label>
                    <span>Relaxed fit shirt-style dress with a rugged</span>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="tab-reviews"
                role="tabpanel"
                aria-labelledby="tab-reviews-tab"
              >
                <h2 className="product-single__reviews-title">Reviews</h2>
                <div className="product-single__reviews-list">
                  <div className="product-single__reviews-item">
                    <div className="customer-avatar">
                      <img loading="lazy" src="../images/avatar.jpg" alt="" />
                    </div>
                    <div className="customer-review">
                      <div className="customer-name">
                        <h6>Janice Miller</h6>
                        <div className="reviews-group d-flex">
                          <svg
                            className="review-star"
                            viewBox="0 0 9 9"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <use href="#icon_star" />
                          </svg>
                          <svg
                            className="review-star"
                            viewBox="0 0 9 9"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <use href="#icon_star" />
                          </svg>
                          <svg
                            className="review-star"
                            viewBox="0 0 9 9"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <use href="#icon_star" />
                          </svg>
                          <svg
                            className="review-star"
                            viewBox="0 0 9 9"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <use href="#icon_star" />
                          </svg>
                          <svg
                            className="review-star"
                            viewBox="0 0 9 9"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <use href="#icon_star" />
                          </svg>
                        </div>
                      </div>
                      <div className="review-date">April 06, 2023</div>
                      <div className="review-text">
                        <p>
                          Nam libero tempore, cum soluta nobis est eligendi
                          optio cumque nihil impedit quo minus id quod maxime
                          placeat facere possimus, omnis voluptas assumenda est…
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="product-single__reviews-item">
                    <div className="customer-avatar">
                      <img loading="lazy" src="../images/avatar.jpg" alt="" />
                    </div>
                    <div className="customer-review">
                      <div className="customer-name">
                        <h6>Benjam Porter</h6>
                        <div className="reviews-group d-flex">
                          <svg
                            className="review-star"
                            viewBox="0 0 9 9"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <use href="#icon_star" />
                          </svg>
                          <svg
                            className="review-star"
                            viewBox="0 0 9 9"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <use href="#icon_star" />
                          </svg>
                          <svg
                            className="review-star"
                            viewBox="0 0 9 9"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <use href="#icon_star" />
                          </svg>
                          <svg
                            className="review-star"
                            viewBox="0 0 9 9"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <use href="#icon_star" />
                          </svg>
                          <svg
                            className="review-star"
                            viewBox="0 0 9 9"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <use href="#icon_star" />
                          </svg>
                        </div>
                      </div>
                      <div className="review-date">April 06, 2023</div>
                      <div className="review-text">
                        <p>
                          Nam libero tempore, cum soluta nobis est eligendi
                          optio cumque nihil impedit quo minus id quod maxime
                          placeat facere possimus, omnis voluptas assumenda est…
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-single__review-form">
                  <form name="customer-review-form">
                    <h5>Be the first to review “Message Cotton T-Shirt”</h5>
                    <p>
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                    <div className="select-star-rating">
                      <label>Your rating *</label>
                      <span className="star-rating">
                        <svg
                          className="star-rating__star-icon"
                          width={12}
                          height={12}
                          fill="#ccc"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11.1429 5.04687C11.1429 4.84598 10.9286 4.76562 10.7679 4.73884L7.40625 4.25L5.89955 1.20312C5.83929 1.07589 5.72545 0.928571 5.57143 0.928571C5.41741 0.928571 5.30357 1.07589 5.2433 1.20312L3.73661 4.25L0.375 4.73884C0.207589 4.76562 0 4.84598 0 5.04687C0 5.16741 0.0870536 5.28125 0.167411 5.3683L2.60491 7.73884L2.02902 11.0871C2.02232 11.1339 2.01563 11.1741 2.01563 11.221C2.01563 11.3951 2.10268 11.5558 2.29688 11.5558C2.39063 11.5558 2.47768 11.5223 2.56473 11.4754L5.57143 9.89509L8.57813 11.4754C8.65848 11.5223 8.75223 11.5558 8.84598 11.5558C9.04018 11.5558 9.12054 11.3951 9.12054 11.221C9.12054 11.1741 9.12054 11.1339 9.11384 11.0871L8.53795 7.73884L10.9688 5.3683C11.0558 5.28125 11.1429 5.16741 11.1429 5.04687Z" />
                        </svg>
                        <svg
                          className="star-rating__star-icon"
                          width={12}
                          height={12}
                          fill="#ccc"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11.1429 5.04687C11.1429 4.84598 10.9286 4.76562 10.7679 4.73884L7.40625 4.25L5.89955 1.20312C5.83929 1.07589 5.72545 0.928571 5.57143 0.928571C5.41741 0.928571 5.30357 1.07589 5.2433 1.20312L3.73661 4.25L0.375 4.73884C0.207589 4.76562 0 4.84598 0 5.04687C0 5.16741 0.0870536 5.28125 0.167411 5.3683L2.60491 7.73884L2.02902 11.0871C2.02232 11.1339 2.01563 11.1741 2.01563 11.221C2.01563 11.3951 2.10268 11.5558 2.29688 11.5558C2.39063 11.5558 2.47768 11.5223 2.56473 11.4754L5.57143 9.89509L8.57813 11.4754C8.65848 11.5223 8.75223 11.5558 8.84598 11.5558C9.04018 11.5558 9.12054 11.3951 9.12054 11.221C9.12054 11.1741 9.12054 11.1339 9.11384 11.0871L8.53795 7.73884L10.9688 5.3683C11.0558 5.28125 11.1429 5.16741 11.1429 5.04687Z" />
                        </svg>
                        <svg
                          className="star-rating__star-icon"
                          width={12}
                          height={12}
                          fill="#ccc"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11.1429 5.04687C11.1429 4.84598 10.9286 4.76562 10.7679 4.73884L7.40625 4.25L5.89955 1.20312C5.83929 1.07589 5.72545 0.928571 5.57143 0.928571C5.41741 0.928571 5.30357 1.07589 5.2433 1.20312L3.73661 4.25L0.375 4.73884C0.207589 4.76562 0 4.84598 0 5.04687C0 5.16741 0.0870536 5.28125 0.167411 5.3683L2.60491 7.73884L2.02902 11.0871C2.02232 11.1339 2.01563 11.1741 2.01563 11.221C2.01563 11.3951 2.10268 11.5558 2.29688 11.5558C2.39063 11.5558 2.47768 11.5223 2.56473 11.4754L5.57143 9.89509L8.57813 11.4754C8.65848 11.5223 8.75223 11.5558 8.84598 11.5558C9.04018 11.5558 9.12054 11.3951 9.12054 11.221C9.12054 11.1741 9.12054 11.1339 9.11384 11.0871L8.53795 7.73884L10.9688 5.3683C11.0558 5.28125 11.1429 5.16741 11.1429 5.04687Z" />
                        </svg>
                        <svg
                          className="star-rating__star-icon"
                          width={12}
                          height={12}
                          fill="#ccc"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11.1429 5.04687C11.1429 4.84598 10.9286 4.76562 10.7679 4.73884L7.40625 4.25L5.89955 1.20312C5.83929 1.07589 5.72545 0.928571 5.57143 0.928571C5.41741 0.928571 5.30357 1.07589 5.2433 1.20312L3.73661 4.25L0.375 4.73884C0.207589 4.76562 0 4.84598 0 5.04687C0 5.16741 0.0870536 5.28125 0.167411 5.3683L2.60491 7.73884L2.02902 11.0871C2.02232 11.1339 2.01563 11.1741 2.01563 11.221C2.01563 11.3951 2.10268 11.5558 2.29688 11.5558C2.39063 11.5558 2.47768 11.5223 2.56473 11.4754L5.57143 9.89509L8.57813 11.4754C8.65848 11.5223 8.75223 11.5558 8.84598 11.5558C9.04018 11.5558 9.12054 11.3951 9.12054 11.221C9.12054 11.1741 9.12054 11.1339 9.11384 11.0871L8.53795 7.73884L10.9688 5.3683C11.0558 5.28125 11.1429 5.16741 11.1429 5.04687Z" />
                        </svg>
                        <svg
                          className="star-rating__star-icon"
                          width={12}
                          height={12}
                          fill="#ccc"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11.1429 5.04687C11.1429 4.84598 10.9286 4.76562 10.7679 4.73884L7.40625 4.25L5.89955 1.20312C5.83929 1.07589 5.72545 0.928571 5.57143 0.928571C5.41741 0.928571 5.30357 1.07589 5.2433 1.20312L3.73661 4.25L0.375 4.73884C0.207589 4.76562 0 4.84598 0 5.04687C0 5.16741 0.0870536 5.28125 0.167411 5.3683L2.60491 7.73884L2.02902 11.0871C2.02232 11.1339 2.01563 11.1741 2.01563 11.221C2.01563 11.3951 2.10268 11.5558 2.29688 11.5558C2.39063 11.5558 2.47768 11.5223 2.56473 11.4754L5.57143 9.89509L8.57813 11.4754C8.65848 11.5223 8.75223 11.5558 8.84598 11.5558C9.04018 11.5558 9.12054 11.3951 9.12054 11.221C9.12054 11.1741 9.12054 11.1339 9.11384 11.0871L8.53795 7.73884L10.9688 5.3683C11.0558 5.28125 11.1429 5.16741 11.1429 5.04687Z" />
                        </svg>
                      </span>
                      <input
                        type="hidden"
                        id="form-input-rating"
                        defaultValue=""
                      />
                    </div>
                    <div className="mb-4">
                      <textarea
                        id="form-input-review"
                        className="form-control form-control_gray"
                        placeholder="Your Review"
                        cols={30}
                        rows={8}
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-label-fixed mb-4">
                      <label htmlFor="form-input-name" className="form-label">
                        Name *
                      </label>
                      <input
                        id="form-input-name"
                        className="form-control form-control-md form-control_gray"
                      />
                    </div>
                    <div className="form-label-fixed mb-4">
                      <label htmlFor="form-input-email" className="form-label">
                        Email address *
                      </label>
                      <input
                        id="form-input-email"
                        className="form-control form-control-md form-control_gray"
                      />
                    </div>
                    <div className="form-check mb-4">
                      <input
                        className="form-check-input form-check-input_fill"
                        type="checkbox"
                        defaultValue=""
                        id="remember_checkbox"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="remember_checkbox"
                      >
                        Save my name, email, and website in this browser for the
                        next time I comment.
                      </label>
                    </div>
                    <div className="form-action">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      
        {/* /.products-carousel container */}
      </main>
    </>
  );
};

export default ProductDetails;
