import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Category = () => {
    const [category, setCategory] = useState([])
    const navigate = useNavigate()

    const getCategory = async () => {
        const response = await axios.get("http://localhost:3000/category")
        setCategory(response.data)
    }

    useEffect(() => {
        getCategory()
    }, [])

    const deleteCat = (id) => {
        axios.delete(`http://localhost:3000/category/${id}`).then(() => {
            getCategory()
        })
    }

    return (
        <>
            <button type="button" onClick={() => {
                navigate('/dashboard/category/add')
            }} className="btn btn-primary mt-5 mb-5">Add Category</button>
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">Category</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {category.map((result) => {
                        return (
                            <tr key={result.id}>
                                <th scope="row">{result.category}</th>
                                <td>
                                    <button type="button" className="btn btn-danger" onClick={() => {
                                        deleteCat(result.id)
                                    }}>Delete</button>
                                    <button type="button" className="btn btn-primary" onClick={() => {
                                        navigate(`/dashboard/category/update/${result.id}`)
                                    }}>Update</button>
                                </td>
                            </tr>
                        )
                    })}

                    {category.length === 0 && (
                        <tr>
                            <td colSpan={2}  style={{ textAlign: "center" }}>No Data</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}

export default Category
