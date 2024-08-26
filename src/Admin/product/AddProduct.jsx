import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState([]);
  const [product, setproduct] = useState({
    ProductName: "",
    ProductImage:"",
    ProductPrice: "",
    ProductDecription: "",
    ProductQuantity: "",
    ProductCategory: "",
  });

  React.useEffect(() => {
    axios.get(`http://localhost:3000/category`).then((result) => {
      setcategory(result.data);
    });
    
  },[]);

  const addProduct = (e)=>{
    const{id,value} = e.target
    setproduct({...product,[id]:value})

  }

  const submitProduct = (e) =>{
    // console.log(product);
    e.preventDefault()
    axios.post(`http://localhost:3000/products`,product).then(()=>{
      navigate('/dashboard/product')
    })
  }
  return (
    <>
      <h4>Add Product</h4>
      <form onSubmit={submitProduct}>
        <div className="form-group mb-2">
          <label htmlFor="ProductName">Product Name</label>
          <input
            type="text"
            className="form-control"
            id="ProductName"
            placeholder="Product Name"
            onChange={addProduct}
          />

          <label htmlFor="ProductImage">Product Image</label>
          <input
            type="text"
            className="form-control"
            id="ProductImage"
            placeholder="Product Image"
            onChange={addProduct}
          />

          <label htmlFor="ProductDecription">Product Decription</label>
          <input
            type="text"
            className="form-control"
            id="ProductDecription"
            placeholder="Product Decription"
            onChange={addProduct}
          />

          <label htmlFor="ProductPrice">Product Price</label>
          <input
            type="text"
            className="form-control"
            id="ProductPrice"
            placeholder="Product Price"
            onChange={addProduct}
          />

          <label htmlFor="ProductQuantity">Product Quantity</label>
          <input
            type="text"
            className="form-control"
            id="ProductQuantity"
            placeholder="Product Quantity"
            onChange={addProduct}
          />

          <label htmlFor="ProductCategory">Product Category</label>
          <select id="ProductCategory" className="form-control" onChange={addProduct}>
            <option value="">Select Category</option>
            
            {category.map((result) => {
                console.log(result.category);
              return (
                <>
                  <option key={result.id} value={result.category}>{result.category}</option>

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

export default AddProduct;
