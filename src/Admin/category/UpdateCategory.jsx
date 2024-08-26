import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateCategory = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [category, setcategory] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:3000/category?id=${id}`).then((result) => {
            console.log(result.data[0]);
            setcategory(result.data[0])
        })
    }, [])
    const submitCat = (e) => {
        e.preventDefault()
        axios.patch((`http://localhost:3000/category/${id}`), { category: document.getElementById('cat').value }).then(() => {
            navigate('/dashboard/category')
        })
    }
  return (
    <div> <h4>Update Category</h4>
    <form onSubmit={submitCat}>
        <div className="form-group mb-2">
            {/* <label>Category</label> */}
            <input type="text" defaultValue={category.category} className="form-control" id="cat" placeholder="Example input" />
        </div>
        <input type="submit" className="btn btn-primary" />
    </form></div>
  )
}

export default UpdateCategory