import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  
  const navigator = useNavigate();

  const submitCat = (e) => {
    e.preventDefault();
    axios.post(
    `http://localhost:3000/category`, {category: document.getElementById("category").value}).then(()=>{
      navigator("/dashboard/category")
    })
  };
  return (
    <>
      <h4>Add Category</h4>
      <form onSubmit={submitCat}>
        {newFunction()}
        <input type="submit" className="btn btn-primary" />
      </form>
    </>
  );

  function newFunction() {
    return (
      <div className="form-group mb-2">
        <label htmlFor="category">Category</label>
        <input
          type="text"
          className="form-control"
          id="category"
          placeholder="Example input"
        />
      </div>
    );
  }
};

export default AddCategory;
