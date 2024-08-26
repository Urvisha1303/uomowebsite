import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [product, setProduct] = useState({
    ProductName: "",
    ProductImage: "",
    ProductDecription: "",
    ProductPrice: "",
    ProductQuantity: "",
  });
  const [category, setcategory] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3000/products/${id}`).then((result) => {
      setProduct(result.data);
    });
    axios.get("http://localhost:3000/category").then((result) => {
      setcategory(result.data);
    });
  }, []);

  const addProduct = (e) => {
    const { id, value } = e.target;
    setProduct({ ...product, [id]: value });
  };

  const submitProduct = (e) => {
    e.preventDefault();
    axios.patch(`http://localhost:3000/products/${id}`, product).then(() => {
      navigate("/dashboard/product");
    });
  };
  return (
    <>
      <h4>Update Product</h4>
      <form onSubmit={submitProduct}>
        <div className="form-group mb-2">
          <label htmlFor="ProductName">Product Name</label>
          <input
            type="text"
            className="form-control"
            id="ProductName"
            placeholder="Product Name"
            value={product.ProductName}
            onChange={addProduct}
          />

          <label htmlFor="ProductImage">Product Image</label>
          <input
            type="text"
            className="form-control"
            id="ProductImage"
            placeholder="Product Image"
            value={product.ProductImage}
            onChange={addProduct}
          />
          <label htmlFor="ProductDecription">Product Decription</label>
          <input
            type="text"
            className="form-control"
            id="ProductDecription"
            placeholder="Product Decription"
            value={product.ProductDecription}
            onChange={addProduct}
          />

          <label htmlFor="ProductPrice">Product Price</label>
          <input
            type="text"
            className="form-control"
            id="ProductPrice"
            placeholder="Product Price"
            value={product.ProductPrice}
            onChange={addProduct}
          />

          <label htmlFor="ProductQuantity">Product Quantity</label>
          <input
            type="text"
            className="form-control"
            id="ProductQuantity"
            placeholder="Product Quantity"
            value={product.ProductQuantity}
            onChange={addProduct}
          />

          <label htmlFor="ProductCategory">Product Category</label>
          <select
            id="ProductCategory"
            className="form-control"
            onChange={addProduct}
            value={product.ProductCategory}
          >
            <option value="">Select Category</option>
            {category.map((result) => {
              return (
                <>
                  <option key={result.id} value={result.category}>
                    {result.category}
                  </option>
                </>
              );
            })}
          </select>
        </div>
        <input type="submit" className="btn btn-primary" />
      </form>
    </>
  );
};

export default UpdateProduct;
