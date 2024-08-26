import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  },[]);

  const getProduct = () => {
    axios.get("http://localhost:3000/products").then((result) => {
      setProduct(result.data);
    });
  };
  console.log(product);

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:3000/products/${id}`).then(() => {
      getProduct();
    });
  };

  const navigate = useNavigate();
 
  return (
    <>
      <button
        type="button"
        onClick={() => {
          navigate("/dashboard/product/add");
        }}
        className="btn btn-primary mt-5 mb-5"
      >
        Add Product
      </button>
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Image</th>
            <th scope="col">Quantity</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
    
          {product.map((result, index) => {
            
            return (
              <>
                <tr key={index}>
                  <td scope="row">{result.ProductName}</td>
                  <td scope="row">
                    <img
                      src={result.ProductImage}
                      height={"50px"}
                      width={"50px"}
                      alt=""
                    />
                  </td>
                  <td scope="row">{result.ProductQuantity}</td>
                  <td scope="row">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        deleteProduct(result.id);
                      }}
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        navigate(`/dashboard/product/update/${result.id}`);
                      }}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
          {product.length === 0 && (
            <tr>
              <td colSpan={4} style={{ textAlign: "center" }}>
                No Data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Product;
