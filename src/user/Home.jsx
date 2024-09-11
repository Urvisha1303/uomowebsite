import React,{useEffect, useState} from 'react'
import axios from 'axios';

const Home = () => {
    const [product, setProduct] = useState({});

    useEffect(() => {
      getProduct();
    }, []);
  
    const getProduct = async () => {
      let product = await axios.get(`http://localhost:3000/products`);
      console.log(product.data);
      setProduct(product.data);
    };
    return (
        <>
            <main style={{ paddingTop: 90 }}>
                <section className="full-width_padding">
                    <div
                        className="full-width_border border-2"
                        style={{ borderColor: "#eeeeee" }}
                    >
                        <div className="shop-banner position-relative ">
                            <div className="background-img" style={{ backgroundColor: "#eeeeee" }}>
                                <img
                                    loading="lazy"
                                    src="../images/shop/shop_banner_character1.png"
                                    width={1759}
                                    height={420}
                                    alt="Pattern"
                                    className="slideshow-bg__img object-fit-cover"
                                />
                            </div>
                            <div className="shop-banner__content container position-absolute start-50 top-50 translate-middle">
                                <h2 className="stroke-text h1 smooth-16 text-uppercase fw-bold mb-3 mb-xl-4 mb-xl-5">
                                    Jackets &amp; Coats
                                </h2>
                                <ul className="d-flex flex-wrap list-unstyled text-uppercase h6">
                                    <li className="me-3 me-xl-4 pe-1">
                                        <a href="#" className="menu-link menu-link_us-s menu-link_active">
                                            StayHome
                                        </a>
                                    </li>
                                    <li className="me-3 me-xl-4 pe-1">
                                        <a href="#" className="menu-link menu-link_us-s">
                                            New In
                                        </a>
                                    </li>
                                    <li className="me-3 me-xl-4 pe-1">
                                        <a href="#" className="menu-link menu-link_us-s">
                                            Jackets
                                        </a>
                                    </li>
                                    <li className="me-3 me-xl-4 pe-1">
                                        <a href="#" className="menu-link menu-link_us-s">
                                            Hoodies
                                        </a>
                                    </li>
                                    <li className="me-3 me-xl-4 pe-1">
                                        <a href="shop4.html" className="menu-link menu-link_us-s">
                                            Men
                                        </a>
                                    </li>
                                    <li className="me-3 me-xl-4 pe-1">
                                        <a href="shop5.html" className="menu-link menu-link_us-s">
                                            Women
                                        </a>
                                    </li>
                                    <li className="me-3 me-xl-4 pe-1">
                                        <a href="#" className="menu-link menu-link_us-s">
                                            Trousers
                                        </a>
                                    </li>
                                    <li className="me-3 me-xl-4 pe-1">
                                        <a href="shop3.html" className="menu-link menu-link_us-s">
                                            Accessories
                                        </a>
                                    </li>
                                    <li className="me-3 me-xl-4 pe-1">
                                        <a href="#" className="menu-link menu-link_us-s">
                                            Shoes
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* /.shop-banner__content */}
                        </div>
                        {/* /.shop-banner position-relative */}
                    </div>
                    {/* /.full-width_border */}
                </section>
                {/* /.full-width_padding*/}
                <div className="mb-4 pb-lg-3" />
                <section className="shop-main container">
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
                        <div className="shop-acs d-flex align-items-center justify-content-between justify-content-md-end flex-grow-1">
                            <select
                                className="shop-acs__select form-select w-auto border-0 py-0 order-1 order-md-0"
                                aria-label="Sort Items"
                                name="total-number"
                            >
                                <option selected="">Default Sorting</option>
                                <option value={1}>Featured</option>
                                <option value={2}>Best selling</option>
                                <option value={3}>Alphabetically, A-Z</option>
                                <option value={3}>Alphabetically, Z-A</option>
                                <option value={3}>Price, low to high</option>
                                <option value={3}>Price, high to low</option>
                                <option value={3}>Date, old to new</option>
                                <option value={3}>Date, new to old</option>
                            </select>
                            <div className="shop-asc__seprator mx-3 bg-light d-none d-md-block order-md-0" />
                            <div className="col-size align-items-center order-1 d-none d-lg-flex">
                                <span className="text-uppercase fw-medium me-2">View</span>
                                <button
                                    className="btn-link fw-medium me-2 js-cols-size"
                                    data-target="products-grid"
                                    data-cols={2}
                                >
                                    2
                                </button>
                                <button
                                    className="btn-link fw-medium me-2 js-cols-size"
                                    data-target="products-grid"
                                    data-cols={3}
                                >
                                    3
                                </button>
                                <button
                                    className="btn-link fw-medium js-cols-size"
                                    data-target="products-grid"
                                    data-cols={4}
                                >
                                    4
                                </button>
                            </div>
                            {/* /.col-size */}
                            <div className="shop-asc__seprator mx-3 bg-light d-none d-lg-block order-md-1" />
                            <div className="shop-filter d-flex align-items-center order-0 order-md-3">
                                <button
                                    className="btn-link btn-link_f d-flex align-items-center ps-0 js-open-aside"
                                    data-aside="shopFilter"
                                >
                                    <svg
                                        className="d-inline-block align-middle me-2"
                                        width={14}
                                        height={10}
                                        viewBox="0 0 14 10"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <use href="#icon_filter" />
                                    </svg>
                                    <span className="text-uppercase fw-medium d-inline-block align-middle">
                                        Filter
                                    </span>
                                </button>
                            </div>
                            {/* /.col-size d-flex align-items-center ms-auto ms-md-3 */}
                        </div>
                        {/* /.shop-acs */}
                    </div>
                    {/* /.d-flex justify-content-between */}
                    <div
                        className="products-grid row row-cols-2 row-cols-md-3 row-cols-lg-4"
                        id="products-grid"
                    >
                        <div className="product-card-wrapper">
                            <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                                <div className="pc__img-wrapper">
                                    <div
                                        className="swiper-container background-img js-swiper-slider swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
                                        data-settings='{"resizeObserver": true}'
                                    >
                                        <div
                                            className="swiper-wrapper"
                                            id="swiper-wrapper-59da6c31a2ae9134"
                                            aria-live="polite"
                                            style={{
                                                transform: "translate3d(-255px, 0px, 0px)",
                                                transitionDuration: "0ms"
                                            }}
                                        >
                                            <div
                                                className="swiper-slide swiper-slide-duplicate swiper-slide-prev swiper-slide-duplicate-next"
                                                data-swiper-slide-index={1}
                                                role="group"
                                                aria-label="1 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_1-1.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                            <div
                                                className="swiper-slide swiper-slide-active"
                                                data-swiper-slide-index={0}
                                                role="group"
                                                aria-label="2 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_1.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                            {/* /.pc__img-wrapper */}
                                            <div
                                                className="swiper-slide swiper-slide-next swiper-slide-duplicate-prev"
                                                data-swiper-slide-index={1}
                                                role="group"
                                                aria-label="3 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_1-1.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                            {/* /.pc__img-wrapper */}
                                            <div
                                                className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                                                data-swiper-slide-index={0}
                                                role="group"
                                                aria-label="4 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_1.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <span
                                            className="pc__img-prev"
                                            tabIndex={0}
                                            role="button"
                                            aria-label="Previous slide"
                                            aria-controls="swiper-wrapper-59da6c31a2ae9134"
                                        >
                                            <svg
                                                width={7}
                                                height={11}
                                                viewBox="0 0 7 11"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_prev_sm" />
                                            </svg>
                                        </span>
                                        <span
                                            className="pc__img-next"
                                            tabIndex={0}
                                            role="button"
                                            aria-label="Next slide"
                                            aria-controls="swiper-wrapper-59da6c31a2ae9134"
                                        >
                                            <svg
                                                width={7}
                                                height={11}
                                                viewBox="0 0 7 11"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_next_sm" />
                                            </svg>
                                        </span>
                                        <span
                                            className="swiper-notification"
                                            aria-live="assertive"
                                            aria-atomic="true"
                                        />
                                    </div>
                                    <button
                                        className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                                        data-aside="cartDrawer"
                                        title="Add To Cart"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                                <div className="pc__info position-relative">
                                    <p className="pc__category">Dresses</p>
                                    <h6 className="pc__title">
                                        <a href="product1_simple.html">Cropped Faux Leather Jacket</a>
                                    </h6>
                                    <div className="product-card__price d-flex">
                                        <span className="money price">$29</span>
                                    </div>
                                    <div className="product-card__review d-flex align-items-center">
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
                                    <button
                                        className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                                        title="Add To Wishlist"
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
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="product-card-wrapper">
                            <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                                <div className="pc__img-wrapper">
                                    <div
                                        className="swiper-container background-img js-swiper-slider swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
                                        data-settings='{"resizeObserver": true}'
                                    >
                                        <div
                                            className="swiper-wrapper"
                                            id="swiper-wrapper-c1010a4ccd3a179e4d"
                                            aria-live="polite"
                                            style={{
                                                transform: "translate3d(-255px, 0px, 0px)",
                                                transitionDuration: "0ms"
                                            }}
                                        >
                                            <div
                                                className="swiper-slide swiper-slide-duplicate swiper-slide-prev swiper-slide-duplicate-next"
                                                data-swiper-slide-index={1}
                                                role="group"
                                                aria-label="1 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_2-1.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                            <div
                                                className="swiper-slide swiper-slide-active"
                                                data-swiper-slide-index={0}
                                                role="group"
                                                aria-label="2 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_2.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                            {/* /.pc__img-wrapper */}
                                            <div
                                                className="swiper-slide swiper-slide-next swiper-slide-duplicate-prev"
                                                data-swiper-slide-index={1}
                                                role="group"
                                                aria-label="3 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_2-1.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                            {/* /.pc__img-wrapper */}
                                            <div
                                                className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                                                data-swiper-slide-index={0}
                                                role="group"
                                                aria-label="4 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_2.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <span
                                            className="pc__img-prev"
                                            tabIndex={0}
                                            role="button"
                                            aria-label="Previous slide"
                                            aria-controls="swiper-wrapper-c1010a4ccd3a179e4d"
                                        >
                                            <svg
                                                width={7}
                                                height={11}
                                                viewBox="0 0 7 11"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_prev_sm" />
                                            </svg>
                                        </span>
                                        <span
                                            className="pc__img-next"
                                            tabIndex={0}
                                            role="button"
                                            aria-label="Next slide"
                                            aria-controls="swiper-wrapper-c1010a4ccd3a179e4d"
                                        >
                                            <svg
                                                width={7}
                                                height={11}
                                                viewBox="0 0 7 11"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_next_sm" />
                                            </svg>
                                        </span>
                                        <span
                                            className="swiper-notification"
                                            aria-live="assertive"
                                            aria-atomic="true"
                                        />
                                    </div>
                                    <button
                                        className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                                        data-aside="cartDrawer"
                                        title="Add To Cart"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                                <div className="pc__info position-relative">
                                    <p className="pc__category">Dresses</p>
                                    <h6 className="pc__title">
                                        <a href="product1_simple.html">Calvin Shorts</a>
                                    </h6>
                                    <div className="product-card__price d-flex">
                                        <span className="money price">$62</span>
                                    </div>
                                    <div className="d-flex align-items-center mt-1">
                                        <a
                                            href="#"
                                            className="swatch-color pc__swatch-color"
                                            style={{ color: "#222222" }}
                                        />
                                        <a
                                            href="#"
                                            className="swatch-color swatch_active pc__swatch-color"
                                            style={{ color: "#b9a16b" }}
                                        />
                                        <a
                                            href="#"
                                            className="swatch-color pc__swatch-color"
                                            style={{ color: "#f5e6e0" }}
                                        />
                                    </div>
                                    <button
                                        className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                                        title="Add To Wishlist"
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
                                    </button>
                                </div>
                                <div className="pc-labels position-absolute top-0 start-0 w-100 d-flex justify-content-between">
                                    <div className="pc-labels__right ms-auto">
                                        <span className="pc-label pc-label_sale d-block text-white">
                                            -67%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-card-wrapper">
                            <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                                <div className="pc__img-wrapper">
                                    <div
                                        className="swiper-container background-img js-swiper-slider swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
                                        data-settings='{"resizeObserver": true}'
                                    >
                                        <div
                                            className="swiper-wrapper"
                                            id="swiper-wrapper-7d95231a6c22e10f1"
                                            aria-live="polite"
                                            style={{
                                                transform: "translate3d(-255px, 0px, 0px)",
                                                transitionDuration: "0ms"
                                            }}
                                        >
                                            <div
                                                className="swiper-slide swiper-slide-duplicate swiper-slide-prev swiper-slide-duplicate-next"
                                                data-swiper-slide-index={1}
                                                role="group"
                                                aria-label="1 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_3-1.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                            <div
                                                className="swiper-slide swiper-slide-active"
                                                data-swiper-slide-index={0}
                                                role="group"
                                                aria-label="2 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_3.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                            {/* /.pc__img-wrapper */}
                                            <div
                                                className="swiper-slide swiper-slide-next swiper-slide-duplicate-prev"
                                                data-swiper-slide-index={1}
                                                role="group"
                                                aria-label="3 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_3-1.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                            {/* /.pc__img-wrapper */}
                                            <div
                                                className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                                                data-swiper-slide-index={0}
                                                role="group"
                                                aria-label="4 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_3.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <span
                                            className="pc__img-prev"
                                            tabIndex={0}
                                            role="button"
                                            aria-label="Previous slide"
                                            aria-controls="swiper-wrapper-7d95231a6c22e10f1"
                                        >
                                            <svg
                                                width={7}
                                                height={11}
                                                viewBox="0 0 7 11"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_prev_sm" />
                                            </svg>
                                        </span>
                                        <span
                                            className="pc__img-next"
                                            tabIndex={0}
                                            role="button"
                                            aria-label="Next slide"
                                            aria-controls="swiper-wrapper-7d95231a6c22e10f1"
                                        >
                                            <svg
                                                width={7}
                                                height={11}
                                                viewBox="0 0 7 11"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_next_sm" />
                                            </svg>
                                        </span>
                                        <span
                                            className="swiper-notification"
                                            aria-live="assertive"
                                            aria-atomic="true"
                                        />
                                    </div>
                                    <button
                                        className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                                        data-aside="cartDrawer"
                                        title="Add To Cart"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                                <div className="pc__info position-relative">
                                    <p className="pc__category">Dresses</p>
                                    <h6 className="pc__title">
                                        <a href="product1_simple.html">Kirby T-Shirt</a>
                                    </h6>
                                    <div className="product-card__price d-flex">
                                        <span className="money price">$17</span>
                                    </div>
                                    <button
                                        className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                                        title="Add To Wishlist"
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
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="product-card-wrapper">
                            <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                                <div className="pc__img-wrapper">
                                    <div
                                        className="swiper-container background-img js-swiper-slider swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
                                        data-settings='{"resizeObserver": true}'
                                    >
                                        <div
                                            className="swiper-wrapper"
                                            id="swiper-wrapper-6a582e91fb4f0fc7"
                                            aria-live="polite"
                                            style={{
                                                transform: "translate3d(-255px, 0px, 0px)",
                                                transitionDuration: "0ms"
                                            }}
                                        >
                                            <div
                                                className="swiper-slide swiper-slide-duplicate swiper-slide-prev swiper-slide-duplicate-next"
                                                data-swiper-slide-index={1}
                                                role="group"
                                                aria-label="1 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_4-1.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                            <div
                                                className="swiper-slide swiper-slide-active"
                                                data-swiper-slide-index={0}
                                                role="group"
                                                aria-label="2 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_4.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                            {/* /.pc__img-wrapper */}
                                            <div
                                                className="swiper-slide swiper-slide-next swiper-slide-duplicate-prev"
                                                data-swiper-slide-index={1}
                                                role="group"
                                                aria-label="3 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_4-1.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                            {/* /.pc__img-wrapper */}
                                            <div
                                                className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                                                data-swiper-slide-index={0}
                                                role="group"
                                                aria-label="4 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_4.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <span
                                            className="pc__img-prev"
                                            tabIndex={0}
                                            role="button"
                                            aria-label="Previous slide"
                                            aria-controls="swiper-wrapper-6a582e91fb4f0fc7"
                                        >
                                            <svg
                                                width={7}
                                                height={11}
                                                viewBox="0 0 7 11"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_prev_sm" />
                                            </svg>
                                        </span>
                                        <span
                                            className="pc__img-next"
                                            tabIndex={0}
                                            role="button"
                                            aria-label="Next slide"
                                            aria-controls="swiper-wrapper-6a582e91fb4f0fc7"
                                        >
                                            <svg
                                                width={7}
                                                height={11}
                                                viewBox="0 0 7 11"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_next_sm" />
                                            </svg>
                                        </span>
                                        <span
                                            className="swiper-notification"
                                            aria-live="assertive"
                                            aria-atomic="true"
                                        />
                                    </div>
                                    <button
                                        className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                                        data-aside="cartDrawer"
                                        title="Add To Cart"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                                <div className="pc__info position-relative">
                                    <p className="pc__category">Dresses</p>
                                    <h6 className="pc__title">
                                        <a href="product1_simple.html">Cableknit Shawl</a>
                                    </h6>
                                    <div className="product-card__price d-flex">
                                        <span className="money price price-old">$129</span>
                                        <span className="money price price-sale">$99</span>
                                    </div>
                                    <button
                                        className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                                        title="Add To Wishlist"
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
                                    </button>
                                </div>
                                <div className="pc-labels position-absolute top-0 start-0 w-100 d-flex justify-content-between">
                                    <div className="pc-labels__left">
                                        <span className="pc-label pc-label_new d-block bg-white">
                                            NEW
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-card-wrapper">
                            <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                                <div className="pc__img-wrapper">
                                    <div
                                        className="swiper-container background-img js-swiper-slider swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
                                        data-settings='{"resizeObserver": true}'
                                    >
                                        <div
                                            className="swiper-wrapper"
                                            id="swiper-wrapper-3bc22e9305ae7c410"
                                            aria-live="polite"
                                            style={{
                                                transform: "translate3d(-255px, 0px, 0px)",
                                                transitionDuration: "0ms"
                                            }}
                                        >
                                            <div
                                                className="swiper-slide swiper-slide-duplicate swiper-slide-prev swiper-slide-duplicate-next"
                                                data-swiper-slide-index={1}
                                                role="group"
                                                aria-label="1 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_5-1.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                            <div
                                                className="swiper-slide swiper-slide-active"
                                                data-swiper-slide-index={0}
                                                role="group"
                                                aria-label="2 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_5.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                            {/* /.pc__img-wrapper */}
                                            <div
                                                className="swiper-slide swiper-slide-next swiper-slide-duplicate-prev"
                                                data-swiper-slide-index={1}
                                                role="group"
                                                aria-label="3 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_5-1.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                            {/* /.pc__img-wrapper */}
                                            <div
                                                className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                                                data-swiper-slide-index={0}
                                                role="group"
                                                aria-label="4 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_5.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <span
                                            className="pc__img-prev"
                                            tabIndex={0}
                                            role="button"
                                            aria-label="Previous slide"
                                            aria-controls="swiper-wrapper-3bc22e9305ae7c410"
                                        >
                                            <svg
                                                width={7}
                                                height={11}
                                                viewBox="0 0 7 11"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_prev_sm" />
                                            </svg>
                                        </span>
                                        <span
                                            className="pc__img-next"
                                            tabIndex={0}
                                            role="button"
                                            aria-label="Next slide"
                                            aria-controls="swiper-wrapper-3bc22e9305ae7c410"
                                        >
                                            <svg
                                                width={7}
                                                height={11}
                                                viewBox="0 0 7 11"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_next_sm" />
                                            </svg>
                                        </span>
                                        <span
                                            className="swiper-notification"
                                            aria-live="assertive"
                                            aria-atomic="true"
                                        />
                                    </div>
                                    <button
                                        className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                                        data-aside="cartDrawer"
                                        title="Add To Cart"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                                <div className="pc__info position-relative">
                                    <p className="pc__category">Dresses</p>
                                    <h6 className="pc__title">
                                        <a href="product1_simple.html">Colorful Jacket</a>
                                    </h6>
                                    <div className="product-card__price d-flex">
                                        <span className="money price">$29</span>
                                    </div>
                                    <button
                                        className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                                        title="Add To Wishlist"
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
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="product-card-wrapper">
                            <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                                <div className="pc__img-wrapper">
                                    <div
                                        className="swiper-container background-img js-swiper-slider swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
                                        data-settings='{"resizeObserver": true}'
                                    >
                                        <div
                                            className="swiper-wrapper"
                                            id="swiper-wrapper-d9b069e09c12ad92"
                                            aria-live="polite"
                                            style={{
                                                transform: "translate3d(-255px, 0px, 0px)",
                                                transitionDuration: "0ms"
                                            }}
                                        >
                                            <div
                                                className="swiper-slide swiper-slide-duplicate swiper-slide-prev swiper-slide-duplicate-next"
                                                data-swiper-slide-index={1}
                                                role="group"
                                                aria-label="1 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_6-1.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                            <div
                                                className="swiper-slide swiper-slide-active"
                                                data-swiper-slide-index={0}
                                                role="group"
                                                aria-label="2 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_6.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                            {/* /.pc__img-wrapper */}
                                            <div
                                                className="swiper-slide swiper-slide-next swiper-slide-duplicate-prev"
                                                data-swiper-slide-index={1}
                                                role="group"
                                                aria-label="3 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_6-1.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                            {/* /.pc__img-wrapper */}
                                            <div
                                                className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                                                data-swiper-slide-index={0}
                                                role="group"
                                                aria-label="4 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_6.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <span
                                            className="pc__img-prev"
                                            tabIndex={0}
                                            role="button"
                                            aria-label="Previous slide"
                                            aria-controls="swiper-wrapper-d9b069e09c12ad92"
                                        >
                                            <svg
                                                width={7}
                                                height={11}
                                                viewBox="0 0 7 11"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_prev_sm" />
                                            </svg>
                                        </span>
                                        <span
                                            className="pc__img-next"
                                            tabIndex={0}
                                            role="button"
                                            aria-label="Next slide"
                                            aria-controls="swiper-wrapper-d9b069e09c12ad92"
                                        >
                                            <svg
                                                width={7}
                                                height={11}
                                                viewBox="0 0 7 11"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_next_sm" />
                                            </svg>
                                        </span>
                                        <span
                                            className="swiper-notification"
                                            aria-live="assertive"
                                            aria-atomic="true"
                                        />
                                    </div>
                                    <button
                                        className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                                        data-aside="cartDrawer"
                                        title="Add To Cart"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                                <div className="pc__info position-relative">
                                    <p className="pc__category">Dresses</p>
                                    <h6 className="pc__title">
                                        <a href="product1_simple.html">
                                            Shirt In Botanical Cheetah Print
                                        </a>
                                    </h6>
                                    <div className="product-card__price d-flex">
                                        <span className="money price">$62</span>
                                    </div>
                                    <button
                                        className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                                        title="Add To Wishlist"
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
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="product-card-wrapper">
                            <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                                <div className="pc__img-wrapper">
                                    <div
                                        className="swiper-container background-img js-swiper-slider swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
                                        data-settings='{"resizeObserver": true}'
                                    >
                                        <div
                                            className="swiper-wrapper"
                                            id="swiper-wrapper-a4cc3e143519757b"
                                            aria-live="polite"
                                            style={{
                                                transform: "translate3d(-255px, 0px, 0px)",
                                                transitionDuration: "0ms"
                                            }}
                                        >
                                            <div
                                                className="swiper-slide swiper-slide-duplicate swiper-slide-prev swiper-slide-duplicate-next"
                                                data-swiper-slide-index={1}
                                                role="group"
                                                aria-label="1 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_7-1.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                            <div
                                                className="swiper-slide swiper-slide-active"
                                                data-swiper-slide-index={0}
                                                role="group"
                                                aria-label="2 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_7.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                            {/* /.pc__img-wrapper */}
                                            <div
                                                className="swiper-slide swiper-slide-next swiper-slide-duplicate-prev"
                                                data-swiper-slide-index={1}
                                                role="group"
                                                aria-label="3 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_7-1.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                            {/* /.pc__img-wrapper */}
                                            <div
                                                className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                                                data-swiper-slide-index={0}
                                                role="group"
                                                aria-label="4 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_7.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <span
                                            className="pc__img-prev"
                                            tabIndex={0}
                                            role="button"
                                            aria-label="Previous slide"
                                            aria-controls="swiper-wrapper-a4cc3e143519757b"
                                        >
                                            <svg
                                                width={7}
                                                height={11}
                                                viewBox="0 0 7 11"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_prev_sm" />
                                            </svg>
                                        </span>
                                        <span
                                            className="pc__img-next"
                                            tabIndex={0}
                                            role="button"
                                            aria-label="Next slide"
                                            aria-controls="swiper-wrapper-a4cc3e143519757b"
                                        >
                                            <svg
                                                width={7}
                                                height={11}
                                                viewBox="0 0 7 11"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_next_sm" />
                                            </svg>
                                        </span>
                                        <span
                                            className="swiper-notification"
                                            aria-live="assertive"
                                            aria-atomic="true"
                                        />
                                    </div>
                                    <button
                                        className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                                        data-aside="cartDrawer"
                                        title="Add To Cart"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                                <div className="pc__info position-relative">
                                    <p className="pc__category">Dresses</p>
                                    <h6 className="pc__title">
                                        <a href="product1_simple.html">Cotton Jersey T-Shirt</a>
                                    </h6>
                                    <div className="product-card__price d-flex">
                                        <span className="money price">$17</span>
                                    </div>
                                    <button
                                        className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                                        title="Add To Wishlist"
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
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="product-card-wrapper">
                            <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                                <div className="pc__img-wrapper">
                                    <div
                                        className="swiper-container background-img js-swiper-slider swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
                                        data-settings='{"resizeObserver": true}'
                                    >
                                        <div
                                            className="swiper-wrapper"
                                            id="swiper-wrapper-7ebae5d1bda955e2"
                                            aria-live="polite"
                                            style={{
                                                transform: "translate3d(-255px, 0px, 0px)",
                                                transitionDuration: "0ms"
                                            }}
                                        >
                                            <div
                                                className="swiper-slide swiper-slide-duplicate swiper-slide-prev swiper-slide-duplicate-next"
                                                data-swiper-slide-index={1}
                                                role="group"
                                                aria-label="1 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_8-1.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                            <div
                                                className="swiper-slide swiper-slide-active"
                                                data-swiper-slide-index={0}
                                                role="group"
                                                aria-label="2 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_8.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                            {/* /.pc__img-wrapper */}
                                            <div
                                                className="swiper-slide swiper-slide-next swiper-slide-duplicate-prev"
                                                data-swiper-slide-index={1}
                                                role="group"
                                                aria-label="3 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_8-1.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                            {/* /.pc__img-wrapper */}
                                            <div
                                                className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                                                data-swiper-slide-index={0}
                                                role="group"
                                                aria-label="4 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_8.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <span
                                            className="pc__img-prev"
                                            tabIndex={0}
                                            role="button"
                                            aria-label="Previous slide"
                                            aria-controls="swiper-wrapper-7ebae5d1bda955e2"
                                        >
                                            <svg
                                                width={7}
                                                height={11}
                                                viewBox="0 0 7 11"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_prev_sm" />
                                            </svg>
                                        </span>
                                        <span
                                            className="pc__img-next"
                                            tabIndex={0}
                                            role="button"
                                            aria-label="Next slide"
                                            aria-controls="swiper-wrapper-7ebae5d1bda955e2"
                                        >
                                            <svg
                                                width={7}
                                                height={11}
                                                viewBox="0 0 7 11"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_next_sm" />
                                            </svg>
                                        </span>
                                        <span
                                            className="swiper-notification"
                                            aria-live="assertive"
                                            aria-atomic="true"
                                        />
                                    </div>
                                    <button
                                        className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                                        data-aside="cartDrawer"
                                        title="Add To Cart"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                                <div className="pc__info position-relative">
                                    <p className="pc__category">Dresses</p>
                                    <h6 className="pc__title">
                                        <a href="product1_simple.html">Zessi Dresses</a>
                                    </h6>
                                    <div className="product-card__price d-flex">
                                        <span className="money price price-old">$129</span>
                                        <span className="money price price-sale">$99</span>
                                    </div>
                                    <button
                                        className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                                        title="Add To Wishlist"
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
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="product-card-wrapper">
                            <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                                <div className="pc__img-wrapper">
                                    <div
                                        className="swiper-container background-img js-swiper-slider swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
                                        data-settings='{"resizeObserver": true}'
                                    >
                                        <div
                                            className="swiper-wrapper"
                                            id="swiper-wrapper-bb1053c7f72b1910c9"
                                            aria-live="polite"
                                            style={{
                                                transform: "translate3d(-255px, 0px, 0px)",
                                                transitionDuration: "0ms"
                                            }}
                                        >
                                            <div
                                                className="swiper-slide swiper-slide-duplicate swiper-slide-prev swiper-slide-duplicate-next"
                                                data-swiper-slide-index={1}
                                                role="group"
                                                aria-label="1 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_9-1.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                            <div
                                                className="swiper-slide swiper-slide-active"
                                                data-swiper-slide-index={0}
                                                role="group"
                                                aria-label="2 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_9.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                            {/* /.pc__img-wrapper */}
                                            <div
                                                className="swiper-slide swiper-slide-next swiper-slide-duplicate-prev"
                                                data-swiper-slide-index={1}
                                                role="group"
                                                aria-label="3 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_9-1.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                            {/* /.pc__img-wrapper */}
                                            <div
                                                className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                                                data-swiper-slide-index={0}
                                                role="group"
                                                aria-label="4 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_9.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <span
                                            className="pc__img-prev"
                                            tabIndex={0}
                                            role="button"
                                            aria-label="Previous slide"
                                            aria-controls="swiper-wrapper-bb1053c7f72b1910c9"
                                        >
                                            <svg
                                                width={7}
                                                height={11}
                                                viewBox="0 0 7 11"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_prev_sm" />
                                            </svg>
                                        </span>
                                        <span
                                            className="pc__img-next"
                                            tabIndex={0}
                                            role="button"
                                            aria-label="Next slide"
                                            aria-controls="swiper-wrapper-bb1053c7f72b1910c9"
                                        >
                                            <svg
                                                width={7}
                                                height={11}
                                                viewBox="0 0 7 11"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_next_sm" />
                                            </svg>
                                        </span>
                                        <span
                                            className="swiper-notification"
                                            aria-live="assertive"
                                            aria-atomic="true"
                                        />
                                    </div>
                                    <button
                                        className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                                        data-aside="cartDrawer"
                                        title="Add To Cart"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                                <div className="pc__info position-relative">
                                    <p className="pc__category">Dresses</p>
                                    <h6 className="pc__title">
                                        <a href="product1_simple.html">Cropped Faux Leather Jacket</a>
                                    </h6>
                                    <div className="product-card__price d-flex">
                                        <span className="money price">$29</span>
                                    </div>
                                    <div className="product-card__review d-flex align-items-center">
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
                                    <button
                                        className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                                        title="Add To Wishlist"
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
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="product-card-wrapper">
                            <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                                <div className="pc__img-wrapper">
                                    <div
                                        className="swiper-container background-img js-swiper-slider swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
                                        data-settings='{"resizeObserver": true}'
                                    >
                                        <div
                                            className="swiper-wrapper"
                                            id="swiper-wrapper-39f45d74f61c0e54"
                                            aria-live="polite"
                                            style={{
                                                transform: "translate3d(-255px, 0px, 0px)",
                                                transitionDuration: "0ms"
                                            }}
                                        >
                                            <div
                                                className="swiper-slide swiper-slide-duplicate swiper-slide-prev swiper-slide-duplicate-next"
                                                data-swiper-slide-index={1}
                                                role="group"
                                                aria-label="1 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_10-1.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                            <div
                                                className="swiper-slide swiper-slide-active"
                                                data-swiper-slide-index={0}
                                                role="group"
                                                aria-label="2 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_10.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                            {/* /.pc__img-wrapper */}
                                            <div
                                                className="swiper-slide swiper-slide-next swiper-slide-duplicate-prev"
                                                data-swiper-slide-index={1}
                                                role="group"
                                                aria-label="3 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_10-1.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                            {/* /.pc__img-wrapper */}
                                            <div
                                                className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                                                data-swiper-slide-index={0}
                                                role="group"
                                                aria-label="4 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_10.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <span
                                            className="pc__img-prev"
                                            tabIndex={0}
                                            role="button"
                                            aria-label="Previous slide"
                                            aria-controls="swiper-wrapper-39f45d74f61c0e54"
                                        >
                                            <svg
                                                width={7}
                                                height={11}
                                                viewBox="0 0 7 11"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_prev_sm" />
                                            </svg>
                                        </span>
                                        <span
                                            className="pc__img-next"
                                            tabIndex={0}
                                            role="button"
                                            aria-label="Next slide"
                                            aria-controls="swiper-wrapper-39f45d74f61c0e54"
                                        >
                                            <svg
                                                width={7}
                                                height={11}
                                                viewBox="0 0 7 11"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_next_sm" />
                                            </svg>
                                        </span>
                                        <span
                                            className="swiper-notification"
                                            aria-live="assertive"
                                            aria-atomic="true"
                                        />
                                    </div>
                                    <button
                                        className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                                        data-aside="cartDrawer"
                                        title="Add To Cart"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                                <div className="pc__info position-relative">
                                    <p className="pc__category">Dresses</p>
                                    <h6 className="pc__title">
                                        <a href="product1_simple.html">Calvin Shorts</a>
                                    </h6>
                                    <div className="product-card__price d-flex">
                                        <span className="money price">$62</span>
                                    </div>
                                    <button
                                        className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                                        title="Add To Wishlist"
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
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="product-card-wrapper">
                            <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                                <div className="pc__img-wrapper">
                                    <div
                                        className="swiper-container background-img js-swiper-slider swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
                                        data-settings='{"resizeObserver": true}'
                                    >
                                        <div
                                            className="swiper-wrapper"
                                            id="swiper-wrapper-10edff8e5d72e15ae"
                                            aria-live="polite"
                                            style={{
                                                transform: "translate3d(-255px, 0px, 0px)",
                                                transitionDuration: "0ms"
                                            }}
                                        >
                                            <div
                                                className="swiper-slide swiper-slide-duplicate swiper-slide-prev swiper-slide-duplicate-next"
                                                data-swiper-slide-index={1}
                                                role="group"
                                                aria-label="1 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_11-1.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                            <div
                                                className="swiper-slide swiper-slide-active"
                                                data-swiper-slide-index={0}
                                                role="group"
                                                aria-label="2 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_11.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                            {/* /.pc__img-wrapper */}
                                            <div
                                                className="swiper-slide swiper-slide-next swiper-slide-duplicate-prev"
                                                data-swiper-slide-index={1}
                                                role="group"
                                                aria-label="3 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_11-1.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                            {/* /.pc__img-wrapper */}
                                            <div
                                                className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                                                data-swiper-slide-index={0}
                                                role="group"
                                                aria-label="4 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_11.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <span
                                            className="pc__img-prev"
                                            tabIndex={0}
                                            role="button"
                                            aria-label="Previous slide"
                                            aria-controls="swiper-wrapper-10edff8e5d72e15ae"
                                        >
                                            <svg
                                                width={7}
                                                height={11}
                                                viewBox="0 0 7 11"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_prev_sm" />
                                            </svg>
                                        </span>
                                        <span
                                            className="pc__img-next"
                                            tabIndex={0}
                                            role="button"
                                            aria-label="Next slide"
                                            aria-controls="swiper-wrapper-10edff8e5d72e15ae"
                                        >
                                            <svg
                                                width={7}
                                                height={11}
                                                viewBox="0 0 7 11"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_next_sm" />
                                            </svg>
                                        </span>
                                        <span
                                            className="swiper-notification"
                                            aria-live="assertive"
                                            aria-atomic="true"
                                        />
                                    </div>
                                    <button
                                        className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                                        data-aside="cartDrawer"
                                        title="Add To Cart"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                                <div className="pc__info position-relative">
                                    <p className="pc__category">Dresses</p>
                                    <h6 className="pc__title">
                                        <a href="product1_simple.html">Kirby T-Shirt</a>
                                    </h6>
                                    <div className="product-card__price d-flex">
                                        <span className="money price">$17</span>
                                    </div>
                                    <button
                                        className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                                        title="Add To Wishlist"
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
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="product-card-wrapper">
                            <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                                <div className="pc__img-wrapper">
                                    <div
                                        className="swiper-container background-img js-swiper-slider swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
                                        data-settings='{"resizeObserver": true}'
                                    >
                                        <div
                                            className="swiper-wrapper"
                                            id="swiper-wrapper-329b22f6c9e31f0a"
                                            aria-live="polite"
                                            style={{
                                                transform: "translate3d(-255px, 0px, 0px)",
                                                transitionDuration: "0ms"
                                            }}
                                        >
                                            <div
                                                className="swiper-slide swiper-slide-duplicate swiper-slide-prev swiper-slide-duplicate-next"
                                                data-swiper-slide-index={1}
                                                role="group"
                                                aria-label="1 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_12-1.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                            <div
                                                className="swiper-slide swiper-slide-active"
                                                data-swiper-slide-index={0}
                                                role="group"
                                                aria-label="2 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_12.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                            {/* /.pc__img-wrapper */}
                                            <div
                                                className="swiper-slide swiper-slide-next swiper-slide-duplicate-prev"
                                                data-swiper-slide-index={1}
                                                role="group"
                                                aria-label="3 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_12-1.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                            {/* /.pc__img-wrapper */}
                                            <div
                                                className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                                                data-swiper-slide-index={0}
                                                role="group"
                                                aria-label="4 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_12.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <span
                                            className="pc__img-prev"
                                            tabIndex={0}
                                            role="button"
                                            aria-label="Previous slide"
                                            aria-controls="swiper-wrapper-329b22f6c9e31f0a"
                                        >
                                            <svg
                                                width={7}
                                                height={11}
                                                viewBox="0 0 7 11"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_prev_sm" />
                                            </svg>
                                        </span>
                                        <span
                                            className="pc__img-next"
                                            tabIndex={0}
                                            role="button"
                                            aria-label="Next slide"
                                            aria-controls="swiper-wrapper-329b22f6c9e31f0a"
                                        >
                                            <svg
                                                width={7}
                                                height={11}
                                                viewBox="0 0 7 11"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_next_sm" />
                                            </svg>
                                        </span>
                                        <span
                                            className="swiper-notification"
                                            aria-live="assertive"
                                            aria-atomic="true"
                                        />
                                    </div>
                                    <button
                                        className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                                        data-aside="cartDrawer"
                                        title="Add To Cart"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                                <div className="pc__info position-relative">
                                    <p className="pc__category">Dresses</p>
                                    <h6 className="pc__title">
                                        <a href="product1_simple.html">Cableknit Shawl</a>
                                    </h6>
                                    <div className="product-card__price d-flex">
                                        <span className="money price price-old">$129</span>
                                        <span className="money price price-sale">$99</span>
                                    </div>
                                    <button
                                        className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                                        title="Add To Wishlist"
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
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="product-card-wrapper">
                            <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                                <div className="pc__img-wrapper">
                                    <div
                                        className="swiper-container background-img js-swiper-slider swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
                                        data-settings='{"resizeObserver": true}'
                                    >
                                        <div
                                            className="swiper-wrapper"
                                            id="swiper-wrapper-a5169ee112e377dc"
                                            aria-live="polite"
                                            style={{
                                                transitionDuration: "0ms",
                                                transform: "translate3d(-255px, 0px, 0px)"
                                            }}
                                        >
                                            <div
                                                className="swiper-slide swiper-slide-duplicate swiper-slide-prev swiper-slide-duplicate-next"
                                                data-swiper-slide-index={1}
                                                role="group"
                                                aria-label="1 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_13-1.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                            <div
                                                className="swiper-slide swiper-slide-active"
                                                data-swiper-slide-index={0}
                                                role="group"
                                                aria-label="2 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_13.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                            {/* /.pc__img-wrapper */}
                                            <div
                                                className="swiper-slide swiper-slide-next swiper-slide-duplicate-prev"
                                                data-swiper-slide-index={1}
                                                role="group"
                                                aria-label="3 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_13-1.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                            {/* /.pc__img-wrapper */}
                                            <div
                                                className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                                                data-swiper-slide-index={0}
                                                role="group"
                                                aria-label="4 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_13.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <span
                                            className="pc__img-prev"
                                            tabIndex={0}
                                            role="button"
                                            aria-label="Previous slide"
                                            aria-controls="swiper-wrapper-a5169ee112e377dc"
                                        >
                                            <svg
                                                width={7}
                                                height={11}
                                                viewBox="0 0 7 11"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_prev_sm" />
                                            </svg>
                                        </span>
                                        <span
                                            className="pc__img-next"
                                            tabIndex={0}
                                            role="button"
                                            aria-label="Next slide"
                                            aria-controls="swiper-wrapper-a5169ee112e377dc"
                                        >
                                            <svg
                                                width={7}
                                                height={11}
                                                viewBox="0 0 7 11"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_next_sm" />
                                            </svg>
                                        </span>
                                        <span
                                            className="swiper-notification"
                                            aria-live="assertive"
                                            aria-atomic="true"
                                        />
                                    </div>
                                    <button
                                        className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                                        data-aside="cartDrawer"
                                        title="Add To Cart"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                                <div className="pc__info position-relative">
                                    <p className="pc__category">Dresses</p>
                                    <h6 className="pc__title">
                                        <a href="product1_simple.html">Colorful Jacket</a>
                                    </h6>
                                    <div className="product-card__price d-flex">
                                        <span className="money price">$29</span>
                                    </div>
                                    <button
                                        className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                                        title="Add To Wishlist"
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
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="product-card-wrapper">
                            <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                                <div className="pc__img-wrapper">
                                    <div
                                        className="swiper-container background-img js-swiper-slider swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
                                        data-settings='{"resizeObserver": true}'
                                    >
                                        <div
                                            className="swiper-wrapper"
                                            id="swiper-wrapper-e466f7d9e43449ee"
                                            aria-live="polite"
                                            style={{
                                                transitionDuration: "0ms",
                                                transform: "translate3d(-255px, 0px, 0px)"
                                            }}
                                        >
                                            <div
                                                className="swiper-slide swiper-slide-duplicate swiper-slide-prev swiper-slide-duplicate-next"
                                                data-swiper-slide-index={1}
                                                role="group"
                                                aria-label="1 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_14-1.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                            <div
                                                className="swiper-slide swiper-slide-active"
                                                data-swiper-slide-index={0}
                                                role="group"
                                                aria-label="2 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_14.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                            {/* /.pc__img-wrapper */}
                                            <div
                                                className="swiper-slide swiper-slide-next swiper-slide-duplicate-prev"
                                                data-swiper-slide-index={1}
                                                role="group"
                                                aria-label="3 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_14-1.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                            {/* /.pc__img-wrapper */}
                                            <div
                                                className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                                                data-swiper-slide-index={0}
                                                role="group"
                                                aria-label="4 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_14.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <span
                                            className="pc__img-prev"
                                            tabIndex={0}
                                            role="button"
                                            aria-label="Previous slide"
                                            aria-controls="swiper-wrapper-e466f7d9e43449ee"
                                        >
                                            <svg
                                                width={7}
                                                height={11}
                                                viewBox="0 0 7 11"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_prev_sm" />
                                            </svg>
                                        </span>
                                        <span
                                            className="pc__img-next"
                                            tabIndex={0}
                                            role="button"
                                            aria-label="Next slide"
                                            aria-controls="swiper-wrapper-e466f7d9e43449ee"
                                        >
                                            <svg
                                                width={7}
                                                height={11}
                                                viewBox="0 0 7 11"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_next_sm" />
                                            </svg>
                                        </span>
                                        <span
                                            className="swiper-notification"
                                            aria-live="assertive"
                                            aria-atomic="true"
                                        />
                                    </div>
                                    <button
                                        className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                                        data-aside="cartDrawer"
                                        title="Add To Cart"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                                <div className="pc__info position-relative">
                                    <p className="pc__category">Dresses</p>
                                    <h6 className="pc__title">
                                        <a href="product1_simple.html">
                                            Shirt In Botanical Cheetah Print
                                        </a>
                                    </h6>
                                    <div className="product-card__price d-flex">
                                        <span className="money price">$62</span>
                                    </div>
                                    <button
                                        className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                                        title="Add To Wishlist"
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
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="product-card-wrapper">
                            <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                                <div className="pc__img-wrapper">
                                    <div
                                        className="swiper-container background-img js-swiper-slider swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
                                        data-settings='{"resizeObserver": true}'
                                    >
                                        <div
                                            className="swiper-wrapper"
                                            id="swiper-wrapper-5f7fb4c10363b9e910"
                                            aria-live="polite"
                                            style={{
                                                transitionDuration: "0ms",
                                                transform: "translate3d(-255px, 0px, 0px)"
                                            }}
                                        >
                                            <div
                                                className="swiper-slide swiper-slide-duplicate swiper-slide-prev swiper-slide-duplicate-next"
                                                data-swiper-slide-index={1}
                                                role="group"
                                                aria-label="1 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_15-1.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                            <div
                                                className="swiper-slide swiper-slide-active"
                                                data-swiper-slide-index={0}
                                                role="group"
                                                aria-label="2 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_15.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                            {/* /.pc__img-wrapper */}
                                            <div
                                                className="swiper-slide swiper-slide-next swiper-slide-duplicate-prev"
                                                data-swiper-slide-index={1}
                                                role="group"
                                                aria-label="3 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_15-1.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                            {/* /.pc__img-wrapper */}
                                            <div
                                                className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                                                data-swiper-slide-index={0}
                                                role="group"
                                                aria-label="4 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_15.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <span
                                            className="pc__img-prev"
                                            tabIndex={0}
                                            role="button"
                                            aria-label="Previous slide"
                                            aria-controls="swiper-wrapper-5f7fb4c10363b9e910"
                                        >
                                            <svg
                                                width={7}
                                                height={11}
                                                viewBox="0 0 7 11"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_prev_sm" />
                                            </svg>
                                        </span>
                                        <span
                                            className="pc__img-next"
                                            tabIndex={0}
                                            role="button"
                                            aria-label="Next slide"
                                            aria-controls="swiper-wrapper-5f7fb4c10363b9e910"
                                        >
                                            <svg
                                                width={7}
                                                height={11}
                                                viewBox="0 0 7 11"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_next_sm" />
                                            </svg>
                                        </span>
                                        <span
                                            className="swiper-notification"
                                            aria-live="assertive"
                                            aria-atomic="true"
                                        />
                                    </div>
                                    <button
                                        className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                                        data-aside="cartDrawer"
                                        title="Add To Cart"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                                <div className="pc__info position-relative">
                                    <p className="pc__category">Dresses</p>
                                    <h6 className="pc__title">
                                        <a href="product1_simple.html">Cotton Jersey T-Shirt</a>
                                    </h6>
                                    <div className="product-card__price d-flex">
                                        <span className="money price">$17</span>
                                    </div>
                                    <button
                                        className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                                        title="Add To Wishlist"
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
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="product-card-wrapper">
                            <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                                <div className="pc__img-wrapper">
                                    <div
                                        className="swiper-container background-img js-swiper-slider swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
                                        data-settings='{"resizeObserver": true}'
                                    >
                                        <div
                                            className="swiper-wrapper"
                                            id="swiper-wrapper-117c359d14109b441"
                                            aria-live="polite"
                                            style={{
                                                transitionDuration: "0ms",
                                                transform: "translate3d(-255px, 0px, 0px)"
                                            }}
                                        >
                                            <div
                                                className="swiper-slide swiper-slide-duplicate swiper-slide-prev swiper-slide-duplicate-next"
                                                data-swiper-slide-index={1}
                                                role="group"
                                                aria-label="1 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_16-1.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                            <div
                                                className="swiper-slide swiper-slide-active"
                                                data-swiper-slide-index={0}
                                                role="group"
                                                aria-label="2 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_16.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                            {/* /.pc__img-wrapper */}
                                            <div
                                                className="swiper-slide swiper-slide-next swiper-slide-duplicate-prev"
                                                data-swiper-slide-index={1}
                                                role="group"
                                                aria-label="3 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_16-1.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                            {/* /.pc__img-wrapper */}
                                            <div
                                                className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                                                data-swiper-slide-index={0}
                                                role="group"
                                                aria-label="4 / 4"
                                                style={{ width: 255 }}
                                            >
                                                <a href="product1_simple.html">
                                                    <img
                                                        loading="lazy"
                                                        src="../images/products/product_16.jpg"
                                                        width={330}
                                                        height={400}
                                                        alt="Cropped Faux leather Jacket"
                                                        className="pc__img"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <span
                                            className="pc__img-prev"
                                            tabIndex={0}
                                            role="button"
                                            aria-label="Previous slide"
                                            aria-controls="swiper-wrapper-117c359d14109b441"
                                        >
                                            <svg
                                                width={7}
                                                height={11}
                                                viewBox="0 0 7 11"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_prev_sm" />
                                            </svg>
                                        </span>
                                        <span
                                            className="pc__img-next"
                                            tabIndex={0}
                                            role="button"
                                            aria-label="Next slide"
                                            aria-controls="swiper-wrapper-117c359d14109b441"
                                        >
                                            <svg
                                                width={7}
                                                height={11}
                                                viewBox="0 0 7 11"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <use href="#icon_next_sm" />
                                            </svg>
                                        </span>
                                        <span
                                            className="swiper-notification"
                                            aria-live="assertive"
                                            aria-atomic="true"
                                        />
                                    </div>
                                    <button
                                        className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                                        data-aside="cartDrawer"
                                        title="Add To Cart"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                                <div className="pc__info position-relative">
                                    <p className="pc__category">Dresses</p>
                                    <h6 className="pc__title">
                                        <a href="product1_simple.html">Zessi Dresses</a>
                                    </h6>
                                    <div className="product-card__price d-flex">
                                        <span className="money price price-old">$129</span>
                                        <span className="money price price-sale">$99</span>
                                    </div>
                                    <button
                                        className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                                        title="Add To Wishlist"
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
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /.products-grid row */}
                    <p className="mb-1 text-center fw-medium">SHOWING 36 of 497 items</p>
                    <div
                        className="progress progress_uomo mb-3 ms-auto me-auto"
                        style={{ width: 300 }}
                    >
                        <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "39%" }}
                            aria-valuenow={39}
                            aria-valuemin={0}
                            aria-valuemax={100}
                        />
                    </div>
                    <div className="text-center">
                        <a className="btn-link btn-link_lg text-uppercase fw-medium" href="#">
                            Show More
                        </a>
                    </div>
                </section>
                {/* /.shop-main container */}
            </main>

        </>
    )
}

export default Home