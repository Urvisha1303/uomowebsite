import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Shipping = () => {
  const [subtotal, setSubTotal] = useState(0);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const [shipping, setShipping] = useState("");
  useEffect(() => {
    getCart();
    // getProduct();
  }, []);

  const shippingType = (e) => {
    setShipping(e.target.value);
  };

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

  const handlePayment = () => {
    const options = {
      key: "rzp_test_lCGWVGmMKjk0GP",
      amount: 10 * 100, // Convert to paise
      currency: "INR",
      name: "Your Company Name",
      description: "Test Transaction",
      image: "https://example.com/your_logo", // Optional
      handler: function (response) {
        alert("Payment successful!");
        console.log(response);
        navigate("/confirm", {state: shipping})
      }
      // ,
      // prefill: {
      //   name: "User Name",
      //   email: "user@example.com",
      //   contact: "9999999999"
      // },
      // notes: {
      //   address: "Some Address"
      // },
      // theme: {
      //   color: "#F37254"
      // }
    };
    
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  

  return (
    <>
      <main className="page-wrapper" style={{ marginBottom: "50px" }}>
        <div className="mb-4 pb-4" />
        <section className="shop-checkout container">
          <h2 className="page-title">Shipping and Checkout</h2>
          <div className="checkout-steps">
            <Link to={"/cart"} className="checkout-steps__item  active">
              <span className="checkout-steps__item-number">01</span>
              <span className="checkout-steps__item-title">
                <span>Shopping Bag</span>
                <em>Manage Your Items List</em>
              </span>
            </Link>
            <Link to={"/checkout"} className="checkout-steps__item  active">
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
          <form>
            <div className="checkout-form">
              <div className="billing-info__wrapper">
                <h4>BILLING DETAILS</h4>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-floating my-3">
                      <input
                        className="form-control"
                        id="checkout_first_name"
                        placeholder="First Name"
                        type="text"
                        
                      />
                      <label htmlFor="checkout_first_name">First Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating my-3">
                      <input
                        className="form-control"
                        id="checkout_last_name"
                        placeholder="Last Name"
                        type="text"
                       
                      />
                      <label htmlFor="checkout_last_name required">
                        Last Name
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating my-3">
                      <input
                        className="form-control"
                        id="checkout_company_name"
                        placeholder="Company Name (optional)"
                        type="text"
                      />
                      <label htmlFor="checkout_company_name">
                        Company Name (optional)
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="search-field my-3">
                      <div className="form-label-fixed hover-container ">
                        <label
                          htmlFor="search-dropdown required"
                          className="form-label"
                        >
                          Country / Region*
                        </label>
                        <div className="js-hover__open">
                          <input
                            className="form-control form-control-lg search-field__actor search-field__arrow-down"
                            id="search-dropdown"
                            readOnly=""
                            placeholder="Choose a location..."
                            type="text"
                            defaultValue=""
                            name="search-keyword"
                          />
                        </div>
                        <div className="filters-container js-hidden-content mt-2">
                          <div className="search-field__input-wrapper">
                            <input
                              className="search-field__input form-control form-control-sm bg-lighter border-lighter"
                              placeholder="Search"
                              type="text"
                            />
                          </div>
                          <ul className="search-suggestion list-unstyled">
                            <li className="search-suggestion__item js-search-select">
                              Australia
                            </li>
                            <li className="search-suggestion__item js-search-select">
                              Canada
                            </li>
                            <li className="search-suggestion__item js-search-select">
                              United Kingdom
                            </li>
                            <li className="search-suggestion__item js-search-select">
                              United States
                            </li>
                            <li className="search-suggestion__item js-search-select">
                              Turkey
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating mt-3 mb-3">
                      <input
                        className="form-control"
                        id="checkout_street_address"
                        placeholder="Street Address *"
                        type="text"
                      />
                      <label htmlFor="checkout_company_name">
                        Street Address *
                      </label>
                    </div>
                    <div className="form-floating mt-3 mb-3">
                      <input
                        className="form-control"
                        id="checkout_street_address_2"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating my-3">
                      <input
                        className="form-control"
                        id="checkout_city"
                        placeholder="Town / City *"
                        type="text"
                      />
                      <label htmlFor="checkout_city">Town / City *</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating my-3">
                      <input
                        className="form-control"
                        id="checkout_zipcode"
                        placeholder="Postcode / ZIP *"
                        type="text"
                      />
                      <label htmlFor="checkout_zipcode">Postcode / ZIP *</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating my-3">
                      <input
                        className="form-control"
                        id="checkout_province"
                        placeholder="Province *"
                        type="text"
                      />
                      <label htmlFor="checkout_province">Province *</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating my-3">
                      <input
                        className="form-control"
                        id="checkout_phone"
                        placeholder="Phone *"
                        type="text"
                      />
                      <label htmlFor="checkout_phone">Phone *</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating my-3">
                      <input
                        className="form-control"
                        id="checkout_email"
                        placeholder="Your Mail *"
                        type="email"
                      />
                      <label htmlFor="checkout_email">Your Mail *</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-check mt-3">
                      <input
                        className="form-check-input form-check-input_fill"
                        id="create_account"
                        type="checkbox"
                        defaultValue=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="create_account"
                      >
                        CREATE AN ACCOUNT?
                      </label>
                    </div>
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input form-check-input_fill"
                        id="ship_different_address"
                        type="checkbox"
                        defaultValue=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="ship_different_address"
                      >
                        SHIP TO A DIFFERENT ADDRESS?
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mt-3">
                    <textarea
                      className="form-control form-control_gray"
                      placeholder="Order Notes (optional)"
                      cols={30}
                      rows={8}
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="checkout__totals-wrapper">
                <div className="sticky-content">
                  <div className="checkout__totals">
                    <h3>Your Order</h3>
                    {/* {cart.map((item) => {
                      return (
                        <> */}
                    <table className="checkout-cart-items">
                      <thead>
                        <tr>
                          <th>PRODUCT</th>
                          <th>SUBTOTAL</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((item) => {
                          return (
                            <>
                              <tr>
                                <td>
                                  {item.prd.ProductName} x {item.qty}
                                </td>
                                <td>${item.prd.ProductPrice * item.qty}</td>
                              </tr>
                            </>
                          );
                        })}
                      </tbody>
                    </table>

                    {/* </>
                      );
                    })} */}
                    <table className="checkout-totals">
                      <tbody>
                        <tr>
                          <th>SUBTOTAL</th>
                          <td>${subtotal}</td>
                        </tr>
                        <tr>
                          <th>SHIPPING</th>
                          <td>Free shipping</td>
                        </tr>
                        <tr>
                          <th>VAT</th>
                          <td>$19</td>
                        </tr>
                        <tr>
                          <th>TOTAL</th>
                          <td>${subtotal + 19} </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="checkout__payment-methods">
                    <div className="form-check">
                      <input
                        className="form-check-input form-check-input_fill"
                        id="checkout_payment_method_1"
                        type="radio"
                        value={"Direct bank Transfer"}
                        onChange={shippingType}
                        name="checkout_payment_method"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="checkout_payment_method_1"
                      >
                        Direct bank transfer
                        <span className="option-detail d-block">
                          Make your payment directly into our bank account.
                          Please use your Order ID as the payment reference.Your
                          order will not be shipped until the funds have cleared
                          in our account.
                        </span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input form-check-input_fill"
                        id="checkout_payment_method_2"
                        type="radio"
                        name="checkout_payment_method"
                        value={"Check payments"}
                        onChange={shippingType}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="checkout_payment_method_2"
                      >
                        Check payments
                        <span className="option-detail d-block">
                          Phasellus sed volutpat orci. Fusce eget lore mauris
                          vehicula elementum gravida nec dui. Aenean aliquam
                          varius ipsum, non ultricies tellus sodales eu. Donec
                          dignissim viverra nunc, ut aliquet magna posuere eget.
                        </span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input form-check-input_fill"
                        id="checkout_payment_method_3"
                        type="radio"
                        name="checkout_payment_method"
                        value={"Cash on delivery"}
                        onChange={shippingType}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="checkout_payment_method_3"
                      >
                        Cash on delivery
                        <span className="option-detail d-block">
                          Phasellus sed volutpat orci. Fusce eget lore mauris
                          vehicula elementum gravida nec dui. Aenean aliquam
                          varius ipsum, non ultricies tellus sodales eu. Donec
                          dignissim viverra nunc, ut aliquet magna posuere eget.
                        </span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input form-check-input_fill"
                        id="checkout_payment_method_4"
                        type="radio"
                        name="checkout_payment_method"
                        value={"Paypal"}
                        onChange={shippingType}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="checkout_payment_method_4"
                      >
                        Paypal
                        <span className="option-detail d-block">
                          Phasellus sed volutpat orci. Fusce eget lore mauris
                          vehicula elementum gravida nec dui. Aenean aliquam
                          varius ipsum, non ultricies tellus sodales eu. Donec
                          dignissim viverra nunc, ut aliquet magna posuere eget.
                        </span>
                      </label>
                    </div>
                    <div className="policy-text">
                      Your personal data will be used to process your order,
                      support your experience throughout this website, and for
                      other purposes described in our
                      <a target="_blank" href="/terms">
                        privacy policy
                      </a>
                      .
                    </div>
                  </div>
                  {/* <button
                    // onClick={()=>{
                    //   navigate("/confirm", {state: shipping})
                    // }}

                    onClick={() => {
                      handlePayment(subtotal + 19);
                    }}
                    className="btn btn-primary btn-checkout"
                  >
                    PLACE ORDER
                  </button> */}
                  <button type="button" className="btn btn-primary btn-checkout" onClick={handlePayment}>PLACE ORDER</button>
                </div>
              </div>
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default Shipping;
