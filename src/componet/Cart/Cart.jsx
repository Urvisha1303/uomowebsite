import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [subtotal, setSubTotal] = useState(0);
  const [ shippingCost, SetshippingCose] = useState(0)
  useEffect(() => {
    getCart();
    // getProduct();
  }, []);

  //   const getProduct = ()=>{
  // axios.get(`http://localhost:3000/products`).then((res)=>{
  //   console.log(res.data);
  // })
  //   }

  const getCart = async () => {
    try {
      const cartData = await axios.get(
        `http://localhost:3000/cart?userid=${localStorage.getItem("userid")}`
      );
      //   setCart(cart);
      console.log(cartData);
      let MtcartProduct = [];

      const productPromises = cartData.data.map(async (element) => {
        const productResult = await axios.get(
          `http://localhost:3000/products?id=${element.productId}`
        );
        return {
          prd: productResult.data[0],
          qty: element.quantity,
          cartid: element.id,
        };
      });
      MtcartProduct = await Promise.all(productPromises);
      console.log(MtcartProduct);

      let subtotal = 0;
      MtcartProduct.map((element) => {
        subtotal += element.qty * element.prd.ProductPrice;
      });
      setCart(MtcartProduct);
      setSubTotal(subtotal);
    } catch (error) {
      console.log(error);
    }
  };
  const Increment = (id, qty) => {
    axios
      .patch(`http://localhost:3000/cart/${id}`, {
        quantity: qty + 1,
      })
      .then(() => {
        getCart();
      });
  };

  const Decrement = (id, qty) => {
    if (qty >= 2) {
      axios
        .patch(`http://localhost:3000/cart/${id}`, {
          quantity: qty - 1,
        })
        .then(() => {
          getCart();
        });
    }
  };

  const DeleteCart = (cartid) => {
    axios.delete(`http://localhost:3000/cart/${cartid}`).then(() => {
      getCart();
    });
  };


  const shippingChange = (e) => {
    SetshippingCose(e)
  }
  return (
    <>
      <main className="page-wrapper">
        <div className="mb-5 pb-5" />
        <section className="shop-checkout container">
          <h2 className="page-title">Cart</h2>
          <div className="checkout-steps">
            <Link to={"/cart"} className="checkout-steps__item  active" >
              <span className="checkout-steps__item-number">01</span>
              <span className="checkout-steps__item-title">
                <span>Shopping Bag</span>
                <em>Manage Your Items List</em>
              </span>
            </Link>
            <Link  to={"/checkout"} className="checkout-steps__item  " >
              <span className="checkout-steps__item-number">02</span>
              <span className="checkout-steps__item-title">
                <span>Shipping and Checkout</span>
                <em>Checkout Your Items List</em>
              </span>
            </Link>
            <Link to={"/confirm"} className="checkout-steps__item  ">
              <span className="checkout-steps__item-number">03</span>
              <span className="checkout-steps__item-title">
                <span>Confirmation</span>
                <em>Review And Submit Your Order</em>
              </span>
            </Link>
          </div>
          <div
            className="shopping-cart"
            style={{ minHeight: "calc(-300px + 100vh)" }}
          >
            <div className="cart-table__wrapper">
              <table className="cart-table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th />
                      <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => {
                    return (
                      <>
                        <tr>
                          <td>
                            <div className="shopping-cart__product-item">
                              <img
                                alt="image"
                                loading="lazy"
                                width={120}
                                height={120}
                                decoding="async"
                                data-nimg={1}
                                style={{ color: "transparent" }}
                                //   srcSet="/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fproduct_2.jpg&w=128&q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fproduct_2.jpg&w=256&q=75 2x"
                                src={item.prd.ProductImage}
                              />
                            </div>
                          </td>
                          <td>
                            <div className="shopping-cart__product-item__detail">
                              <h4>{item.prd.ProductName}</h4>
                              {/* <ul className="shopping-cart__product-item__options">
                                <li>Color: Yellow</li>
                                <li>Size: L</li>
                              </ul> */}
                            </div>
                          </td>
                          <td>
                            <span className="shopping-cart__product-price">
                              ${item.prd.ProductPrice}
                            </span>
                          </td>
                          <td>
                            <div className="qty-control position-relative">
                              <input
                                min={1}
                                className="qty-control__number text-center"
                                type="number"
                                value={item.qty}
                                name="quantity"
                              />
                              <div
                                className="qty-control__reduce"
                                onClick={() => {
                                  Decrement(item.cartid, item.qty);
                                }}
                              >
                                -
                              </div>
                              <div
                                className="qty-control__increase"
                                onClick={() => {
                                  Increment(item.cartid, item.qty);
                                }}
                              >
                                +
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="shopping-cart__subtotal">
                              ${item.prd.ProductPrice * item.qty}
                            </span>
                          </td>
                          <td>
                            <div
                              className="remove-cart"
                              onClick={() => {
                                DeleteCart(item.cartid);
                              }}
                            >
                              <svg
                                width={10}
                                height={10}
                                viewBox="0 0 10 10"
                                fill="#767676"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M0.259435 8.85506L9.11449 0L10 0.885506L1.14494 9.74056L0.259435 8.85506Z" />
                                <path d="M0.885506 0.0889838L9.74057 8.94404L8.85506 9.82955L0 0.97449L0.885506 0.0889838Z" />
                              </svg>
                            </div>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
              <div className="cart-table-footer">
                <form className="position-relative bg-body">
                  <input
                    className="form-control"
                    placeholder="Coupon Code"
                    type="text"
                    name="coupon_code"
                  />
                  <input
                    className="btn-link fw-medium position-absolute top-0 end-0 h-100 px-4"
                    type="submit"
                  />
                </form>
                <button className="btn btn-light">UPDATE CART</button>
              </div>
            </div>
            <div className="shopping-cart__totals-wrapper">
              <div className="sticky-content">
                <div className="shopping-cart__totals">
                  <h3>Cart Totals</h3>
                  <table className="cart-totals">
                    <tbody>
                      <tr>
                        <th>Subtotal</th>
                        <td>${subtotal}</td>
                      </tr>
                      <tr>
                        <th>Shipping</th>
                        <td>
                          <div className="form-check">
                            <input
                              className="form-check-input form-check-input_fill"
                              id="free_shipping"
                              type="checkbox"
                              onChange={()=>{
                                shippingChange(0)
                              }}
                              checked={shippingCost === 0}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="free_shipping"
                            >
                              Free shipping
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input form-check-input_fill"
                              id="flat_rate"
                              type="checkbox"
                              onChange={()=>{
                                shippingChange(49)
                              }}
                              checked={shippingCost === 49}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flat_rate"
                            >
                              Flat rate: $49
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input form-check-input_fill"
                              id="local_pickup"
                              type="checkbox"
                              onChange={()=>{
                                shippingChange(8)
                              }}
                              checked ={shippingCost === 8}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="local_pickup"
                              
                            >
                              Local pickup: $8
                            </label>
                          </div>
                          <div>Shipping to AL.</div>
                          <div>
                            <a href="#" className="menu-link menu-link_us-s">
                              CHANGE ADDRESS
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th>VAT</th>
                        <td>$19</td>
                      </tr>
                      <tr>
                        <th>Total</th>
                        <td>${subtotal + 19 + shippingCost}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mobile_fixed-btn_wrapper">
                  <div className="button-wrapper container">
                    <Link to="/checkout" className="btn btn-primary btn-checkout">
                      PROCEED TO CHECKOUT
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="mb-5 pb-5" />
      </main>
    </>
  );
};

export default Cart;
